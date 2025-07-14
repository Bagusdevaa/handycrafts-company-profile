import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export const getProducts = async () => {
    try {
        console.log("Berjalan di",API_BASE_URL)
        const response = await api.get('/api/products');
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data product with ID ${id}`, error);
        throw error;
    }
};

export const getBlogPosts = async () => {
    try {
        const response = await api.get('/api/blogposts');
        return response.data;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        throw error;
    }
};

export const getBlogPostByIdOrSlug = async (identifier) => {
    try {
        const response = await api.get(`/api/blogposts/${identifier}`);
        return response.data
    } catch (error) {
        console.error(`Error fetching blog post with identifier ${identifier}:`, error);
        throw error;
    }
};