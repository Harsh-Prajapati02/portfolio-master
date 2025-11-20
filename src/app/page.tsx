import { SVGMaskEffectDemo } from "@/components/About";
import { BentoGridDemo } from "@/components/Highlights";
import { FloatingDockDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* ----- Navbar ----- */}
      <FloatingDockDemo />

      {/* ----- About Section ----- */}
      <SVGMaskEffectDemo />

      {/* ----- Highlight Section */}
      <BentoGridDemo />
    </>
  );
}
