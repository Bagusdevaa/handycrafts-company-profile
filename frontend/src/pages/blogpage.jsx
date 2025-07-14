import React, { useEffect, useState } from 'react';
import { getBlogPosts } from '../api';
import BlogPostCard from '../components/blogpostcard.jsx';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Kategori yang tersedia (sesuai gambar)
  const categories = [
    'Villa', 'Restaurant', 'Airport', 'Museum', 'Showroom', 
    'Office', 'Hospital', 'Airplane', 'Hotel', 'Bank', 
    'Event', 'Multinasional Brand'
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await getBlogPosts();
        setBlogPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        setError('Gagal memuat postingan blog. Silakan coba lagi nanti.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Filter blog posts berdasarkan search dan category
  useEffect(() => {
    let filtered = blogPosts;

    // Filter berdasarkan search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }

    // Filter berdasarkan kategori
    if (selectedCategory) {
      filtered = filtered.filter(post => 
        post.category && post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, blogPosts]);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(''); // Reset jika kategori yang sama diklik
    } else {
      setSelectedCategory(category);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 mt-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Memuat postingan blog...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest articles and updates
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post (jika ada) */}
        {filteredPosts.length > 0 && !searchTerm && !selectedCategory && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].imageUrl || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {filteredPosts[0].category || 'Museum'}
                    </span>
                    <span className="text-gray-500 text-sm">
                      RECENT POST
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {filteredPosts[0].content.substring(0, 200)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      📖 5 min read
                    </div>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {searchTerm || selectedCategory ? 'No articles found' : 'No blog posts yet'}
            </h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory 
                ? 'Try adjusting your search or filter criteria' 
                : 'Belum ada postingan blog saat ini.'
              }
            </p>
            {(searchTerm || selectedCategory) && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(searchTerm || selectedCategory ? 0 : 1).map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;