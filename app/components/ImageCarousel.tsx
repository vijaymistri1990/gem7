"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/g1.jpg",
  "/g2.jpg",
  "/g3.jpg"
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
      <div className="h-[500px] sm:h-[600px] bg-slate-900 relative">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Gameplay screenshot ${index + 1}`}
            fill
            className={`object-contain p-2 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Navigation Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="bg-slate-900 text-white p-4 text-center text-sm font-medium z-20 relative">
        Actual app interface showcasing the main lobby.
      </div>
    </div>
  );
}
