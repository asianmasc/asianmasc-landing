"use client";

import { useEffect, useCallback } from "react";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export default function PlaybookLightbox({ src, alt, caption, onClose }: Props) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-700/80 text-gray-300 hover:text-white hover:bg-dark-600 transition-colors"
        aria-label="Close image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="flex flex-col items-center justify-center p-4 sm:p-8 max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
        />
        {caption && (
          <p className="mt-3 text-sm text-gray-400 text-center max-w-lg">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
