"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-5 bg-gray-100 dark:bg-gray-900/90">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <h3 className="text-lg font-semibold">Ashvary Gidian</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Full Stack Developer building modern web experiences.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center md:justify-start">
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex flex-wrap gap-5 text-xl justify-center md:justify-start">
          <a
            href="https://github.com/Ashvary11"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ashvary-gidian/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 hover:text-primary transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ashvary11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-primary transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-border text-center py-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ashvary Gidian. All rights reserved.
      </div>
    </footer>
  );
}
