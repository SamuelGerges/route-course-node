import { Router } from 'express';
const router = Router();


import * as productController from './productController.js';

router.post('/add-product', productController.addProduct);
router.get('/get-products',productController.getProducts);
router.get('/get-product-by-id',productController.getProductById);
export default router;



