"use client";

import { FlipWords } from "@/components/ui/flip-words";
import AboutSection from "../about/page";
import { IconCloud } from "@/components/ui/icon-cloud";

export default function Hero() {
  const words = [
    { text: "Full-Stack Developer", color: "text-blue-500" },
    { text: "MERN Stack Developer", color: "text-yellow-500" },
    { text: "Front-End Developer", color: "text-pink-500" },
    { text: "Back-End Developer", color: "text-green-500" },
  ];

  const slugs = [
    // Frontend
    "html5",
    "css",
    "javascript",
    "react",
    "tailwindcss",
    "redux",
    "typescript",
    "nextdotjs",
    "shadcnui",
    // Backend
    "nodedotjs",
    "express",
    "mongodb",
    "redis",
    "socketdotio",
    "jsonwebtokens",
    // "bcrypt", -- not working
    // APIs & Services
    "google",
    "postman",
    // DevOps / Hosting
    "vercel",
    "netlify",
    "render",
    "nginx",
    // Tools
    "git",
    "github",
    //"visualstudiocode", //-- not woking
    // Database Hosting
    "mongodb",
    //------------
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-background to-muted/30 scroll-mt-10  z-10"
    >
      <div className="relative z-10 flex flex-col items-center">
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
      </div>

      {/* Background Icon Cloud */}
      <div className="absolute md:left-[55%] top-[65%] left-[56%] md:top-[80%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div
          className="
      w-[280px] h-[280px]
      sm:w-[350px] sm:h-[350px]
      md:w-[450px] md:h-[450px]
      lg:w-[550px] lg:h-[550px]
      opacity-30
    "
        >
          <IconCloud images={images} />
        </div>
      </div>
      {/*------------*/}

      {/* Short Tagline */}
      <p className="max-w-2xl text-muted-foreground text-sm md:text-lg mb-8">
        I build modern and responsive web applications using clean, maintainable
        code.
      </p>
      {/*------------*/}

      {/* About Section  */}
      <AboutSection />
    </section>
  );
}
