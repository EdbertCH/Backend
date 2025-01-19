import express from 'express';
import ProductController from '../controller/product.controller.js';

const router = express.Router();
router.get('/', ProductController.index);
router.post('/', ProductController.store);

export default router;