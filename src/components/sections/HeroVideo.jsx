import React from "react";
import { motion } from "framer-motion";

export default function HeroVideo() {
    return (
        <section id="home" className="relative h-screen overflow-hidden">
            {/* Video Background - From public/assets/hero.mp4 */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-full object-cover"
            >
                {/* Your local video from public/assets folder */}
                <source src="/assets/hero.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlays for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            
            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-radial-gradient opacity-60" style={{
                background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.8) 100%)'
            }} />

            {/* Content Container */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
                {/* Animated Logo/Brand */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mb-8"
                >
                    <div className="text-sm font-semibold tracking-[0.3em] text-gray-300 mb-4 uppercase">
                        Lens Studio
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6"
                >
                    <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                        CINEMATIC
                    </span>
                    <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                        VISUALS
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl"
                >
                    <span className="font-light">Photography</span>
                    <span className="mx-4 text-white">•</span>
                    <span className="font-light">Videography</span>
                    <span className="mx-4 text-white">•</span>
                    <span className="font-light">Storytelling</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 text-sm tracking-wider uppercase"
                    >
                        View Portfolio
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full backdrop-blur-sm hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 text-sm tracking-wider uppercase"
                    >
                        Get in Touch
                    </motion.button>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "120px" }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="h-px bg-gradient-to-r from-transparent via-white to-transparent mt-16"
                />

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
                    >
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Film Grain Overlay (optional - for cinematic effect) */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat'
            }} />
        </section>
    );
}