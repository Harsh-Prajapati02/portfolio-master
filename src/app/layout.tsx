import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Harsh | Full-Stack Developer Portfolio",
  description: "A modern, fast, and visually polished portfolio showcasing my full-stack projects, UI/UX work, technical expertise, and professional journey.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        suppressHydrationWarning
        className="antialiased"
        style={{ backgroundColor: "#000000" }}
      >
        <SmoothScroll />    {/* ← Smooth Scroll GLOBAL */}
        {children}
      </body>
    </html>
  );
}
