'use client'

import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Approach } from "@/components/Approach";
import { Testimonials } from "@/components/Testimonials";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Footer2 } from "@/components/Footer2";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Strengths } from "@/components/Strengths";

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
      <Navbar />

      {/* ----- Hero Section ----- */}
      <Hero />

      {/* ----- About Section ----- */}
      <About />

      {/* ----- Highlight Section ----- */}
      <Highlights />

      {/* ----- Skills Section ----- */}
      <Skills />

      {/* ----- Strengths Section ----- */}
      <Strengths />

      {/* ----- Experience Section ----- */}
      <Experience />

      {/* ----- Projects Section ----- */}
      <Projects />

      {/* ----- Achievements Section */}
      <Achievements />

      {/* ----- Services Section ----- */}
      <Services />

      {/* ----- Clients Section */}
      <Testimonials />

      {/* ----- My Approach Section ----- */}
      <Approach />

      {/* ----- Footer ----- */}
      <Footer />

      {/* ----- Footer 2 ----- */}
      <Footer2 />
    </>
  );
}
