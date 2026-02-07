import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            id: "acceptance",
            icon: "✅",
            title: "Acceptance of Terms",
            content: [
                {
                    subtitle: "Agreement to Terms",
                    text: "By accessing or using Lens Studio's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services."
                },
                {
                    subtitle: "Modifications",
                    text: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms."
                },
                {
                    subtitle: "Legal Capacity",
                    text: "You must be at least 18 years old or have parental consent to use our services. By using our services, you represent that you have the legal capacity to enter into a binding agreement."
                }
            ]
        },
        {
            id: "services",
            icon: "📸",
            title: "Our Services",
            content: [
                {
                    subtitle: "Photography Services",
                    text: "We provide professional photography services including but not limited to weddings, portraits, events, commercial photography, and fashion shoots. All services are subject to availability and booking confirmation."
                },
                {
                    subtitle: "Videography Services",
                    text: "We offer cinematic videography services including event coverage, promotional videos, documentaries, and video editing. Final deliverables and timelines are specified in individual service agreements."
                },
                {
                    subtitle: "Editing and Post-Production",
                    text: "Our services include professional photo and video editing, color grading, and retouching as outlined in your service package. Additional editing requests may incur extra charges."
                },
                {
                    subtitle: "Service Limitations",
                    text: "We reserve the right to refuse service to anyone for any reason. Services are provided 'as is' and we make no warranties regarding the results, though we strive for excellence in all projects."
                }
            ]
        },
        {
            id: "booking",
            icon: "📅",
            title: "Booking and Payment",
            content: [
                {
                    subtitle: "Booking Process",
                    text: "All bookings must be confirmed in writing (email or contract). A signed contract and deposit payment are required to secure your date. Bookings are not confirmed until both are received."
                },
                {
                    subtitle: "Deposit and Payment Schedule",
                    text: "A non-refundable deposit of 50% is required at booking. The remaining balance is due 7 days before the scheduled service date. Late payments may result in cancellation or additional fees."
                },
                {
                    subtitle: "Payment Methods",
                    text: "We accept credit cards, debit cards, bank transfers, and other payment methods as specified. All payments must be made in USD unless otherwise agreed."
                },
                {
                    subtitle: "Additional Charges",
                    text: "Services beyond the agreed scope, overtime, travel outside specified radius, and rush deliveries may incur additional charges. You will be notified of any additional costs before they are incurred."
                },
                {
                    subtitle: "Invoicing",
                    text: "Detailed invoices will be provided for all services. Payment receipts will be issued upon receipt of payment. All prices are subject to applicable taxes."
                }
            ]
        },
        {
            id: "cancellation",
            icon: "❌",
            title: "Cancellation and Refund Policy",
            content: [
                {
                    subtitle: "Client Cancellation",
                    text: "Cancellations made more than 30 days before the service date: 50% refund. Cancellations made 15-30 days before: 25% refund. Cancellations made less than 15 days before: No refund. Deposits are non-refundable in all cases."
                },
                {
                    subtitle: "Photographer Cancellation",
                    text: "In the unlikely event that we must cancel your service, you will receive a full refund including deposit. We will make every effort to provide an alternate photographer or reschedule."
                },
                {
                    subtitle: "Force Majeure",
                    text: "We are not liable for failure to perform services due to circumstances beyond our control (natural disasters, illness, accidents, etc.). We will work with you to reschedule or provide a full refund."
                },
                {
                    subtitle: "Rescheduling",
                    text: "Rescheduling requests made more than 14 days before the service date are generally accommodated at no charge, subject to availability. Late rescheduling may incur fees."
                }
            ]
        },
        {
            id: "intellectual-property",
            icon: "©️",
            title: "Intellectual Property and Copyright",
            content: [
                {
                    subtitle: "Copyright Ownership",
                    text: "All photographs and videos created by Lens Studio remain our intellectual property. We retain full copyright and ownership of all images and footage unless explicitly transferred through a separate agreement."
                },
                {
                    subtitle: "Usage Rights",
                    text: "Upon full payment, you receive a non-exclusive license to use the delivered images for personal use. Commercial use requires additional licensing and fees. You may not resell, redistribute, or claim ownership of the images."
                },
                {
                    subtitle: "Portfolio Use",
                    text: "We reserve the right to use images from your session for our portfolio, website, social media, marketing materials, and competitions. If you prefer your images not be used publicly, please notify us in writing."
                },
                {
                    subtitle: "Watermarks and Credits",
                    text: "You may not remove watermarks, crop out signatures, or alter images in a way that misrepresents our work. When sharing images online, credit to Lens Studio is appreciated but not required for personal use."
                },
                {
                    subtitle: "Third-Party Content",
                    text: "All content on our website (text, images, logos, graphics) is protected by copyright. You may not reproduce, distribute, or create derivative works without written permission."
                }
            ]
        },
        {
            id: "client-responsibilities",
            icon: "👥",
            title: "Client Responsibilities",
            content: [
                {
                    subtitle: "Accurate Information",
                    text: "You must provide accurate and complete information when booking services, including event details, contact information, and special requirements."
                },
                {
                    subtitle: "Timeline Cooperation",
                    text: "You agree to cooperate with our photography/videography timeline and schedule. Delays caused by clients may result in reduced coverage time."
                },
                {
                    subtitle: "Venue Access",
                    text: "You are responsible for ensuring we have appropriate access to event venues and any necessary permissions or permits. We are not responsible for restrictions imposed by venues."
                },
                {
                    subtitle: "Safety and Cooperation",
                    text: "You and your guests agree to treat our team and equipment with respect. We reserve the right to leave if we feel unsafe or are subjected to harassment."
                },
                {
                    subtitle: "Image Selection",
                    text: "For services requiring image selection, you must provide your selections within the specified timeframe. Delays in selection may delay final delivery."
                }
            ]
        },
        {
            id: "delivery",
            icon: "📦",
            title: "Delivery and Timeline",
            content: [
                {
                    subtitle: "Delivery Timeline",
                    text: "Standard delivery timeline is 4-6 weeks for edited photos and 6-8 weeks for videos, unless otherwise specified in your contract. Rush delivery is available for an additional fee."
                },
                {
                    subtitle: "Delivery Method",
                    text: "Digital files are delivered via secure online gallery or file transfer service. Physical products (prints, albums) are shipped to your specified address."
                },
                {
                    subtitle: "File Formats",
                    text: "Images are typically delivered in high-resolution JPEG format. Raw files are not included unless specifically contracted. Video formats will be specified in your service agreement."
                },
                {
                    subtitle: "Storage and Backup",
                    text: "We maintain backups of your images for 12 months after delivery. After this period, you are responsible for storing your own copies. We recommend maintaining multiple backups."
                },
                {
                    subtitle: "Lost or Corrupted Files",
                    text: "If you lose or corrupt delivered files within 12 months, we can provide replacement files at no charge. After 12 months, re-delivery may incur a fee if files are still available."
                }
            ]
        },
        {
            id: "liability",
            icon: "⚠️",
            title: "Limitation of Liability",
            content: [
                {
                    subtitle: "Equipment Failure",
                    text: "While we use professional backup equipment, we are not liable for missed shots due to equipment failure. We carry backup cameras and lighting to minimize this risk."
                },
                {
                    subtitle: "Missed Moments",
                    text: "Photography and videography are not exact sciences. We cannot guarantee every moment will be captured. We will make our best professional effort to document your event."
                },
                {
                    subtitle: "Maximum Liability",
                    text: "Our maximum liability for any claim arising from our services is limited to the amount paid for the services. We are not liable for indirect, consequential, or incidental damages."
                },
                {
                    subtitle: "Third-Party Vendors",
                    text: "We are not responsible for the actions of other vendors at your event. We will make reasonable efforts to work cooperatively with other professionals."
                },
                {
                    subtitle: "Natural Disasters",
                    text: "We are not liable for weather conditions, natural disasters, or other acts of God that may affect outdoor shoots or prevent service delivery."
                }
            ]
        },
        {
            id: "confidentiality",
            icon: "🔒",
            title: "Confidentiality and Privacy",
            content: [
                {
                    subtitle: "Client Privacy",
                    text: "We respect your privacy and will not share your personal information with third parties except as necessary to provide services or as required by law."
                },
                {
                    subtitle: "Confidential Information",
                    text: "We maintain confidentiality regarding event details, personal information, and any sensitive matters we may observe during service provision."
                },
                {
                    subtitle: "Data Protection",
                    text: "We comply with applicable data protection laws and maintain appropriate security measures to protect your personal information. See our Privacy Policy for details."
                }
            ]
        },
        {
            id: "dispute",
            icon: "⚖️",
            title: "Dispute Resolution",
            content: [
                {
                    subtitle: "Good Faith Resolution",
                    text: "In the event of any dispute, both parties agree to first attempt to resolve the matter through good faith negotiation and discussion."
                },
                {
                    subtitle: "Mediation",
                    text: "If direct negotiation fails, disputes will be submitted to mediation before pursuing legal action. Both parties will share mediation costs equally."
                },
                {
                    subtitle: "Governing Law",
                    text: "These Terms of Service are governed by the laws of the State of New York, United States, without regard to conflict of law provisions."
                },
                {
                    subtitle: "Jurisdiction",
                    text: "Any legal action arising from these terms must be brought in the courts of New York County, New York. Both parties consent to the exclusive jurisdiction of these courts."
                }
            ]
        },
        {
            id: "general",
            icon: "📜",
            title: "General Provisions",
            content: [
                {
                    subtitle: "Entire Agreement",
                    text: "These Terms of Service, along with any signed service contract and our Privacy Policy, constitute the entire agreement between you and Lens Studio."
                },
                {
                    subtitle: "Severability",
                    text: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect."
                },
                {
                    subtitle: "Waiver",
                    text: "Our failure to enforce any right or provision of these terms will not constitute a waiver of such right or provision."
                },
                {
                    subtitle: "Assignment",
                    text: "You may not assign or transfer these terms without our written consent. We may assign our rights and obligations without restriction."
                },
                {
                    subtitle: "Contact for Questions",
                    text: "If you have any questions about these Terms of Service, please contact us using the information provided below."
                }
            ]
        }
    ];

    const toggleSection = (id) => {
        setActiveSection(activeSection === id ? null : id);
    };

    return (
        <section id="terms" className="py-32 bg-gradient-to-b from-black via-gray-950 to-black text-white">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
                        Legal Agreement
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Terms of Service
                        </span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg mb-4">
                        Last updated: January 27, 2026
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Please read these Terms of Service carefully before using our photography and videography services.
                        These terms govern your use of our services and constitute a legally binding agreement.
                    </p>
                </motion.div>

                {/* Important Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl border border-red-500/20"
                >
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="text-3xl">⚠️</span>
                        Important Notice
                    </h2>
                    <div className="space-y-3 text-sm text-gray-300">
                        <p>
                            <span className="font-semibold text-white">BINDING AGREEMENT:</span> By using our services, you agree to these terms.
                            If you do not agree, please do not use our services.
                        </p>
                        <p>
                            <span className="font-semibold text-white">DEPOSIT NON-REFUNDABLE:</span> All deposits are non-refundable once paid.
                            Please review our cancellation policy carefully.
                        </p>
                        <p>
                            <span className="font-semibold text-white">COPYRIGHT:</span> We retain copyright to all images and videos.
                            You receive usage rights but not ownership unless explicitly agreed.
                        </p>
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
                        Questions About These Terms?
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        If you have any questions or concerns regarding these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-300">
                            <span className="text-white">📧</span>
                            <span>Email:</span>
                            <a href="mailto:legal@lensstudio.com" className="text-white hover:text-gray-300 transition-colors font-semibold">
                                legal@lensstudio.com
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

                {/* Acknowledgment */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl border border-green-500/20"
                >
                    <div className="text-center">
                        <span className="text-4xl mb-4 block">✓</span>
                        <h3 className="text-xl font-bold text-white mb-3">
                            Acknowledgment
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD,
                            AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                        </p>
                    </div>
                </motion.div>

                {/* Related Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#privacy"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white transition-all duration-300 font-medium"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#cookies"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white transition-all duration-300 font-medium"
                    >
                        Cookie Policy
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