import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userController.userRegistration);
router.get('/user', userController.userData);

export default router;
