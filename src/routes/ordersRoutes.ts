import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.get('/', ordersController.getAll);

export default ordersRoutes;
