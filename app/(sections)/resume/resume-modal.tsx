"use client";

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
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-5xl h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Ashvary Gidian Resume</DialogTitle>
        </DialogHeader>

        {/* PDF Viewer */}
        <div className="flex-1 h-full border-t">
          <iframe
            src="/resume/Ashvary_Gidian_Resume.pdf"
            className="w-full h-full"
            loading="lazy"
            title="Ashvary Gidian Resume"
          />
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center px-6 py-4 border-t bg-muted/30">
          <button
            onClick={() => window.open("/resume", "_blank")}
            className="text-sm underline cursor-pointer"
          >
            Open Full Page
          </button>

          <a
            href="/resume/Ashvary_Gidian_Resume.pdf"
            download
            className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm"
          >
            Download PDF
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
