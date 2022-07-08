import { Request, Response } from 'express';
import HttpStatusCode from '../shared/http.status.code';
import OrdersService from '../services/ordersService';

class OrdersController {
  constructor(private productService = new OrdersService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.productService.getAll();
    res.status(HttpStatusCode.OK).json(orders);
  };

  public addOrder = async (req: Request, res: Response) => {
    const { id } = res.locals.user.data;
    console.log(id);
    const order = await this.productService.addOrder(req.body, id);
    res.status(HttpStatusCode.CREATED).json(order);
  };
}

export default OrdersController;
