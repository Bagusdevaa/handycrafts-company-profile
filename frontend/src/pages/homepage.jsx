// frontend/src/pages/homepage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">

                {/* Background dengan Parallax */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Handycrafts Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">


                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                        Kerajinan untuk
                        <br />
                        <span className="text-amber-300">hidup yang indah</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
                        Temukan koleksi kerajinan tangan berkualitas tinggi yang dibuat dengan
                        penuh cinta dan dedikasi oleh pengrajin lokal Indonesia.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-delay-2">
                        <Link
                            to="/products"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                        >
                            Jelajahi Produk
                        </Link>
                        <Link
                            to="/about"
                            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
                        >
                            Pelajari Lebih Lanjut →
                        </Link>
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center text-white/70">
                        <span className="text-sm mb-2">Scroll untuk eksplorasi</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* FEATURED PRODUCTS SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Produk Unggulan
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Koleksi terpilih dari pengrajin terbaik kami
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {/* Product Cards */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Kerajinan Kayu"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Kerajinan Kayu</h3>
                                <p className="text-gray-600 text-sm">Furniture dan dekorasi kayu berkualitas</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Rajutan & Tenun"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Rajutan & Tenun</h3>
                                <p className="text-gray-600 text-sm">Tekstil buatan tangan dengan motif tradisional</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Perawatan Alami"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Perawatan Alami</h3>
                                <p className="text-gray-600 text-sm">Sabun dan skincare dari bahan alami</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <img
                                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Perhiasan"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">Perhiasan</h3>
                                <p className="text-gray-600 text-sm">Aksesoris cantik buatan tangan</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/products"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Lihat Semua Produk
                        </Link>
                    </div>
                </div>
            </section>

                        {/* PROCESS FLOW SECTION */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Alur Proses Pemesanan
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Proses yang mudah dan transparan untuk mendapatkan kerajinan impian Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">

                        {/* Step 1: Konsultasi */}
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors">
                                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    1
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-900">Konsultasi Awal</h3>
                            <p className="text-sm text-gray-600">
                                Diskusikan kebutuhan Anda langsung dengan tim kami, atau isi formulir pemesanan dengan bantuan sales.
                            </p>
                        </div>

                        {/* Step 2: Penawaran Harga */}
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors">
                                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    2
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-900">Penawaran Harga</h3>
                            <p className="text-sm text-gray-600">
                                Kami kirim penawaran dan estimasi waktu setelah memahami kebutuhan Anda
                            </p>
                        </div>

                        {/* Step 3: Persetujuan Design */}
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors">
                                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    3
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-900">Persetujuan Desain & Produksi</h3>
                            <p className="text-sm text-gray-600">
                                Desain disetujui, harga & waktu dikonfirmasi, lalu produksi dimulai setelah DP 50%.
                            </p>
                        </div>

                        {/* Step 4: Progress Tracking */}
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors">
                                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    4
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-900">Pantau Progress Secara Langsung</h3>
                            <p className="text-sm text-gray-600">
                                Proses produksi bisa Anda pantau langsung, real-time dan transparan
                            </p>
                        </div>

                        {/* Step 5: Delivery */}
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors">
                                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    5
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-900">Pelunasan & Instalasi</h3>
                            <p className="text-sm text-gray-600">
                                Begitu produk selesai, Anda lunasi sisanya. Kami langsung atur pengiriman dan pemasangan.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Link
                            to="/contact"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                        >
                            Mulai Konsultasi
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-4">
                        <p className="text-amber-600 font-semibold uppercase tracking-wider text-sm">KENAPA PILIH HANDYCRAFTS PROFILE</p>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Santai aja,<br />
                            yang penting produkmu<br />
                            <span className="text-amber-600">dipromosiin!</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

                        {/* Trusted Company */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Trusted Company</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Handycrafts Profile is renowned for its unwavering commitment to trust. Our steadfast dedication to
                                integrity and reliability ensures that clients place full confidence in our services at every stage.
                            </p>
                        </div>

                        {/* Experienced */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Experienced</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                With years of hands-on experience, our seasoned team possesses the knowledge and skills
                                required to adeptly handle any promotional challenge with precision and finesse.
                            </p>
                        </div>

                        {/* Certified Worker */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">Certified Worker</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our team consists of certified professionals who have undergone rigorous training and
                                possess industry-recognized qualifications, ensuring top-notch service delivery.
                            </p>
                        </div>

                        {/* 24/7 Support */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">24/7 Support</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Round-the-clock customer support ensures that assistance is always available whenever you
                                need it, providing peace of mind and uninterrupted service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Cerita di Balik Setiap Karya
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Kami percaya bahwa setiap kerajinan tangan memiliki cerita. Dari tangan-tangan
                                terampil pengrajin lokal, lahir karya-karya indah yang tidak hanya memperindah
                                rumah Anda, tetapi juga mendukung ekonomi lokal.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Dengan menggunakan bahan-bahan alami dan teknik tradisional yang diwariskan
                                turun temurun, setiap produk kami adalah manifestasi dari kearifan lokal dan
                                dedikasi terhadap kualitas.
                            </p>
                            <Link
                                to="/about"
                                className="text-amber-600 hover:text-amber-700 font-semibold text-lg"
                            >
                                Pelajari Lebih Lanjut →
                            </Link>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Pengrajin bekerja"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CLIENT SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Client Kami
                        </h2>
                        <p className="text-lg text-gray-600">
                            Dipercaya oleh berbagai perusahaan dan individu untuk kebutuhan kerajinan mereka
                        </p>
                    </div>

                    {/* Client Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center opacity-70">

                        {/* Client 1 - Tech Company */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-blue-600">TechCorp</div>
                        </div>

                        {/* Client 2 - Restaurant */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-red-600">FoodieHub</div>
                        </div>

                        {/* Client 3 - Fashion */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-pink-600">StyleCo</div>
                        </div>

                        {/* Client 4 - Bank */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-green-600">BankPlus</div>
                        </div>

                        {/* Client 5 - Hotel */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-purple-600">LuxStay</div>
                        </div>

                        {/* Client 6 - Education */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-indigo-600">EduPro</div>
                        </div>

                        {/* Client 7 - Healthcare */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-teal-600">HealthCare+</div>
                        </div>

                        {/* Client 8 - Automotive */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-gray-600">AutoMax</div>
                        </div>

                        {/* Client 9 - Real Estate */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-orange-600">PropertyPro</div>
                        </div>

                        {/* Client 10 - Sports */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-red-500">SportZone</div>
                        </div>

                        {/* Client 11 - Travel */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-blue-500">TravelWise</div>
                        </div>

                        {/* Client 12 - Retail */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-green-500">ShopMart</div>
                        </div>

                        {/* Client 13 - Media */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-purple-500">MediaHub</div>
                        </div>

                        {/* Client 14 - Consulting */}
                        <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl font-bold text-gray-500">ConsultPro</div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">150+</div>
                            <div className="text-gray-600">Client Puas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">500+</div>
                            <div className="text-gray-600">Project Selesai</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">98%</div>
                            <div className="text-gray-600">Tingkat Kepuasan</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;