import { Router } from 'express';
import { getHealth, getHealthDetailed } from '../controllers/health.controller.js';

const router = Router();

router.get('/', getHealth);
router.get('/detailed', getHealthDetailed);

export default router;
