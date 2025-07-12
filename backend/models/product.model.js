import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true, default: 0},
    images: [{type: String}],
    category: {type: String},
    stock: {type: Number, default: 0},
    materials: [{type: String}],
    dimensions: {
        length: Number,
        width: Number,
        height: Number
    },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;