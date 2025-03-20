import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

mongoose
    .connect('mongodb://localhost:27017/inventory')
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(5000, () => console.log(`Server running on port 5000`));
    })
    .catch(err => console.error(err));