import express from 'express';
import ProductController from './controller/product.controller.js';
import OrderController from './controller/order.controller.js';
import PaymentController from './controller/payment.controller.js';
import path from 'path';

const app = express();
const PORT = 8001;

app.use('/public', express.static(path.join(process.cwd(), 'public')));
app.use(express.json())


// Product Endpoint
app.get('/api/product', ProductController.index);


// Order Endpoint
app.post('/api/order', OrderController.store)

// Payment Endpoint
app.get('/api/payment', PaymentController.index)



app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});