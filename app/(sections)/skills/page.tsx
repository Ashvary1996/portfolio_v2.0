"use client";

import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaCloud,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiRender,
  SiPostman,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiRedis,
  SiGoogle,
  SiSocketdotio,
  SiJsonwebtokens,
  SiVultr,
} from "react-icons/si";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { useRef, useEffect, useState } from "react";

export default function SkillsAnimatedBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLHeadingElement>(null);
  const backRef = useRef<HTMLHeadingElement>(null);
  const otherRef = useRef<HTMLHeadingElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="w-full py-20 flex justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl flex flex-col items-center gap-16 px-4"
      >
        {/* Heading */}
        <div
          ref={headingRef}
          className="text-3xl sm:text-4xl font-bold text-center px-8 py-4 rounded-2xl 
          bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-2xl z-10"
        >
          My Skills
        </div>

        {/* Skill Cards */}

        <div className="relative z-10 gap-10 grid grid-cols-1 md:grid-cols-3 w-[80%] sm:w-[80%] lg:w-[90%]">
          {/* Frontend */}
          <div className="rounded-2xl shadow-xl bg-black/70 p-6 hover:bg-gray-800 transition duration-300 hover:-translate-y-2 hover:shadow-indigo-400 dark:bg-gray-700/40 dark:hover:bg-gray-800" >
            <h3
              ref={frontRef}
              className="font-bold text-xl mb-6 text-indigo-400 text-center border-b-2 border-indigo-400 p-2 w-fit m-auto"
            >
              Frontend
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm flex flex-col w-30 m-auto">
              <li className="flex items-center gap-2">
                <FaHtml5 className="text-orange-400" /> HTML5
              </li>
              <li className="flex items-center gap-2">
                <FaCss3 className="text-blue-400" /> CSS3
              </li>
              <li className="flex items-center gap-2">
                <FaJsSquare className="text-yellow-400" /> JavaScript
              </li>
              <li className="flex items-center gap-2">
                <FaReact className="text-cyan-400" /> React
              </li>
              <li className="flex items-center gap-2">
                <SiTailwindcss className="text-teal-400" /> Tailwind
              </li>
              <li className="flex items-center gap-2">
                <SiRedux className="text-purple-500" /> Redux
              </li>
              <li className="flex items-center gap-2">
                <SiTypescript className="text-blue-500" /> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <SiNextdotjs /> Next.js
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="rounded-2xl shadow-xl bg-black/70 p-6 dark:bg-gray-700/40 hover:bg-gray-800 transition duration-300 hover:-translate-y-2 hover:shadow-purple-400 dark:hover:bg-gray-800">
            <h3
              ref={backRef}
              className="font-bold text-xl mb-6 text-purple-400 text-center border-b-2 border-purple-400 p-2 w-fit m-auto"
            >
              Backend
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm flex flex-col w-30 m-auto">
              <li className="flex items-center gap-2">
                <FaNodeJs className="text-green-400" /> Node.js
              </li>
              <li className="flex items-center gap-2">
                <SiExpress /> Express.js
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase /> MongoDB
              </li>
              <li className="flex items-center gap-2">
                <SiJsonwebtokens className="text-red-500" /> JWT
              </li>
              <li className="flex items-center gap-2">
                <SiRedis className="text-red-600" /> Redis
              </li>
              <li className="flex items-center gap-2">
                <SiSocketdotio /> Socket.io
              </li>
              <li className="flex items-center gap-2">
                <SiGoogle className="text-blue-400" /> Google APIs
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="rounded-2xl shadow-xl bg-black/70 p-6 hover:bg-gray-800 transition duration-300 hover:-translate-y-2 purple-400 dark:bg-gray-700/40 hover:shadow-pink-400 dark:hover:bg-gray-800">
            <h3
              ref={otherRef}
              className="font-bold text-xl mb-6 text-pink-400 text-center border-b-2 border-pink-400 p-2 w-fit m-auto"
            >
              Tools & Platforms
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm max-w-xs mx-auto w-30 m-auto">
              <li className="flex items-center gap-3">
                <FaGit className="text-red-400 w-5 h-5 shrink-0" />
                <span>Git</span>
              </li>
              <li className="flex items-center gap-3">
                <SiNetlify className="text-cyan-400 w-5 h-5 shrink-0" />
                <span>Netlify</span>
              </li>
              <li className="flex items-center gap-3">
                <SiRender className="w-5 h-5 shrink-0" />
                <span>Render</span>
              </li>
              <li className="flex items-center gap-3">
                <SiPostman className="text-orange-400 w-5 h-5 shrink-0" />
                <span>Postman</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCloud className="text-blue-400 w-5 h-5 shrink-0" />
                <span>MongoDB Atlas</span>
              </li>
              <li className="flex items-center gap-3">
                <SiVultr className="w-5 h-5 shrink-0" />
                <span>VPS</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Beams — curvature 0 on mobile (single column), curved on desktop */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={headingRef}
          toRef={frontRef}
          curvature={isMobile ? 0 : -80}
          duration={5} // slow, satisfying travel speed
          delay={0}
         
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={headingRef}
          toRef={backRef}
          curvature={0}
          duration={5}
          delay={0}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={headingRef}
          toRef={otherRef}
          curvature={isMobile ? 0 : 80}
          duration={5}
          delay={0}
        />
      </div>
    </section>
  );
}
