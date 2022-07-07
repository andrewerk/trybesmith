import { Router } from 'express';
import UserController from '../controllers/userController';
import addUserValidation from '../middlewares/userValidation';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post('/', addUserValidation, userController.create);

export default userRoutes;
