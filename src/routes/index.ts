import { Router } from 'express';
import productsRoutes from './productRoutes';
import userRoutes from './userRoutes';

const router = Router();
router.use('/products', productsRoutes);
router.use('/users', userRoutes);

export default router;