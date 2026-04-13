"use client";

import { useEffect, useState } from "react";

export default function ResumeViewer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const pdfSrc = isMobile
    ? "https://drive.google.com/file/d/1rOD-Hfh2y0sApYD6g0HfWxvLvLxeiXxG/preview"
    : "/resume/ashvary-gidian-resume.pdf";

  function handleClose() {
    // If opened via window.open (from your site)
    if (window.opener) {
      window.close();
    }
    // If user opened manually (Google / address bar)
    else {
      window.location.href = "/";
    }
  }

  return (
    <main className="  w-full h-screen bg-neutral-900">
      {/* Floating Actions */}
      <div className="  top-6 right-8  z-20 flex justify-end gap-2 ">
        <a
          href="/resume/ashvary-gidian-resume.pdf"
          download="Ashvary-Gidian-Resume-2026.pdf"
          className="px-3 py-1.5 text-sm rounded-md bg-white/90 hover:bg-white text-black backdrop-blur shadow"
          title="Download Resume"
        >
          Download
        </a>

        {/* Right */}
        <button
          onClick={handleClose}
          className="text-xs sm:text-sm px-3 py-1.5 rounded-md bg-black/70 hover:bg-black text-white shadow cursor-pointer"
        >
          Close
        </button>
      </div>

      {/* PDF */}
      <iframe
        // src="/resume/ashvary-gidian-resume.pdf"
        // src="https://drive.google.com/file/d/1b0ATnpptDrz7G1SRWC_R9aYIxS1cIzW2/preview"
        src={pdfSrc}
        className="w-full h-full"
        loading="lazy"
        title="Ashvary Gidian Resume"
      />
    </main>
  );
}
