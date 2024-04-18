import express from 'express';
import { googleController, loginController, registerController } from '../controllers/user.controller.js';
const router = express.Router();

router.post("/register",registerController);
router.post("/login",loginController);
router.post("/google",googleController);

export default router;