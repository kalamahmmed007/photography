import React from "react";
import FadeIn from "../animations/FadeIn";

export default function Contact() {
    return (
        <section className="py-32 bg-black text-white">
            <FadeIn>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
                    Contact Us
                </h2>

                <form className="grid gap-6 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300"
                    />

                    <textarea
                        placeholder="Message"
                        rows={6}
                        className="p-4 rounded-xl bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-300"
                    />

                    <button
                        type="submit"
                        className="bg-white text-black font-bold p-4 rounded-xl shadow-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>
            </FadeIn>
        </section>
    );
}
