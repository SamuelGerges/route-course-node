
import express from 'express';
import { getUsers } from '../controllers/user.js';
const router = express.Router();


// export function userRoutes(app){
//     app.get('/users', getUsers);
// }


router.get('/', getUsers);


export default router;