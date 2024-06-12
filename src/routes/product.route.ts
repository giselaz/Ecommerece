import { Router } from 'express';
import ProductController  from '../controllers/product.controller';
const router =  Router();

router.post('/',ProductController.createProduct);
router.get('/',ProductController.getAllProducts);
router.get('/:sku',ProductController.updateProduct);
router.put('/:sku',ProductController.updateProduct);



export default router