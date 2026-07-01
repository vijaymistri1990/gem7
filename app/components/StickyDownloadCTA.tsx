"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyDownloadCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-full p-2 pr-6 flex items-center gap-4 border border-gray-100 animate-fade-in-up">
        <div className="bg-slate-100 p-2 rounded-full hidden sm:block">
          <img
            src="https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311"
            alt="GEM7"
            className="w-8 h-8 object-contain"
          />
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-bold text-slate-800">GEM7 App</div>
          <div className="text-xs text-green-600 font-semibold flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Verified Safe
          </div>
        </div>
        <Link
          href="https://share-rxapq9cajg.gems7.org/web/share/index.html?ic=AA0AYTAM"
          className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white font-bold py-2.5 px-6 rounded-full transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download APK
        </Link>
      </div>
    </div>
  );
}
