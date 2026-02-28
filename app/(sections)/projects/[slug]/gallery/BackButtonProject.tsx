 
"use client";

import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={goBack}
      className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition cursor-pointer dark:text-white"
    >
      <BiArrowBack size={24} />
      Back to Projects
    </button>
  );
}