import express from 'express';
import next from 'next';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.join(__dirname, '../frontend') });
const handle = nextApp.getRequestHandler();

const app = express();
const PORT = 3000;

// Serve images from the "public" folder
app.use('/gambar', express.static(path.join(__dirname, 'public/gambar')));

nextApp.prepare().then(() => {
  // API route to get all products
  app.get('/api/products', (req, res) => {
    const dataPath = path.join(__dirname, 'data.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading products:', err);
        res.status(500).json({ error: 'Failed to read products' });
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

  // API route to get all categories
  app.get('/api/categories', (req, res) => {
    const categoryPath = path.join(__dirname, 'kategori.json');
    fs.readFile(categoryPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading categories:', err);
        res.status(500).json({ error: 'Failed to read categories' });
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

  // Serve Next.js frontend for all other routes
  app.get('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
