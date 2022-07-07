import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import addProductValidation from '../middlewares/productsValidation';

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.get('/', productsController.getAll);
productsRoutes.post('/', addProductValidation, productsController.create);

export default productsRoutes;
