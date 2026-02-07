import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookiePolicy() {
    const [showBanner, setShowBanner] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true, can't be disabled
        analytics: false,
        marketing: false,
    });
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            // Show banner after 1 second
            setTimeout(() => setShowBanner(true), 1000);
        }
    }, []);

    const handleAcceptAll = () => {
        setPreferences({
            necessary: true,
            analytics: true,
            marketing: true,
        });
        localStorage.setItem("cookieConsent", JSON.stringify({
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: Date.now(),
        }));
        setShowBanner(false);
    };

    const handleAcceptSelected = () => {
        localStorage.setItem("cookieConsent", JSON.stringify({
            ...preferences,
            timestamp: Date.now(),
        }));
        setShowBanner(false);
    };

    const handleRejectAll = () => {
        setPreferences({
            necessary: true,
            analytics: false,
            marketing: false,
        });
        localStorage.setItem("cookieConsent", JSON.stringify({
            necessary: true,
            analytics: false,
            marketing: false,
            timestamp: Date.now(),
        }));
        setShowBanner(false);
    };

    const cookieTypes = [
        {
            id: "necessary",
            title: "Necessary Cookies",
            description: "Essential for the website to function properly. These cannot be disabled.",
            icon: "🔒",
            required: true,
        },
        {
            id: "analytics",
            title: "Analytics Cookies",
            description: "Help us understand how visitors interact with our website by collecting anonymous data.",
            icon: "📊",
            required: false,
        },
        {
            id: "marketing",
            title: "Marketing Cookies",
            description: "Used to track visitors across websites to display relevant advertisements.",
            icon: "🎯",
            required: false,
        },
    ];

    return (
        <>
            {/* Cookie Consent Banner */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                    >
                        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl overflow-hidden">
                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">🍪</span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">
                                            Cookie Preferences
                                        </h3>
                                    </div>
                                    <button
                                        onClick={() => setShowBanner(false)}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                    By clicking "Accept All", you consent to our use of cookies.
                                </p>

                                {/* Cookie Types (Expandable) */}
                                <AnimatePresence>
                                    {showDetails && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mb-6 space-y-3 overflow-hidden"
                                        >
                                            {cookieTypes.map((cookie) => (
                                                <div
                                                    key={cookie.id}
                                                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                                                >
                                                    <span className="text-2xl">{cookie.icon}</span>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-white mb-1">
                                                            {cookie.title}
                                                        </h4>
                                                        <p className="text-sm text-gray-400">
                                                            {cookie.description}
                                                        </p>
                                                    </div>
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={preferences[cookie.id]}
                                                            onChange={(e) => {
                                                                if (!cookie.required) {
                                                                    setPreferences({
                                                                        ...preferences,
                                                                        [cookie.id]: e.target.checked,
                                                                    });
                                                                }
                                                            }}
                                                            disabled={cookie.required}
                                                            className="sr-only peer"
                                                        />
                                                        <div className={`w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-white transition-colors ${cookie.required ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                                            <div className="w-5 h-5 bg-white rounded-full transform transition-transform peer-checked:translate-x-5 translate-x-0.5 translate-y-0.5 peer-checked:bg-black"></div>
                                                        </div>
                                                    </label>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className="px-6 py-3 text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 font-medium"
                                    >
                                        {showDetails ? "Hide Details" : "Customize"}
                                    </button>

                                    {showDetails && (
                                        <motion.button
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            onClick={handleAcceptSelected}
                                            className="px-6 py-3 text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 font-medium"
                                        >
                                            Save Preferences
                                        </motion.button>
                                    )}

                                    <button
                                        onClick={handleRejectAll}
                                        className="px-6 py-3 text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 font-medium"
                                    >
                                        Reject All
                                    </button>

                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold shadow-lg hover:shadow-white/20"
                                    >
                                        Accept All
                                    </button>
                                </div>

                                {/* Footer Links */}
                                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-sm text-gray-400">
                                    <a href="#privacy" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                    <span>•</span>
                                    <a href="#cookies" className="hover:text-white transition-colors">
                                        Cookie Policy
                                    </a>
                                    <span>•</span>
                                    <a href="#terms" className="hover:text-white transition-colors">
                                        Terms of Service
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cookie Policy Page Content */}
            <section id="cookies" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black text-white">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                Cookie Policy
                            </span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
                        <p className="text-gray-400 text-lg">
                            Last updated: January 27, 2026
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                                    They are widely used to make websites work more efficiently and provide a better user experience.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    We use cookies to understand how you use our website, remember your preferences, and improve our services.
                                </p>
                            </div>

                            {/* Types of Cookies */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Types of Cookies We Use</h2>
                                <div className="space-y-4">
                                    {cookieTypes.map((cookie, index) => (
                                        <motion.div
                                            key={cookie.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/10"
                                        >
                                            <div className="flex items-start gap-4">
                                                <span className="text-3xl">{cookie.icon}</span>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-2">
                                                        {cookie.title}
                                                        {cookie.required && (
                                                            <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full">
                                                                Required
                                                            </span>
                                                        )}
                                                    </h3>
                                                    <p className="text-gray-400 leading-relaxed">
                                                        {cookie.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* How We Use Cookies */}
                            <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">•</span>
                                        <span>To remember your preferences and settings</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">•</span>
                                        <span>To understand how visitors use our website</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">•</span>
                                        <span>To improve website performance and user experience</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-white mt-1">•</span>
                                        <span>To provide personalized content and advertisements</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Managing Cookies */}
                            <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    You can control and manage cookies in various ways. Please note that removing or blocking cookies
                                    may impact your user experience and some functionality may no longer be available.
                                </p>
                                <button
                                    onClick={() => setShowBanner(true)}
                                    className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
                                >
                                    Update Cookie Preferences
                                </button>
                            </div>

                            {/* Contact */}
                            <div className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    If you have any questions about our use of cookies, please contact us at:
                                </p>
                                <a
                                    href="mailto:privacy@lensstudio.com"
                                    className="text-white hover:text-gray-300 transition-colors font-semibold"
                                >
                                    privacy@lensstudio.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}