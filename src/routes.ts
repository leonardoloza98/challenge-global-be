import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import specs from './swagger'; 
import userRoutes from './users/routes';
import profileRoutes from './profiles/profileRoutes';

const router = Router();

router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
router.use('/api/profiles', profileRoutes);
router.use('/api/users', userRoutes);

export default router;