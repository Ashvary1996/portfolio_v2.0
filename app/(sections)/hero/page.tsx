"use client";

import { FlipWords } from "@/components/ui/flip-words";
import AboutSection from "../about/page";

export default function Hero() {
  const words = [
    { text: "Full-Stack Developer", color: "text-blue-500" },
    { text: "MERN Stack Developer", color: "text-yellow-500" },
    { text: "Front-End Developer", color: "text-pink-500" },
    { text: "Back-End Developer", color: "text-green-500" },
  ];

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-background to-muted/30 scroll-mt-10  "
    >
      {/* Small Intro */}
      <p className="text-sm md:text-base text-muted-foreground mb-4 tracking-wide">
        👋 Hi, I'm
      </p>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Ashvary Gidian</h1>

      {/* Animated Role */}
      <div className="text-xl md:text-3xl font-semibold mb-6">
        <span className="text-muted-foreground">I'm a </span>
        <FlipWords words={words} />
      </div>

      {/* Short Tagline */}
      <p className="max-w-2xl text-muted-foreground text-sm md:text-lg mb-8">
        I build modern and responsive web applications using clean, maintainable
        code.
      </p>

      {/* About Section */}

      <AboutSection />
    </section>
  );
}
