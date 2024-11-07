import express from 'express';
import next from 'next';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.join(__dirname, '../frontend') });
const handle = nextApp.getRequestHandler();

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../frontend/')));

nextApp.prepare().then(() => {
  app.get('/api/data', (req, res) => {
    res.sendFile(path.join(__dirname, 'data.json'));
  });

  app.get('/api/categori', (req,res)=>{
    res.sendFile(path.join(__dirname, 'categori.json'));
  });

  app.get('/', (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});