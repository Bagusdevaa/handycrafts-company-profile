import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  // Kategori utama untuk company profile
  const categories = [
    {
      slug: 'kayu',
      title: 'Kerajinan Kayu',
      shortDesc: 'Furniture dan dekorasi kayu berkualitas tinggi dengan finishing premium',
      icon: '🪵',
      color: 'from-amber-600 to-amber-700',
      bgImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Furniture Custom', 'Dekorasi Kayu', 'Ukiran Tradisional', 'Finishing Premium']
    },
    {
      slug: 'rajutan',
      title: 'Rajutan & Tenun',
      shortDesc: 'Produk tekstil buatan tangan dengan motif tradisional Indonesia',
      icon: '🧶',
      color: 'from-amber-600 to-amber-700',
      bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Tenun Ikat Bali', 'Rajutan Premium', 'Tas Tradisional', 'Tekstil Custom']
    },
    {
      slug: 'perawatan',
      title: 'Perawatan Alami',
      shortDesc: 'Produk perawatan kulit dan tubuh dari bahan-bahan alami pilihan',
      icon: '🌿',
      color: 'from-amber-600 to-amber-700',
      bgImage: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Sabun Organik', 'Skincare Alami', 'Body Care', 'Aromatherapy']
    },
    {
      slug: 'perhiasan',
      title: 'Perhiasan',
      shortDesc: 'Aksesoris dan perhiasan handmade dengan design elegant dan berkelas',
      icon: '💎',
      color: 'from-amber-600 to-amber-700',
      bgImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Perak Sterling', 'Perhiasan Custom', 'Batu Alam', 'Design Tradisional']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 mt-16">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product Categories
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menghadirkan 4 kategori utama produk kerajinan tangan berkualitas tinggi. 
            Setiap kategori dirancang dengan keahlian dan dedikasi untuk memberikan hasil terbaik bagi klien kami.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.slug}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={category.bgImage}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-85 group-hover:opacity-90 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white min-h-[400px] flex flex-col justify-between">
                <div>
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-yellow-200 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-lg mb-6 leading-relaxed opacity-90">
                    {category.shortDesc}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm opacity-80">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/products/${category.slug}`}
                  className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-gray-900 group-hover:border-yellow-400"
                >
                  Lihat Portfolio
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tertarik dengan Layanan Kami?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kami siap membantu mewujudkan proyek impian Anda dengan kualitas terbaik dan hasil yang memuaskan. 
            Hubungi tim ahli kami untuk konsultasi gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Hubungi Kami
            </Link>
            <Link
              to="/about"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;