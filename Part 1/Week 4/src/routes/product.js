import express from 'express';
import { getProducts } from '../controllers/product.js';
const router = express.Router();


// export function productRoutes(app) {
//     app.get('/products', getProducts);

// }
router.get('/', getProducts);

export default router;