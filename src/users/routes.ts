import { Request, Response, Router } from 'express';
import UserService from './service';
import User from './models/userModel';
import { CreateUserController } from './controllers/create-user.controller';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { UpdateUserUseCase } from './use-cases/update-user.use-case';
import { GetUserUseCase } from './use-cases/get-user.use-case';
import { GetAllUserUseCase } from './use-cases/get-all-user.use-case';
import { UpdateUserController } from './controllers/update-user.controller';
import { GetUserController } from './controllers/get-user.controller';
import { GetAllUserController } from './controllers/get-all-user.controller';
import { DeleteUserUseCase } from './use-cases/delete-user.use-case';
import { DeleteUserController } from './controllers/delete-user.controller';

const userRoutes = Router();
const userService = new UserService(User);

//Use cases
const createUserUseCase = new CreateUserUseCase(userService)
const updateUserUseCase = new UpdateUserUseCase(userService)
const getUserUseCase = new GetUserUseCase(userService)
const getAllUserUseCase = new GetAllUserUseCase(userService)
const deleteUserUseCase = new DeleteUserUseCase(userService)

//Controllers
const createUserController = new CreateUserController(createUserUseCase)
const updateUserController = new UpdateUserController(updateUserUseCase)
const getUserController = new GetUserController(getUserUseCase)
const getAllUserController = new GetAllUserController(getAllUserUseCase)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

//Routes
userRoutes.get('/:id', (req: Request, res: Response) => getUserController.run(req, res));
userRoutes.get('/', (req: Request, res: Response) => getAllUserController.run(req, res));
userRoutes.put('/:id', (req: Request, res: Response) => updateUserController.run(req, res));
userRoutes.post('/', (req: Request, res: Response) => createUserController.run(req, res));
userRoutes.delete('/:id', (req: Request, res: Response) => deleteUserController.run(req, res));

export default userRoutes;