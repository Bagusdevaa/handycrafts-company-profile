import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express'
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

dotenv.config()

// Connect DB
connectDB()

const app = express();

app.use(express.json());
app.use(cors());

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Gunakan Routes API
app.use('/api/products', productRoutes);


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});