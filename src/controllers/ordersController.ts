import { Request, Response } from 'express';
import HttpStatusCode from '../shared/http.status.code';
import OrdersService from '../services/ordersService';

class OrdersController {
  constructor(private productService = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.productService.getAll();
    res.status(HttpStatusCode.OK).json(orders);
  };
}

export default OrdersController;
