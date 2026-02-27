"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Briefcase, Contact, Download, Folder } from "lucide-react";
import ResumeButton from "@/app/(sections)/resume/resume-button";

export default function FloatingDockPortfolioMENU() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 hover:text-neutral-700 dark:text-gray-200" />
      ),
      href: "#home",
    },

    {
      title: "Projects",
      icon: (
        <Folder className="h-full w-full text-neutral-500 hover:text-neutral-700  dark:text-gray-200" />
      ),
      href: "#projects",
    },
    {
      title: "Experiences",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 hover:text-neutral-700 dark:text-gray-200" />
      ),
      href: "#experiences",
    },
    {
      title: "Contact",
      icon: (
        <Contact className="h-full w-full text-neutral-500 hover:text-neutral-700 dark:text-gray-200" />
      ),
      href: "#contact",
    },
    {
      title: "Resume",
      icon: (
        // <Download className="h-full w-full text-neutral-700 dark:text-neutral-400" />
        <ResumeButton />
      ),
      // href: "#",
    },
    {
      title: "Theme",
      icon: (
        <div className="flex items-center justify-center  hover:text-neutral-700 w-full h-full ">
        <AnimatedThemeToggler />
        </div>
      ),
      // href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-40 w-full ">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
