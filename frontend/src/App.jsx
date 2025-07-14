// frontend/src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import HomePage from './pages/homepage.jsx';
import AboutPage from './pages/aboutpage.jsx';
import ProductsPage from './pages/productspage.jsx';
import BlogPage from './pages/blogpage.jsx';
import KayuCategoryPage from './pages/category-pages/kayucategorypage.jsx';
import RajutanCategoryPage from './pages/category-pages/rajutancategorypage.jsx';
import PerawatanCategoryPage from './pages/category-pages/perawatancategorypage.jsx';
import PerhiasanCategoryPage from './pages/category-pages/perhiasancategorypage.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/kayu" element={<KayuCategoryPage />} />
            <Route path="/products/rajutan" element={<RajutanCategoryPage />} />
            <Route path="/products/perawatan" element={<PerawatanCategoryPage />} />
            <Route path="/products/perhiasan" element={<PerhiasanCategoryPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;