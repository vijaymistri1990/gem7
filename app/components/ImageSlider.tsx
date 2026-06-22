"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "https://ddhp34p0t73zc.cloudfront.net/sys4/p4/uploadfile/20260528/918555296043917312.png?v=20260609155311",
  "https://ddhp34p0t73zc.cloudfront.net/sys7/public/static/images/index/advantages.png?v=20260609155311",
  "https://ddhp34p0t73zc.cloudfront.net/sys4/p4/uploadfile/20260528/918555323847958528.png?v=20260609155311",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto rotate every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="group relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/60 bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-amber-500/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-contain p-4 md:p-8"
            />
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-red-600 w-8 shadow-md shadow-red-600/40" 
                  : "bg-slate-300 hover:bg-red-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
