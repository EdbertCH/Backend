import express from 'express';
import OrderController from '../controller/order.controller.js';

const router = express.Router();
router.post('/', OrderController.store);
router.get('/', OrderController.index);
router.delete('/:id', OrderController.delete);

export default router;