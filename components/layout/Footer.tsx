"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-5 bg-gray-100 dark:bg-gray-900/90">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side */}
        <div>
          <h3 className="text-lg font-semibold">Ashvary Gidian</h3>
          <p className="text-sm text-muted-foreground">
            Full Stack Developer building modern web experiences.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex gap-6 text-sm">
          {/* <a href="#about" className="hover:text-primary transition">
            About
          </a> */}
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/Ashvary1996"
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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ashvarygidian1996@gmail.com&su=Connect%20%26%20Discussion%20%7C%20Portfolio%20Enquiry&body=Hi%20Ashvary,%20I%E2%80%99m%20reaching%20out%20to%20connect%20with%20you.%20%5BPlease%20replace%20this%20line%20with%20your%20query%20or%20the%20reason%20for%20contacting.%5D%20Best%20regards,"
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
