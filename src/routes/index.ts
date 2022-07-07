import { Router } from 'express';
import productsRoutes from './productRoutes';

const router = Router();
router.use('/products', productsRoutes);

export default router;