import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    // States
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Get current location
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Refs untuk detect click outside
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Scroll listener - HANYA aktif di homepage
    useEffect(() => {
        if (!isHomePage) {
            setIsScrolled(true); // Always solid di non-homepage
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    // Reset scroll state ketika pindah page
    useEffect(() => {
        if (!isHomePage) {
            setIsScrolled(true);
        } else {
            setIsScrolled(window.scrollY > 50);
        }
    }, [location.pathname]);

    // Close dropdown saat click di luar area
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProductDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setIsMobileProductOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Toggle functions
    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsMobileProductOpen(false); // Reset product submenu
    };

    const toggleMobileProduct = () => {
        setIsMobileProductOpen(!isMobileProductOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileProductOpen(false);
    };

    return (
        <header className={`
            fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
            ${isScrolled || !isHomePage
                ? 'bg-gray-800 text-white shadow-lg' 
                : 'bg-transparent text-white'
            }
        `}>
            <div className="container mx-auto px-4">

                {/* DESKTOP LAYOUT */}
                <div className="hidden md:flex justify-between items-center py-4">

                    {/* Logo di kiri */}
                    <div>
                        <h1 className={`text-2xl font-bold transition-all duration-300 ${
                            isScrolled || !isHomePage ? 'text-white' : 'text-white drop-shadow-lg'
                        }`}>
                            <Link to="/" className="hover:text-amber-300 transition-colors">
                                {isHomePage ? (isScrolled ? 'Handycrafts Profile' : 'Handycrafts Profile') : 'Handycrafts Profile'}
                            </Link>
                        </h1>
                    </div>

                    {/* Menu utama di tengah */}
                    <nav className={`flex-1 flex justify-center transition-all duration-300 ${
                        isScrolled || !isHomePage ? 'opacity-100' : 'opacity-90'
                    }`}>
                        <ul className="flex space-x-8">

                            {/* Produk dengan Dropdown */}
                            <li className="relative" ref={dropdownRef}>
                                <button
                                    onClick={toggleProductDropdown}
                                    className="hover:text-amber-300 transition-colors flex items-center focus:outline-none"
                                >
                                    Produk
                                    <svg
                                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                                            isProductDropdownOpen ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {isProductDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl border">
                                        <div className="py-2">
                                            <Link
                                                to="/products/kayu"
                                                className="block px-4 py-3 hover:bg-amber-50 transition-colors border-b border-gray-100 last:border-b-0"
                                                onClick={() => setIsProductDropdownOpen(false)}
                                            >
                                                <div className="font-medium">Kerajinan Kayu</div>
                                                <div className="text-xs text-gray-500">Furniture & dekorasi kayu</div>
                                            </Link>
                                            <Link
                                                to="/products/rajutan"
                                                className="block px-4 py-3 hover:bg-amber-50 transition-colors border-b border-gray-100 last:border-b-0"
                                                onClick={() => setIsProductDropdownOpen(false)}
                                            >
                                                <div className="font-medium">Rajutan & Tenun</div>
                                                <div className="text-xs text-gray-500">Tekstil buatan tangan</div>
                                            </Link>
                                            <Link
                                                to="/products/perawatan"
                                                className="block px-4 py-3 hover:bg-amber-50 transition-colors border-b border-gray-100 last:border-b-0"
                                                onClick={() => setIsProductDropdownOpen(false)}
                                            >
                                                <div className="font-medium">Perawatan Alami</div>
                                                <div className="text-xs text-gray-500">Sabun & skincare alami</div>
                                            </Link>
                                            <Link
                                                to="/products/perhiasan"
                                                className="block px-4 py-3 hover:bg-amber-50 transition-colors border-b border-gray-100 last:border-b-0"
                                                onClick={() => setIsProductDropdownOpen(false)}
                                            >
                                                <div className="font-medium">Perhiasan</div>
                                                <div className="text-xs text-gray-500">Aksesoris buatan tangan</div>
                                            </Link>

                                            <div className="border-t border-gray-200 mt-2 pt-2">
                                                <Link
                                                    to="/products"
                                                    className="block px-4 py-2 text-amber-600 hover:bg-amber-50 transition-colors font-medium"
                                                    onClick={() => setIsProductDropdownOpen(false)}
                                                >
                                                    Lihat Semua Produk →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li>
                                <Link to="/blog" className="hover:text-amber-300 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-amber-300 transition-colors">
                                    Tentang Kami
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact di kanan */}
                    <div>
                        <Link
                            to="/contact"
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                isScrolled || !isHomePage
                                    ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                                    : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white'
                            }`}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* MOBILE LAYOUT */}
                <div className="md:hidden">
                    <div className="flex justify-between items-center py-4">

                        {/* Logo Mobile */}
                        <h1 className="text-xl font-bold">
                            <Link to="/" className="hover:text-amber-300 transition-colors">
                                {isHomePage ? 'Handycrafts Profile' : 'Handycrafts'}
                            </Link>
                        </h1>

                        {/* Hamburger Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className={`p-2 rounded-lg transition-colors focus:outline-none ${
                                isScrolled || !isHomePage ? 'hover:bg-gray-700' : 'hover:bg-white/20'
                            }`}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className={`border-t transition-all duration-300 ${
                            isScrolled || !isHomePage 
                                ? 'border-gray-700 bg-gray-800' 
                                : 'border-white/20 bg-gray-900/95 backdrop-blur-md'
                        }`} ref={mobileMenuRef}>
                            <nav className="py-4">

                                {/* Mobile Produk Accordion */}
                                <div className="mb-2">
                                    <button
                                        onClick={toggleMobileProduct}
                                        className={`w-full flex justify-between items-center px-4 py-3 transition-colors text-left ${
                                            isScrolled || !isHomePage ? 'hover:bg-gray-700' : 'hover:bg-white/10'
                                        }`}
                                    >
                                        <span>Produk</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${
                                                isMobileProductOpen ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Mobile Product Submenu */}
                                    {isMobileProductOpen && (
                                        <div className={`border-l-4 border-amber-500 ml-4 ${
                                            isScrolled || !isHomePage ? 'bg-gray-700' : 'bg-gray-800/90'
                                        }`}>
                                            <Link
                                                to="/products/kayu"
                                                className={`block px-6 py-2 text-sm transition-colors ${
                                                    isScrolled || !isHomePage ? 'hover:bg-gray-600' : 'hover:bg-gray-700/50'
                                                }`}
                                                onClick={closeMobileMenu}
                                            >
                                                Kerajinan Kayu
                                            </Link>
                                            <Link
                                                to="/products/rajutan"
                                                className={`block px-6 py-2 text-sm transition-colors ${
                                                    isScrolled || !isHomePage ? 'hover:bg-gray-600' : 'hover:bg-gray-700/50'
                                                }`}
                                                onClick={closeMobileMenu}
                                            >
                                                Rajutan & Tenun
                                            </Link>
                                            <Link
                                                to="/products/perawatan"
                                                className={`block px-6 py-2 text-sm transition-colors ${
                                                    isScrolled || !isHomePage ? 'hover:bg-gray-600' : 'hover:bg-gray-700/50'
                                                }`}
                                                onClick={closeMobileMenu}
                                            >
                                                Perawatan Alami
                                            </Link>
                                            <Link
                                                to="/products/perhiasan"
                                                className={`block px-6 py-2 text-sm transition-colors ${
                                                    isScrolled || !isHomePage ? 'hover:bg-gray-600' : 'hover:bg-gray-700/50'
                                                }`}
                                                onClick={closeMobileMenu}
                                            >
                                                Perhiasan
                                            </Link>
                                            <Link
                                                to="/products"
                                                className={`block px-6 py-2 text-sm text-amber-300 transition-colors border-t mt-1 pt-3 ${
                                                    isScrolled || !isHomePage 
                                                        ? 'hover:bg-gray-600 border-gray-600' 
                                                        : 'hover:bg-gray-700/50 border-white/20'
                                                }`}
                                                onClick={closeMobileMenu}
                                            >
                                                Lihat Semua →
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Menu Items */}
                                <Link
                                    to="/blog"
                                    className={`block px-4 py-3 transition-colors ${
                                        isScrolled || !isHomePage ? 'hover:bg-gray-700' : 'hover:bg-white/10'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    Blog
                                </Link>
                                <Link
                                    to="/about"
                                    className={`block px-4 py-3 transition-colors ${
                                        isScrolled || !isHomePage ? 'hover:bg-gray-700' : 'hover:bg-white/10'
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    Tentang Kami
                                </Link>
                                <Link
                                    to="/contact"
                                    className="block mx-4 my-3 px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors text-center font-medium"
                                    onClick={closeMobileMenu}
                                >
                                    Contact Us
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;