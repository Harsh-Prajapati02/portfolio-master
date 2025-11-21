import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverEffectDemo() {
    return (
        <div className="h-[10rem] flex items-center justify-center md:h-[25rem]" style={{ borderTop: "5px solid #eb5939" }}>
            <TextHoverEffect text="HARSH" />
        </div>
    );
}
