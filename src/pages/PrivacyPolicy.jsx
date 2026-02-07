import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            id: "information-collection",
            icon: "📝",
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "When you book our services or contact us, we may collect personal information including your name, email address, phone number, mailing address, and payment information."
                },
                {
                    subtitle: "Usage Data",
                    text: "We automatically collect information about how you interact with our website, including IP address, browser type, device information, pages visited, and time spent on pages."
                },
                {
                    subtitle: "Cookies and Tracking",
                    text: "We use cookies and similar tracking technologies to enhance your experience, analyze website traffic, and personalize content. See our Cookie Policy for more details."
                }
            ]
        },
        {
            id: "information-use",
            icon: "🎯",
            title: "How We Use Your Information",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your personal information to provide photography and videography services, process bookings, send confirmations, and communicate about your projects."
                },
                {
                    subtitle: "Communication",
                    text: "We may send you promotional emails, newsletters, and updates about our services. You can opt-out at any time using the unsubscribe link in our emails."
                },
                {
                    subtitle: "Website Improvement",
                    text: "We analyze usage data to improve our website functionality, enhance user experience, and develop new features and services."
                },
                {
                    subtitle: "Legal Compliance",
                    text: "We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements."
                }
            ]
        },
        {
            id: "information-sharing",
            icon: "🔐",
            title: "Information Sharing and Disclosure",
            content: [
                {
                    subtitle: "Service Providers",
                    text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you (payment processors, email services, analytics providers)."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may disclose your information when required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights or the safety of others."
                },
                {
                    subtitle: "Business Transfers",
                    text: "In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity."
                },
                {
                    subtitle: "Portfolio Display",
                    text: "With your explicit consent, we may display photographs and videos from your session in our portfolio, website, and marketing materials."
                }
            ]
        },
        {
            id: "data-security",
            icon: "🛡️",
            title: "Data Security",
            content: [
                {
                    subtitle: "Security Measures",
                    text: "We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your personal information from unauthorized access, alteration, disclosure, or destruction."
                },
                {
                    subtitle: "Payment Security",
                    text: "All payment transactions are processed through secure, PCI-compliant payment gateways. We do not store complete credit card information on our servers."
                },
                {
                    subtitle: "Data Retention",
                    text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law."
                }
            ]
        },
        {
            id: "your-rights",
            icon: "⚖️",
            title: "Your Rights and Choices",
            content: [
                {
                    subtitle: "Access and Correction",
                    text: "You have the right to access, update, or correct your personal information at any time by contacting us."
                },
                {
                    subtitle: "Data Deletion",
                    text: "You may request deletion of your personal information, subject to legal retention requirements. We will respond to deletion requests within 30 days."
                },
                {
                    subtitle: "Marketing Opt-Out",
                    text: "You can opt-out of receiving marketing communications by clicking the unsubscribe link in our emails or contacting us directly."
                },
                {
                    subtitle: "Cookie Management",
                    text: "You can control cookie preferences through your browser settings or our cookie consent banner. Note that disabling cookies may affect website functionality."
                },
                {
                    subtitle: "Data Portability",
                    text: "You have the right to request a copy of your personal information in a structured, commonly used format."
                }
            ]
        },
        {
            id: "third-party",
            icon: "🔗",
            title: "Third-Party Links and Services",
            content: [
                {
                    subtitle: "External Links",
                    text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites."
                },
                {
                    subtitle: "Social Media",
                    text: "Our website includes social media features that may collect your IP address and set cookies. These features are governed by the privacy policies of the respective social media platforms."
                },
                {
                    subtitle: "Third-Party Services",
                    text: "We use third-party services like Google Analytics, payment processors, and email marketing platforms. These services have their own privacy policies and terms of service."
                }
            ]
        },
        {
            id: "children-privacy",
            icon: "👶",
            title: "Children's Privacy",
            content: [
                {
                    subtitle: "Age Restriction",
                    text: "Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13."
                },
                {
                    subtitle: "Parental Consent",
                    text: "If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information."
                }
            ]
        },
        {
            id: "changes",
            icon: "🔄",
            title: "Changes to Privacy Policy",
            content: [
                {
                    subtitle: "Policy Updates",
                    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The 'Last Updated' date at the top of this page indicates when the policy was last revised."
                },
                {
                    subtitle: "Notification",
                    text: "We will notify you of significant changes by posting a notice on our website or sending you an email. Continued use of our services after changes constitutes acceptance of the updated policy."
                }
            ]
        }
    ];

    const toggleSection = (id) => {
        setActiveSection(activeSection === id ? null : id);
    };

    return (
        <section id="privacy" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black text-white">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                        Legal Information
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Privacy Policy
                        </span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg mb-4">
                        Last updated: January 27, 2026
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        At Lens Studio, we are committed to protecting your privacy and ensuring the security of your personal information.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
                    </p>
                </motion.div>

                {/* Quick Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20"
                >
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="text-3xl">📋</span>
                        Quick Summary
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                        <div className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>We collect only necessary information to provide our services</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>Your data is encrypted and securely stored</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>We never sell your personal information to third parties</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>You have full control over your data and privacy settings</span>
                        </div>
                    </div>
                </motion.div>

                {/* Accordion Sections */}
                <div className="space-y-4">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden"
                        >
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{section.icon}</span>
                                    <h3 className="text-xl font-bold text-white text-left">
                                        {section.title}
                                    </h3>
                                </div>
                                <motion.svg
                                    animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-6 h-6 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </button>

                            {/* Section Content */}
                            <AnimatePresence>
                                {activeSection === section.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 space-y-6">
                                            {section.content.map((item, idx) => (
                                                <div key={idx} className="pl-12">
                                                    <h4 className="text-lg font-semibold text-white mb-2">
                                                        {item.subtitle}
                                                    </h4>
                                                    <p className="text-gray-400 leading-relaxed">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10"
                >
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="text-3xl">📧</span>
                        Contact Us About Privacy
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information,
                        please don't hesitate to contact us:
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-white">📧</span>
                            <span>Email:</span>
                            <a href="mailto:privacy@lensstudio.com" className="text-white hover:text-gray-300 transition-colors font-semibold">
                                privacy@lensstudio.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-white">📞</span>
                            <span>Phone:</span>
                            <a href="tel:+15551234567" className="text-white hover:text-gray-300 transition-colors font-semibold">
                                +1 (555) 123-4567
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-white">📍</span>
                            <span>Address:</span>
                            <span className="text-white font-semibold">
                                123 Photography Lane, New York, NY 10001
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Related Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#cookies"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white transition-all duration-300 font-medium"
                    >
                        Cookie Policy
                    </a>
                    <a
                        href="#terms"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white transition-all duration-300 font-medium"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}