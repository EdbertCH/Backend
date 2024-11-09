import express from 'express';
import ProductController from './controller/product.controller.js';
import OrderController from './controller/order.controller.js';
import PaymentController from './controller/payment.controller.js';
import path from 'path';
import CategoryController from './controller/category.controller.js';

const app = express();
const PORT = 8001;

app.use('/public', express.static(path.join(process.cwd(), 'public')));
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});


// Product Endpoint
app.get('/api/product', ProductController.index);


// Category Endpoint
app.get('/api/category', CategoryController.index)


// Order Endpoint
app.post('/api/order', OrderController.store)
app.get('/api/order', OrderController.index)
app.delete('/api/order/:id', OrderController.delete)

// Payment Endpoint
app.get('/api/payment', PaymentController.index)



app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});