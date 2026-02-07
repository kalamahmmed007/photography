import React, { useState } from "react";
import Parallax from "../animations/Parallax";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoGallery() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Dummy video data with placeholder thumbnails
    const videos = [
        {
            id: 1,
            title: "Wedding Cinematic",
            category: "Wedding",
            thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
            // Using a sample video URL as placeholder
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            duration: "3:45",
        },
        {
            id: 2,
            title: "Corporate Promo",
            category: "Commercial",
            thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            duration: "2:30",
        },
        {
            id: 3,
            title: "Event Highlights",
            category: "Event",
            thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            duration: "4:12",
        },
        {
            id: 4,
            title: "Fashion Lookbook",
            category: "Fashion",
            thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            duration: "3:20",
        },
    ];

    const openVideoModal = (video) => {
        setSelectedVideo(video);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <section id="videos" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                        Our Work
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Video Reel
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Cinematic stories that capture emotions and create lasting memories
                    </p>
                </motion.div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {videos.map((video, i) => (
                        <Parallax key={video.id} speed={i % 2 === 0 ? -30 : -50}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group relative cursor-pointer"
                                onClick={() => openVideoModal(video)}
                            >
                                {/* Video Thumbnail Container */}
                                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900">
                                    {/* Thumbnail Image */}
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                                        >
                                            <svg
                                                className="w-8 h-8 text-white ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Video Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                                                {video.category}
                                            </span>
                                            <span className="text-xs text-white/70 bg-black/30 px-2 py-1 rounded">
                                                {video.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">
                                            {video.title}
                                        </h3>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        </Parallax>
                    ))}
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
                        View Full Portfolio
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeVideoModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeVideoModal}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Video Player */}
                            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                                <video
                                    src={selectedVideo.videoUrl}
                                    controls
                                    autoPlay
                                    className="w-full aspect-video"
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {/* Video Info */}
                                <div className="p-6 bg-gradient-to-r from-gray-900 to-black">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                {selectedVideo.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mt-1">
                                                {selectedVideo.title}
                                            </h3>
                                        </div>
                                        <span className="text-gray-400">
                                            {selectedVideo.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}