import express from 'express';
import path from 'path';
import cors from './middleware/cors.js';
import routes from './routers/_index.js';
import session from 'express-session';

// app.use(session({
//     secret: 'ini adalah kode secret###', 
//     resave: false, 
//     saveUninitialized: true, 
//     cookie: {maxAge: 60*60*10000}
// }))

const app = express();
const PORT = 8001;

app.use('/public', express.static(path.join(process.cwd(), 'public')));
app.use(express.json())
app.use(cors);
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});