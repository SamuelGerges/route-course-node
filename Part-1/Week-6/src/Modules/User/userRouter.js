import { Router } from "express";
const router = Router();

import * as userController from './userController.js';
router.post('/register', userController.addUser);

router.get('/', userController.listUsers);
router.delete('/delete', userController.deleteUser);
router.put('/update', userController.updateUser);

export default router;