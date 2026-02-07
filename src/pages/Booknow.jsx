import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BookNow() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const services = [
        "Wedding Photography",
        "Wedding Videography",
        "Portrait Session",
        "Event Coverage",
        "Commercial Photography",
        "Fashion Shoot",
        "Product Photography",
        "Cinematic Video",
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    date: "",
                    message: "",
                });
            }, 3000);
        }, 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="contact" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
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
                        Get Started
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Book Your Session
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Ready to capture your special moments? Fill out the form below and we'll get back to you within 24 hours
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </motion.div>

                            {/* Email & Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </motion.div>
                            </div>

                            {/* Service & Date */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Service Type *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white transition-all duration-300 cursor-pointer"
                                    >
                                        <option value="" className="bg-gray-900">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service} className="bg-gray-900">
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label htmlFor="date" className="block text-sm font-semibold text-gray-300 mb-2">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white transition-all duration-300"
                                    />
                                </motion.div>
                            </div>

                            {/* Message */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Additional Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-white placeholder-gray-500 resize-none transition-all duration-300"
                                    placeholder="Tell us more about your vision..."
                                ></textarea>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div variants={itemVariants}>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${isSuccess
                                            ? "bg-green-500 text-white"
                                            : isSubmitting
                                                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                                                : "bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-white/20"
                                        }`}
                                >
                                    {isSuccess ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Booking Request Sent!
                                        </span>
                                    ) : isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Booking Request"
                                    )}
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Contact Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {/* Email */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                                    <p className="text-gray-400">contact@lensstudio.com</p>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </motion.div>

                            {/* Location */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                                    <p className="text-gray-400">123 Photography Lane<br />New York, NY 10001</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Media */}
                        <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Follow Our Work</h3>
                            <p className="text-gray-400 mb-6">Stay updated with our latest projects and behind-the-scenes content</p>
                            <div className="flex gap-3">
                                {["Instagram", "Facebook", "YouTube", "Behance"].map((social) => (
                                    <motion.a
                                        key={social}
                                        href="#"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300"
                                        aria-label={social}
                                    >
                                        <span className="text-xs font-semibold text-white">{social[0]}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Monday - Friday</span>
                                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-white font-semibold">By Appointment</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}