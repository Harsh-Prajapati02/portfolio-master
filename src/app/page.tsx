import { SVGMaskEffectDemo } from "@/components/About";
import { FloatingDockDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* ----- Navbar ----- */}
      <FloatingDockDemo />

      {/* ----- About Section ----- */}
      <SVGMaskEffectDemo />
    </>
  );
}
