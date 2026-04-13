"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function ResumeModal({ open, setOpen }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const pdfSrc = isMobile
    ? "https://drive.google.com/file/d/1rOD-Hfh2y0sApYD6g0HfWxvLvLxeiXxG/preview"
    : "/resume/ashvary-gidian-resume.pdf";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Ashvary Gidian - Resume</DialogTitle>
        </DialogHeader>

        {/* PDF Viewer */}
        <div className="flex-1 h-full border-t">
          {/* <iframe
            src="/resume/ashvary-gidian-resume.pdf"
            className="w-full h-full"
            loading="lazy"
            title="Ashvary Gidian Resume"
          /> */}
          <iframe
            src={pdfSrc}
            className="w-full h-full"
            loading="lazy"
            title="Ashvary Gidian Resume"
          />
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center px-6 py-4 border-t bg-muted/30">
          <button
            onClick={() => window.open("/resume/", "_blank")}
            className="text-sm underline cursor-pointer"
          >
            Open Full Page
          </button>

          <a
            href="/resume/ashvary-gidian-resume.pdf"
            download="Ashvary-Gidian-Resume-2026.pdf"
            className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm"
            title="Download Ashvary Gidian's Resume"
          >
            Download PDF
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
