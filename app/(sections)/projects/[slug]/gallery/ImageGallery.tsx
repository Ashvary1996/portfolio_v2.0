"use client";

import { useState, useEffect } from "react";

type ImageType = {
  title: string;
  src: string;
  alt: string;
};

type Props = {
  images: ImageType[];
};

export default function ImageGallery({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const closeModal = () => setCurrentIndex(null);

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev! === images.length - 1 ? 0 : prev! + 1));
  };
  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
  };

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <>
     
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group cursor-pointer bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm tracking-wide">
                  View Image
                </span>
              </div>
            </div>

            <div className="p-4 text-center">
              <p className="text-sm text-gray-500">
                {index + 1} / {images.length}
              </p>
              <h4 className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                {img.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-[90%] max-w-5xl flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-0 md:-left-14 text-white text-4xl px-4 cursor-pointer hover:scale-200 hover:text-gray-300 transition-all duration-300"
            >
              ❮
            </button>

            {/* Image */}
            <div className="w-full text-center">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <h2 className="text-white mt-4 text-lg">
                {images[currentIndex].title}
              </h2>
              <p className="text-gray-300 text-sm mt-1">
                {currentIndex + 1} / {images.length}
              </p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-0 md:-right-14 text-white text-4xl px-4 cursor-pointer hover:scale-200 hover:text-gray-300 transition-all duration-300"
            >
              ❯
            </button>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-5 right-0 text-white hover:text-red-500 text-3xl cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
