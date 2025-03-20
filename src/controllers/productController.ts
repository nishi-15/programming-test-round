import { Request, Response } from 'express';
import Product from '../modules/Products';
import { Error } from 'mongoose';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};