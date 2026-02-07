import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from "../animations/FadeIn";

const AboutUs = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '12+', label: 'Years Experience' },
        { number: '300+', label: 'Happy Clients' },
        { number: '50+', label: 'Awards Won' },
    ];

    const team = [
        {
            name: 'Alex Thompson',
            role: 'Lead Photographer',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            specialty: 'Portrait & Fashion',
        },
        {
            name: 'Sarah Mitchell',
            role: 'Creative Director',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            specialty: 'Commercial & Branding',
        },
        {
            name: 'Marcus Chen',
            role: 'Videographer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
            specialty: 'Cinematography',
        },
        {
            name: 'Emily Davis',
            role: 'Photo Editor',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
            specialty: 'Post-Production',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative bg-black text-white py-24 overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4"
                    >
                        Our Story
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            About Us
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Side - Image with Parallax */}
                    <motion.div
                        style={{ y }}
                        className="relative"
                    >
                        <div className="relative h-[500px] rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=1000&fit=crop"
                                alt="Photography Studio"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute bottom-8 left-8 bg-white text-black px-6 py-4 rounded-lg shadow-2xl"
                            >
                                <p className="text-3xl font-bold">12+</p>
                                <p className="text-sm">Years of Excellence</p>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <motion.h3
                            variants={itemVariants}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            Capturing Moments,{' '}
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Creating Memories
                            </span>
                        </motion.h3>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-lg leading-relaxed mb-6"
                        >
                            We are a team of passionate photographers and videographers dedicated to telling your
                            story through the lens. With over a decade of experience, we specialize in capturing
                            the raw emotions and authentic moments that make your memories timeless.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-lg leading-relaxed mb-6"
                        >
                            From intimate weddings to grand corporate events, from personal portraits to commercial
                            campaigns, we bring creativity, professionalism, and an artistic vision to every project.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-lg leading-relaxed mb-8"
                        >
                            Our philosophy is simple: every frame should tell a story, every image should evoke
                            emotion, and every client should feel like family.
                        </motion.p>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="self-start px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center gap-2"
                        >
                            Learn More
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </h4>
                            <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Team Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl md:text-5xl font-bold mb-4">
                            Meet Our{' '}
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Creative Team
                            </span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Talented professionals passionate about capturing your perfect moments
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="text-sm text-gray-300">{member.specialty}</p>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10"
                >
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Mission
                        </h3>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            "To preserve life's most precious moments through the art of photography and videography,
                            creating timeless visual stories that transcend generations. We believe in the power of
                            imagery to evoke emotions, preserve memories, and celebrate the beauty of human connection."
                        </p>
                    </div>

                    {/* Decorative Quote Marks */}
                    <div className="absolute top-8 left-8 text-white/10 text-8xl font-serif">"</div>
                    <div className="absolute bottom-8 right-8 text-white/10 text-8xl font-serif rotate-180">"</div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;