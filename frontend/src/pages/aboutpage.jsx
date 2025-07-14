// frontend/src/pages/aboutpage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="min-h-screen">
            
            {/* HERO SECTION - About */}
            <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-20 mt-16">
                <div className="container mx-auto px-4 text-center text-white" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Tentang Handycrafts Profile
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        Lebih dari sekadar kerajinan tangan, kami adalah jembatan antara 
                        tradisi lokal dan kebutuhan modern Anda
                    </p>
                </div>
            </section>

            {/* COMPANY STORY SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Cerita Kami Dimulai dari Kecintaan pada Tradisi
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Handycrafts Profile lahir dari keprihatinan melihat pengrajin lokal yang 
                                kesulitan memasarkan karya-karya indah mereka. Pada tahun 2019, kami 
                                memulai perjalanan dengan misi sederhana: menghubungkan pengrajin 
                                berbakat dengan pelanggan yang menghargai keunikan produk buatan tangan.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Dimulai dari sebuah workshop kecil di Yogyakarta, kini kami telah 
                                bermitra dengan lebih dari 100 pengrajin di seluruh Indonesia. 
                                Setiap produk yang kami jual bukan hanya kerajinan, tetapi juga 
                                menceritakan warisan budaya dan kearifan lokal yang diturunkan 
                                dari generasi ke generasi.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link 
                                    to="/products"
                                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                                >
                                    Lihat Koleksi Kami
                                </Link>
                                <Link 
                                    to="/contact"
                                    className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                        <div className="relative" data-aos="fade-left">
                            <img 
                                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Workshop pengrajin" 
                                className="w-full rounded-lg shadow-lg"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-amber-100 p-6 rounded-lg shadow-lg">
                                <div className="text-3xl font-bold text-amber-600">5+</div>
                                <div className="text-gray-700 font-medium">Tahun Pengalaman</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Visi & Misi Kami
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Komitmen kami dalam mengangkat nilai kerajinan Indonesia
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        
                        {/* Vision */}
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Menjadi platform terdepan yang menghubungkan kerajinan tangan 
                                Indonesia dengan pasar global, sekaligus melestarikan warisan 
                                budaya dan memberdayakan ekonomi pengrajin lokal.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
                            <div className="text-gray-600 text-left space-y-2">
                                <p className="flex items-start">
                                    <span className="text-amber-600 mr-2">•</span>
                                    Memberdayakan pengrajin lokal dengan memberikan akses pasar yang lebih luas
                                </p>
                                <p className="flex items-start">
                                    <span className="text-amber-600 mr-2">•</span>
                                    Menyediakan produk kerajinan berkualitas tinggi dengan harga yang fair
                                </p>
                                <p className="flex items-start">
                                    <span className="text-amber-600 mr-2">•</span>
                                    Melestarikan teknik dan tradisi kerajinan tangan Indonesia
                                </p>
                                <p className="flex items-start">
                                    <span className="text-amber-600 mr-2">•</span>
                                    Memberikan pengalaman berbelanja yang personal dan memuaskan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Nilai-Nilai Kami
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Prinsip-prinsip yang memandu setiap langkah perjalanan kami
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        
                        {/* Authenticity */}
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Keaslian</h3>
                            <p className="text-gray-600">
                                Setiap produk kami adalah karya asli buatan tangan, tanpa produksi massal. 
                                Kami menjaga keaslian teknik dan bahan tradisional dalam setiap pembuatan.
                            </p>
                        </div>

                        {/* Quality */}
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Kualitas</h3>
                            <p className="text-gray-600">
                                Kami memiliki standar kualitas tinggi dalam pemilihan bahan, proses produksi, 
                                dan finishing. Setiap produk melalui quality control yang ketat.
                            </p>
                        </div>

                        {/* Sustainability */}
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 0L8.5 8.5M3 12l4.5 4.5M21 12l-4.5-4.5m0 0L12 3m4.5 4.5L12 12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Keberlanjutan</h3>
                            <p className="text-gray-600">
                                Kami berkomitmen pada praktik yang ramah lingkungan, menggunakan bahan 
                                alami dan mendukung ekonomi lokal untuk masa depan yang berkelanjutan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Tim Kami
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Orang-orang berpengalaman yang berdedikasi untuk menghadirkan yang terbaik
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Founder"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Budi Santoso</h3>
                                <p className="text-amber-600 font-medium mb-3">Founder & CEO</p>
                                <p className="text-gray-600 text-sm">
                                    Dengan latar belakang seni dan bisnis, Budi memulai Handycrafts Profile 
                                    dari kecintaannya pada kerajinan tradisional Indonesia.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <img 
                                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Operations Manager"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sari Dewi</h3>
                                <p className="text-amber-600 font-medium mb-3">Operations Manager</p>
                                <p className="text-gray-600 text-sm">
                                    Sari memastikan setiap proses produksi dan pengiriman berjalan lancar 
                                    dengan koordinasi yang erat dengan para pengrajin mitra.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <img 
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                alt="Design Lead"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Ahmad Rizki</h3>
                                <p className="text-amber-600 font-medium mb-3">Design Lead</p>
                                <p className="text-gray-600 text-sm">
                                    Ahmad bertanggung jawab dalam pengembangan desain produk dan 
                                    memastikan setiap karya memenuhi standar estetika dan fungsionalitas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* JOURNEY/TIMELINE SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Perjalanan Kami
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Milestone penting dalam perkembangan Handycrafts Profile
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-200"></div>

                            {/* Timeline Items */}
                            <div className="space-y-12">
                                
                                {/* 2019 */}
                                <div className="relative flex items-center">
                                    <div className="flex-1 text-right pr-8">
                                        <div className="bg-white p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">2019</h3>
                                            <h4 className="text-lg font-semibold text-amber-600 mb-2">Awal Mula</h4>
                                            <p className="text-gray-600">
                                                Handycrafts Profile didirikan dengan 5 pengrajin mitra di Yogyakarta. 
                                                Fokus awal pada kerajinan kayu dan batik.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8"></div>
                                </div>

                                {/* 2020 */}
                                <div className="relative flex items-center">
                                    <div className="flex-1 pr-8"></div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8">
                                        <div className="bg-white p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">2020</h3>
                                            <h4 className="text-lg font-semibold text-amber-600 mb-2">Ekspansi Digital</h4>
                                            <p className="text-gray-600">
                                                Meluncurkan platform online dan menambah kategori produk: 
                                                rajutan, perhiasan, dan perawatan alami.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2021 */}
                                <div className="relative flex items-center">
                                    <div className="flex-1 text-right pr-8">
                                        <div className="bg-white p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">2021</h3>
                                            <h4 className="text-lg font-semibold text-amber-600 mb-2">Sertifikasi & Kualitas</h4>
                                            <p className="text-gray-600">
                                                Memperoleh sertifikasi kualitas dan bermitra dengan 50+ pengrajin 
                                                di 10 kota di Indonesia.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8"></div>
                                </div>

                                {/* 2022 */}
                                <div className="relative flex items-center">
                                    <div className="flex-1 pr-8"></div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8">
                                        <div className="bg-white p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">2022</h3>
                                            <h4 className="text-lg font-semibold text-amber-600 mb-2">Penghargaan & Pengakuan</h4>
                                            <p className="text-gray-600">
                                                Meraih penghargaan "Best Local Craft Platform" dan melayani 
                                                1000+ pelanggan dengan tingkat kepuasan 98%.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2023-Present */}
                                <div className="relative flex items-center">
                                    <div className="flex-1 text-right pr-8">
                                        <div className="bg-white p-6 rounded-lg shadow-lg">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">2023 - Sekarang</h3>
                                            <h4 className="text-lg font-semibold text-amber-600 mb-2">Ekspansi Nasional</h4>
                                            <p className="text-gray-600">
                                                Bermitra dengan 100+ pengrajin, melayani seluruh Indonesia, 
                                                dan mengembangkan program pelatihan untuk pengrajin muda.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                                    <div className="flex-1 pl-8"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATISTICS SECTION */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Pencapaian Kami
                        </h2>
                        <p className="text-lg text-gray-600">
                            Angka-angka yang mencerminkan dedikasi dan kepercayaan
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">100+</div>
                            <div className="text-gray-600 font-medium">Pengrajin Mitra</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">1500+</div>
                            <div className="text-gray-600 font-medium">Pelanggan Puas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">500+</div>
                            <div className="text-gray-600 font-medium">Produk Unik</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">15</div>
                            <div className="text-gray-600 font-medium">Kota Partner</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Mari Berkolaborasi dengan Kami
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Apakah Anda seorang pengrajin yang ingin bergabung atau pelanggan 
                        yang mencari kerajinan berkualitas? Kami siap melayani Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/contact"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Hubungi Kami
                        </Link>
                        <Link 
                            to="/products"
                            className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Jelajahi Produk
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;