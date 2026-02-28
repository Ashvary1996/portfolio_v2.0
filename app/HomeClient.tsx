"use client";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/app/(sections)/hero/page";
import Skill from "./(sections)/skills/page";
import Contact from "./(sections)/contact/page";
import Experience from "./(sections)/experience/page";
import Projects from "./(sections)/projects/page";
import Footer from "@/components/layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // once: true, // only animate once
      duration: 800, // animation duration
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Particles color="#ffffff" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skill />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
