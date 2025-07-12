import mongoose from 'mongoose';

const blogPostSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        slug: {type: String, required: true, unique: true},
        content: {type: String, required: true},
        author: {type: String, default: 'Admin'},
        category: {type: String},
        tags: [{type: String}],
        imageUrl: {type: String},
        isPublished: {type: Boolean, default: false}
    },
    {
        timestamps: true
    }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;