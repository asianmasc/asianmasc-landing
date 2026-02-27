"use client";

import { useState } from "react";
import Image from "next/image";
import type { PlaybookImage } from "@/data/playbook-content";
import PlaybookLightbox from "./PlaybookLightbox";

interface Props {
  images: PlaybookImage[];
}

export default function PlaybookImageGrid({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={`mt-8 mb-2 grid gap-5 ${
          images.length === 1
            ? "grid-cols-1 max-w-md mx-auto"
            : images.length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {images.map((img, m) => (
          <figure key={m} className="group">
            <button
              type="button"
              onClick={() => setLightboxIndex(m)}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-dark-500 hover:border-accent-gold/30 transition-colors duration-300 cursor-zoom-in"
              aria-label={`View full image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </button>
            {img.caption && (
              <figcaption className="mt-2.5 text-xs text-gray-400 text-center leading-relaxed">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {lightboxIndex !== null && (
        <PlaybookLightbox
          src={images[lightboxIndex].src}
          alt={images[lightboxIndex].alt}
          caption={images[lightboxIndex].caption}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
