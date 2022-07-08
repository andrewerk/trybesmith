import { Router } from 'express';
import OrdersController from '../controllers/ordersController';
import validateToken from '../middlewares/auth.middleware';
import orderValidation from '../middlewares/orderValidation';

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.get('/', ordersController.getAll);
ordersRoutes.post('/', validateToken, orderValidation, ordersController.addOrder);

export default ordersRoutes;
