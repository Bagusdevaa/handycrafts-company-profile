import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const truncateContent = (content, maxLength = 120) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={post.imageUrl || 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        {post.category && (
          <div className="absolute top-4 left-4">
            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
          {post.title}
        </h3>

        {/* Content Preview */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {truncateContent(post.content)}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-gray-400 text-xs">+{post.tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-amber-600 font-medium text-sm">
                {post.author ? post.author.charAt(0).toUpperCase() : 'A'}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author || 'Admin'}</p>
              <p className="text-xs text-gray-500">{formatDate(post.createdAt)}</p>
            </div>
          </div>

          <div className="text-xs text-gray-500 flex items-center">
            📖 5 min read
          </div>
        </div>

        {/* Read More Button */}
        <Link
          to={`/blog/${post.slug || post._id}`}
          className="mt-4 inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group/link"
        >
          Read more
          <svg 
            className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;