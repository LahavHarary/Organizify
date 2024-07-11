import { Router } from 'express';
import documentaionController from '../controllers/documentationController';

const router = Router();

router.get('/documentation', documentaionController.getDocumentation);

export default router;
