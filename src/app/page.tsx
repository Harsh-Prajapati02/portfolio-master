'use client'

import { SVGMaskEffectDemo } from "@/components/About";
import { AppleCardsCarouselDemo } from "@/components/Achievements";
import Approach from "@/components/Approach";
import { TimelineDemo } from "@/components/Experience";
import { TextHoverEffectDemo } from "@/components/Footer2";
import { GridBackgroundDemo } from "@/components/Hero";
import { BentoGridThirdDemo } from "@/components/Highlights";
import { FloatingDockDemo } from "@/components/Navbar";
import { ExpandableCardDemo } from "@/components/Projects";
import { FeaturesSectionDemo2 } from "@/components/Services";
import { BentoGridDemo } from "@/components/Skills";
import { FeaturesSectionDemo } from "@/components/Strengths";

import { LoaderThree } from "@/components/ui/loader";
import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1850);
  }, []);

  return loading ? <LoaderThree /> : (
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

      {/* ----- Strengths Section ----- */}
      <FeaturesSectionDemo />

      {/* ----- Experience Section ----- */}
      <TimelineDemo />

      {/* ----- Projects Section ----- */}
      <ExpandableCardDemo />

      {/* ----- Achievements Section */}
      <AppleCardsCarouselDemo />

      {/* ----- Services Section ----- */}
      <FeaturesSectionDemo2 />

      {/* ----- My Approach Section ----- */}
      <Approach />

      {/* ----- Footer 2 ----- */}
      <TextHoverEffectDemo />
    </>
  );
}
