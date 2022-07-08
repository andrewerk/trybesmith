import { OkPacket, Pool } from 'mysql2/promise';
import { Order } from '../interfaces/order';

type Product = {
  id: number,
  orderId: number
};

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [rawOrders] = await this.connection
      .execute<OkPacket[] & Order[]>('SELECT id, userId FROM Trybesmith.Orders');
    const [products] = await this.connection
      .execute<OkPacket[] & Product[]>('SELECT id, orderId FROM Trybesmith.Products');
    const orders = rawOrders.map((rawOrder: Order) => {
      const productsArray: number[] = [];
      products.forEach((product: Product) => {
        if (product.orderId === rawOrder.id) productsArray.push(product.id);
      }); 
      return { ...rawOrder, productsIds: productsArray };
    });

    return orders as Order[]; 
  }
}
