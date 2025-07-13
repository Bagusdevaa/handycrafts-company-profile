import mongoose from 'mongoose';
import BlogPost from '../models/blogpost.model.js'

// Get all blog posts (GET)
const getBlogPost = async (req, res) => {
    try {
        // Hanya ambil yang published, urutkan dari terbaru
        const blogPost = await BlogPost.find({ isPublished: true }).sort({ createdAt: -1 });
        res.json(blogPost);
    } catch (error) {
        console.error("Error in get BlogPost: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get blog post by id (GET)
const getBlogPostByIdOrSlug = async (req, res) => {
    const { identifier } = req.params;
    let blogPost;

    try {
        if (mongoose.Types.ObjectId.isValid(identifier)) {
            blogPost = await BlogPost.findById(identifier);
        } else {
            blogPost = await BlogPost.findOne({ slug: identifier });
        }

        if (blogPost && blogPost.isPublished) {
            res.json(blogPost);
        } else if (blogPost && !blogPost.isPublished) {
            res.status(404).json({ message: "Blog post not found or not published" });
        } else {
            res.status(404).json({ message: "Blog post not found" });
        }
    } catch (error) {
        console.error("Error in get BlogPostById: ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Create new blog post (POST)
const createBlogPost = async (req, res) => {
    const { title, slug, content, author, category, tags, imageUrl, isPublished } = req.body;

    try {
        const blogPost = new BlogPost({
            title,
            slug,
            content,
            author,
            category,
            tags,
            imageUrl,
            isPublished: isPublished || false
        });

        const createdBlogPost = await blogPost.save();
        res.status(201).json(createdBlogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update blog post (PUT)
const updateBlogPost = async (req, res) => {
    const { title, slug, content, author, category, tags, imageUrl, isPublished } = req.body;

    try {
        const blogPost = await BlogPost.findById(req.params.id);

        if (blogPost) {
            blogPost.title = title || blogPost.title;
            blogPost.slug = slug || blogPost.slug;
            blogPost.content = content || blogPost.content;
            blogPost.author = author || blogPost.author;
            blogPost.category = category || blogPost.category;
            blogPost.tags = tags || blogPost.tags;
            blogPost.imageUrl = imageUrl || blogPost.imageUrl;
            blogPost.isPublished = isPublished !== undefined ? isPublished : blogPost.isPublished;

            const updatedBlogPost = await blogPost.save();
            res.json(updatedBlogPost);
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete blog post (DELETE)
const deleteBlogPost = async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (blogPost) {
            res.json({ message: 'Blog post removed' });
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getBlogPost,
    getBlogPostByIdOrSlug,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
};