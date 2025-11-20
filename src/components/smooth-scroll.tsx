"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,

            // Cinematic / high-inertia settings (MinhPham jaise feel ke liye)
            duration: 2.4,             // zyada duration → zyada momentum
            easing: (t) => 1 - Math.pow(1 - t, 3), // custom easing curve
            lerp: 0.06,                // lerp ko low rakhna = zyada viscosity
            wheelMultiplier: 1.8,      // mouse wheel ka effect bada karo
            touchMultiplier: 2.5,      // mobile touch pe bhi zyada momentum
            smoothTouch: true,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
