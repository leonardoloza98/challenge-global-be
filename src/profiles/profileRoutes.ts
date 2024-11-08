import { Request, Response, Router } from 'express';
import { CreateProfileController } from './controllers/create-profile.controller';
import { GetAllProfileController } from './controllers/get-all-profiles.controller';
import ProfileService from './service';
import Profile from './models/profileModel';
import { CreateProfileUseCase } from './use-cases/create-profile.use-case';
import { GetAllProfileUseCase } from './use-cases/get-all-profile.use-case';

const profileRoutes = Router();
const profileService = new ProfileService(Profile);

//Use cases
const createUserUseCase = new CreateProfileUseCase(profileService)
const getAllUserUseCase = new GetAllProfileUseCase(profileService)

//Controllers
const createProfileController = new CreateProfileController(createUserUseCase)
const getAllProfileController = new GetAllProfileController(getAllUserUseCase)

//Routes
profileRoutes.get('/', (req: Request, res: Response) => getAllProfileController.run(req, res));
profileRoutes.post('/', (req: Request, res: Response) => createProfileController.run(req, res));

export default profileRoutes;