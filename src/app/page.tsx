import { SVGMaskEffectDemo } from "@/components/About";
import { TimelineDemo } from "@/components/Experience";
import { TextHoverEffectDemo } from "@/components/Footer2";
import { GridBackgroundDemo } from "@/components/Hero";
import { BentoGridThirdDemo } from "@/components/Highlights";
import { FloatingDockDemo } from "@/components/Navbar";
import { ExpandableCardDemo } from "@/components/Projects";
import { BentoGridDemo } from "@/components/Skills";

export default function Home() {
  return (
    <>
      {/* ----- Navbar ----- */}
      <FloatingDockDemo />

      {/* ----- Hero Section ----- */}
      <GridBackgroundDemo />

      {/* ----- About Section ----- */}
      <SVGMaskEffectDemo />

      {/* ----- Highlight Section ----- */}
      <BentoGridThirdDemo />

      {/* ----- Skills Section ----- */}
      <BentoGridDemo />

      {/* ----- Experience Section ----- */}
      <TimelineDemo />

      {/* ----- Projects Section ----- */}
      <ExpandableCardDemo />

      {/* ----- Footer 2 ----- */}
      <TextHoverEffectDemo />
    </>
  );
}
