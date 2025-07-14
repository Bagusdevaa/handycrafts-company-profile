import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api/index.js';

const PerhiasanCategoryPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryInfo = {
    title: 'Perhiasan Handmade',
    description: 'Kreasi perhiasan cantik dengan teknik handmade menggunakan material berkualitas. Setiap piece dirancang dengan detail dan cinta untuk menciptakan keindahan yang timeless.',
    icon: '💎',
    color: 'yellow',
    heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    expertise: [
      'Wire Wrapping Jewelry',
      'Beadwork & Crystal',
      'Metal Crafting',
      'Custom Design'
    ],
    process: [
      'Design Concept',
      'Material Selection',
      'Handcrafting',
      'Quality Check',
      'Elegant Packaging'
    ]
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProducts();
        const categoryProjects = response.filter(product => product.category === 'perhiasan');
        setProjects(categoryProjects);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setError('Gagal memuat portfolio. Silakan coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Memuat portfolio...</p>
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative mt-16">
        <div className="absolute inset-0">
          <img
            src={categoryInfo.heroImage}
            alt={categoryInfo.title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-700 opacity-85"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center text-white" data-aos="fade-up">
          <div className="text-8xl mb-6">{categoryInfo.icon}</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {categoryInfo.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            {categoryInfo.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Expertise Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
            Keahlian Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryInfo.expertise.map((skill, index) => (
              <div 
                key={index}
                className="bg-amber-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-2xl text-amber-800 font-bold mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-amber-800">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Proses Kerja Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {categoryInfo.process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Jewelry Projects
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Berikut adalah beberapa project perhiasan handmade yang telah kami kerjakan dengan hasil yang menawan
          </p>

          {projects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">{categoryInfo.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Portfolio Segera Hadir
              </h3>
              <p className="text-gray-600">
                Project perhiasan handmade akan segera ditampilkan di sini
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.images?.[0] || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    {project.materials && project.materials.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.materials.slice(0, 3).map((material, index) => (
                          <span
                            key={index}
                            className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.dimensions && (
                      <p className="text-sm text-gray-500">
                        Dimensi: {project.dimensions.length}×{project.dimensions.width}×{project.dimensions.height} cm
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-amber-700 rounded-2xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ingin Perhiasan Custom?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan wujudkan perhiasan impian Anda dengan sentuhan handmade yang elegan
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold mb-2">Telepon</h3>
              <p>+62 812-3456-7890</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p>info@handycrafts.com</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p>+62 812-3456-7890</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Hubungi Kami Sekarang
            </Link>
            <Link
              to="/products"
              className="bg-white/20 backdrop-blur-sm border border-white/30 font-semibold py-3 px-8 rounded-lg hover:bg-white/30 transition-colors"
            >
              Lihat Kategori Lain
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerhiasanCategoryPage;
