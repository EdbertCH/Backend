import express from 'express';
import PaymentController from '../controller/payment.controller.js';

const router = express.Router();
router.get('/', PaymentController.index);

export default router;