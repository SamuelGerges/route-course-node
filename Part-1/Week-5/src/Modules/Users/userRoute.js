import { Router } from "express";
const router = Router();

import * as userController from './userController.js';
router.post('/register', userController.register);
router.get('/get-user-by-email', userController.getUserByEmail);
router.get('/get-users-with-comments', userController.getUsersWithComments);

export default router;