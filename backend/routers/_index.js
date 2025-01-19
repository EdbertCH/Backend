import express from 'express';
import productRouter from './product.js';
import categoryRouter from './category.js';
import orderRouter from './order.js';
import paymentRouter from './payment.js';

const router = express.Router();
router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/payment', paymentRouter);

export default router;