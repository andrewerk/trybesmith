import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.get('/', productsController.getAll);

export default productsRoutes;
