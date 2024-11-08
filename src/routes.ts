import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import specs from './swagger.ts'; 
import userRoutes from './users/routes';

const router = Router();

router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
router.use('/api/users', userRoutes);

export default router;