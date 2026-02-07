import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Parallax Component
 * Wrap content to apply vertical parallax effect on scroll
 *
 * Usage:
 * <Parallax speed={100}>
 *   <img src="/images/photo.jpg" />
 * </Parallax>
 *
 * Props:
 * - speed: number → positive = slower, negative = faster scroll relative movement
 */

export default function Parallax({ children, speed = -100 }) {
    const ref = useRef();

    useEffect(() => {
        const element = ref.current;

        gsap.to(element, {
            y: speed,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom", // when top of element hits bottom of viewport
                end: "bottom top",
                scrub: true, // smooth scrubbing
            },
        });
    }, [speed]);

    return <div ref={ref}>{children}</div>;
}
