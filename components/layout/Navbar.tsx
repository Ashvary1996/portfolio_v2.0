"use client";
import FloatingDockPortfolioMENU from "@/components/floating-dock-demo";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ResumeButton from "@/app/(sections)/resume/resume-button";
import { ScrollProgress } from "../ui/scroll-progress";

function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 w-full h-16 sm:h-20 px-4 sm:px-6
      flex items-center justify-between
      border-b border-neutral-200/60 dark:border-neutral-800/60
      bg-white/70 dark:bg-neutral-950/70
      backdrop-blur-md
      shadow-sm dark:shadow-neutral-900/40"
    >
      {/* LEFT — Name */}
      <div className="flex-1 flex items-center">
        <h2
          className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase
          text-neutral-800 dark:text-neutral-100
          whitespace-nowrap select-none
            from-neutral-900 to-neutral-500
          dark:from-white dark:to-neutral-400
          bg-clip-text  "
        >
          ASHVARY GIDIAN
        </h2>
      </div>

      {/* CENTER — Floating Dock (wider, centered) */}
      <div className="flex-2 flex items-center justify-center px-4 max-w-2xl mx-auto w-full">
        <div className="w-full flex justify-center">
          <FloatingDockPortfolioMENU />
        </div>
      </div>

      {/* RIGHT — Resume + Theme (hidden on mobile, handled by mobile menu) */}

      <div className="flex-1 hidden sm:flex md:flex items-center justify-end gap-1">
        {/* Resume */}
        <ResumeButton />
        {/* Theme */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="group relative p-2 rounded-xl
          text-neutral-500 hover:text-neutral-900
          dark:text-neutral-400 dark:hover:text-neutral-100
          hover:bg-neutral-100 dark:hover:bg-neutral-800/60
          transition-all duration-200 ease-out
          active:scale-95 cursor-pointer"
            >
              <AnimatedThemeToggler className="w-5 h-5" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs font-medium">
            Toggle Theme
          </TooltipContent>
        </Tooltip>
      </div>

      <ScrollProgress className="fixed top-16 md:top-20 left-0 w-full z-50" />
      {/* change bg color to give custom */}
    </header>
  );
}

export default Navbar;
