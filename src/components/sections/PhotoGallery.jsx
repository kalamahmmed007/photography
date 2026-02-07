import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Parallax from "../animations/Parallax";

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");

    // Dummy photo data with Unsplash images
    const photos = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop",
            title: "Wedding Ceremony",
            category: "Wedding",
            tall: true,
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop",
            title: "Fashion Portrait",
            category: "Portrait",
            tall: false,
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
            title: "Bride & Groom",
            category: "Wedding",
            tall: true,
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=800&fit=crop",
            title: "Corporate Event",
            category: "Event",
            tall: false,
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop",
            title: "Professional Portrait",
            category: "Portrait",
            tall: true,
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=800&fit=crop",
            title: "Fashion Shoot",
            category: "Fashion",
            tall: false,
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=800&fit=crop",
            title: "Outdoor Portrait",
            category: "Portrait",
            tall: false,
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop",
            title: "Wedding Reception",
            category: "Wedding",
            tall: true,
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=800&fit=crop",
            title: "Business Meeting",
            category: "Event",
            tall: false,
        },
    ];

    const categories = ["All", "Wedding", "Portrait", "Event", "Fashion"];

    const filteredPhotos = activeFilter === "All"
        ? photos
        : photos.filter(photo => photo.category === activeFilter);

    const openImageModal = (photo) => {
        setSelectedImage(photo);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="gallery" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                        Our Portfolio
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Photo Gallery
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A curated collection of our finest work capturing life's most beautiful moments
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                    ? "bg-white text-black shadow-lg shadow-white/20"
                                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Photo Grid - Masonry Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
                    <AnimatePresence mode="wait">
                        {filteredPhotos.map((photo, i) => (
                            <Parallax key={photo.id} speed={i % 3 === 0 ? -50 : i % 3 === 1 ? -70 : -90}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: i * 0.05 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`group relative cursor-pointer ${photo.tall ? 'row-span-2' : 'row-span-1'}`}
                                    onClick={() => openImageModal(photo)}
                                >
                                    {/* Image Container */}
                                    <div className="relative rounded-2xl overflow-hidden bg-gray-900 h-full">
                                        <img
                                            src={photo.src}
                                            alt={photo.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Info Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <span className="inline-block text-xs font-semibold text-white/70 uppercase tracking-wider bg-black/50 px-3 py-1 rounded-full mb-2">
                                                {photo.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white">
                                                {photo.title}
                                            </h3>
                                        </div>

                                        {/* Zoom Icon */}
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/30">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>

                                        {/* Decorative Border on Hover */}
                                        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300"></div>
                                    </div>
                                </motion.div>
                            </Parallax>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-white/20 inline-flex items-center gap-3"
                    >
                        View Complete Gallery
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>

            {/* Image Modal/Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeImageModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-6xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeImageModal}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[85vh] object-contain"
                                />

                                {/* Image Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="inline-block text-xs font-semibold text-gray-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-2">
                                                {selectedImage.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white">
                                                {selectedImage.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Hint */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </div>
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}