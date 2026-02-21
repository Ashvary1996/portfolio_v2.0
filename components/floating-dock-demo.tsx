"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import {  Briefcase, Contact, Download, Folder } from "lucide-react";

export default function FloatingDockPortfolioMENU() {
  const downloadResume = () => {
    console.log("woking");

    // const link = document.createElement("a");
    // link.href = "/resume.pdf"; // put file inside /public
    // link.download = "Ashvary_Resume.pdf";
    // link.click();
  };
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-400" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        <Folder className="h-full w-full text-neutral-500 dark:text-neutral-400" />
      ),
      href: "#",
    },
    {
      title: "Experiences",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-400" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <Contact className="h-full w-full text-neutral-500 dark:text-neutral-400" />
      ),
      href: "#",
    },
    {
      title: "Resume",
      icon: (
        <Download className="h-full w-full text-neutral-500 dark:text-neutral-400" />
      ),
      // href: "#",
      onClick: downloadResume,
    },
    {
      title: "Theme", 
      icon: (
        <div className="flex items-center justify-center w-full h-full ">
          <AnimatedThemeToggler className="cursor-pointer text-neutral-500 dark:text-amber-200" />
        </div>
      ),
      // href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
