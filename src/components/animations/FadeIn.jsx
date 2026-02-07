import React from "react";
import { motion } from "framer-motion";

/**
 * FadeIn Component
 * Wrap any content you want to fade in on scroll
 *
 * Usage:
 * <FadeIn>
 *   <h2>Hello</h2>
 * </FadeIn>
 */

export default function FadeIn({ children, duration = 0.8, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
