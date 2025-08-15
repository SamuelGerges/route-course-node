import { Router } from 'express';
const router = Router();

import * as commentController from './commentController.js';


router.post('/add-comment', commentController.addComment);
router.get('/get-comment-by-id', commentController.getCommentById);


export default router;