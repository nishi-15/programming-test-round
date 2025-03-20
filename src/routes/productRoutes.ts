import express from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticateJWT, createProduct);
router.get('/', getProducts);
router.put('/:id', authenticateJWT, updateProduct);
router.delete('/:id', authenticateJWT, deleteProduct);

export default router;