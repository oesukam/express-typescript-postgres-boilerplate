import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from 'swagger/v1';

const router = Router();

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


export default router;
