import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    productId: string;
    description: string;
    category: string[];
    quantity: number;
    price: number;
    supplierInfo?: string;
    dateAdded: Date;
    lastUpdated: Date;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    productId: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    category: [{ type: String, required: true }],
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    supplierInfo: { type: String },
    dateAdded: { type: Date, default: Date.now },
    lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model<IProduct>('Product', ProductSchema);