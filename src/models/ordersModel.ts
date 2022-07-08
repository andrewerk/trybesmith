import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/order';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute(
        'SELECT * FROM Trybesmith.Orders as orders LEFT JOIN Trybesmith.Products as products'
        + ' WHERE orders.id = products.orderId',
      );
    const [rows] = result;
    return rows as Order[]; 
  }
}
