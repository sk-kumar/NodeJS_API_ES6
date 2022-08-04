import express from 'express';
import create from '../controllers/userController.js';

const router = express.Router();

router.post('/register', create);

export default router;
