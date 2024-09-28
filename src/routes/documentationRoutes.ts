import { Router } from 'express';
import documentaionController from '../controllers/documentationController';

const router = Router();

router.get('/documentations', documentaionController.getDocumentations);

router.get('/documentation/:id', documentaionController.getDocumentation);

router.post('/documentation', documentaionController.postDocumentation);

export default router;
