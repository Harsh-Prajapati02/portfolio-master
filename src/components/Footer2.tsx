import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function Footer2() {
    return (
        <div className="relative h-[10rem] flex items-center justify-center md:h-[25rem]">
            {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>
            <TextHoverEffect text="HARSH" />
        </div>
    );
}
