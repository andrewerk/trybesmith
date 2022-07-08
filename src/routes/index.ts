import { Router } from 'express';
import ordersRoutes from './ordersRoutes';
import productsRoutes from './productRoutes';
import userRoutes from './userRoutes';

const router = Router();
router.use('/products', productsRoutes);
router.use('/users', userRoutes);
router.use('/orders', ordersRoutes);

export default router;