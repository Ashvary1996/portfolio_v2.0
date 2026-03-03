"use client";

import { useState } from "react";
import { Download } from "lucide-react";

import ResumeModal from "./resume-modal";
 

export default function ResumeButton() {
  const [open, setOpen] = useState(false);

  return (
    <> 
        <button
            onClick={() => setOpen(true)}
            className="group relative p-2 rounded-xl
            text-neutral-500 hover:text-neutral-700
            dark:text-white dark:hover:text-neutral-100
              dark:hover:bg-neutral-800/60
            transition-all duration-200 ease-out
            active:scale-95 cursor-pointer"
          >
            <Download className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
      <ResumeModal open={open} setOpen={setOpen} />
    </>
  );
}
