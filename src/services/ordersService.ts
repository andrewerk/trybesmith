import connection from '../models/connection';
import { AddOrder, Order } from '../interfaces/order';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async addOrder(order: AddOrder, userId: number): Promise<Order> {
    const { productsIds } = order;
    const result = await this.model.addOrder(productsIds, userId);
    return result;
  }
}