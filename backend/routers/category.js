import express from 'express';
import CategoryController from '../controller/category.controller.js';

const router = express.Router();
router.get('/', CategoryController.index);

export default router;