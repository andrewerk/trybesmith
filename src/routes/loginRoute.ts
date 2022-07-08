import { Router } from 'express';
import UserController from '../controllers/userController';
import loginValidation from '../middlewares/loginValidation';

const loginRoute = Router();

const userController = new UserController();

loginRoute.post('/', loginValidation, userController.login);

export default loginRoute;
