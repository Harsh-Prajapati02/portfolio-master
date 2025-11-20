import { SVGMaskEffectDemo } from "@/components/About";
import { TimelineDemo } from "@/components/Experience";
import { BentoGridThirdDemo } from "@/components/Highlights";
import { FloatingDockDemo } from "@/components/Navbar";
import { ExpandableCardDemo } from "@/components/Projects";

export default function Home() {
  return (
    <>
      {/* ----- Navbar ----- */}
      <FloatingDockDemo />

      {/* ----- About Section ----- */}
      <SVGMaskEffectDemo />

      {/* ----- Highlight Section ----- */}
      <BentoGridThirdDemo />

      {/* ----- Experience Section ----- */}
      <TimelineDemo />

      {/* ----- Projects Section ----- */}
      <ExpandableCardDemo />
    </>
  );
}
