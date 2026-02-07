import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
    const testimonials = [
        { name: "Alice", text: "Amazing cinematic experience!" },
        { name: "Bob", text: "The photos are stunning, highly recommend!" },
        { name: "Charlie", text: "Professional and creative team!" },
        { name: "Diana", text: "Loved the video storytelling, 10/10!" },
        { name: "Ethan", text: "The editing quality is next level!" },
        { name: "Fiona", text: "Very responsive and detail-oriented." },
    ];

    return (
        <section className="py-32 bg-black text-white overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
                    What Our Clients Say
                </h2>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="min-w-[300px] md:min-w-[350px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                           p-8 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10
                           flex-shrink-0 relative overflow-hidden transition-all duration-300"
                            >
                                {/* Decorative Neon Circles */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-bl from-blue-400/20 via-green-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

                                {/* Quote Text */}
                                <p className="mb-6 text-gray-300 italic text-lg">"{t.text}"</p>

                                {/* Name */}
                                <p className="font-bold text-white text-right">{t.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
