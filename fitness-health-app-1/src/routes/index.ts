import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/health-tips', router.get('/', indexController.getHealthTips.bind(indexController)));
    app.use('/workout-plans', router.get('/', indexController.getWorkoutPlans.bind(indexController)));
}