import express from 'express';
import { getBlogPost, getBlogPostByIdOrSlug, createBlogPost, updateBlogPost, deleteBlogPost } from '../controllers/blogpost.controller.js';

const router = express.Router();

router.route('/').get(getBlogPost).post(createBlogPost);

router.route('/:identifier').get(getBlogPostByIdOrSlug);

router.route('/:id').put(updateBlogPost).delete(deleteBlogPost);

export default router;