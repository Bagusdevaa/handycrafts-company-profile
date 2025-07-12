import Product from '../models/product.model.js';

// Get all products (GET)
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Error in get products: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get product by id (GET)
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    try {
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found!' })
        }
    } catch (error) {
        console.error("Error in get product by id: ", error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Create a new product (POST)
const createProduct = async (req, res) => {
    const { name, description, price, images, category, stock, materials, dimensions } = req.body;
    try {
        const product = new Product({
            name,
            description,
            price,
            images,
            category,
            stock,
            materials,
            dimensions
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error("Error in create product: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update a product (PUT)
const updateProduct = async (req, res) => {
    const { name, description, price, images, category, stock, materials, dimensions } = req.body;

    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.images = images || product.images;
            product.category = category || product.category;
            product.stock = stock || product.stock;
            product.materials = materials || product.materials;
            product.dimensions = dimensions || product.dimensions;

            const updatedProduct = await product.save();
            res.status(200).json(updatedProduct)
        } else {
            res.status(404).json({ message: 'Product not found!' })
        }
    } catch (error) {
        console.error("Error in update product: ", error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete a product (DELETE)
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};