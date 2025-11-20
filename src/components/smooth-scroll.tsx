"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.4,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            lerp: 0.06,
            wheelMultiplier: 1.8,
            touchMultiplier: 2.5,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return null;
}
