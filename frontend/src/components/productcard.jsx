import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryLabel = (category) => {
    const categoryMap = {
      'kayu': 'Kerajinan Kayu',
      'rajutan': 'Rajutan & Tenun',
      'perawatan': 'Perawatan Alami',
      'perhiasan': 'Perhiasan'
    };
    return categoryMap[category] || category;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'kayu': 'bg-green-100 text-green-800',
      'rajutan': 'bg-purple-100 text-purple-800',
      'perawatan': 'bg-blue-100 text-blue-800',
      'perhiasan': 'bg-yellow-100 text-yellow-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={product.images?.[currentImageIndex] || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            !imageLoaded ? 'bg-gray-200' : ''
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(product.category)}`}>
            {getCategoryLabel(product.category)}
          </span>
        </div>

        {/* Stock Badge */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              Stok terbatas
            </span>
          </div>
        )}

        {product.stock === 0 && (
          <div className="absolute top-4 right-4">
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
              Habis
            </span>
          </div>
        )}

        {/* Image Navigation */}
        {product.images && product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Materials */}
        {product.materials && product.materials.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {product.materials.slice(0, 3).map((material, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                >
                  {material}
                </span>
              ))}
              {product.materials.length > 3 && (
                <span className="text-gray-400 text-xs">+{product.materials.length - 3} more</span>
              )}
            </div>
          </div>
        )}

        {/* Price and Stock */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-amber-600">
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-gray-500">
              Stok: {product.stock > 0 ? product.stock : 'Habis'}
            </p>
          </div>
          
          {/* Dimensions */}
          {product.dimensions && (
            <div className="text-right">
              <p className="text-xs text-gray-500">Dimensi:</p>
              <p className="text-xs text-gray-600">
                {product.dimensions.length}×{product.dimensions.width}×{product.dimensions.height} cm
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            to={`/products/${product.category}/${product._id}`}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
          >
            Lihat Detail
          </Link>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              product.stock > 0
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? '🛒' : '❌'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;