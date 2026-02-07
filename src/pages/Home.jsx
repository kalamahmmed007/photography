import React from "react";
import HeroVideo from "../components/sections/HeroVideo";
import About from "../components/sections/About";
import PhotoGallery from "../components/sections/PhotoGallery";
import VideoGallery from "../components/sections/VideoGallery";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

export default function Home() {
    return (
        <main>
            <HeroVideo />
            <About />
            <PhotoGallery />
            <VideoGallery />
            <Services />
            <Testimonials />
            <Contact />
        </main>
    );
}
