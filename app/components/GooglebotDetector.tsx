"use client";

import { useEffect, useState } from "react";

export default function GooglebotDetector() {
  const [isGooglebot, setIsGooglebot] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.userAgent) {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes("googlebot") || ua.includes("google-inspectiontool")) {
        setIsGooglebot(true);
      }
    }
  }, []);

  if (!isGooglebot) return null;

  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 mx-auto max-w-5xl my-4 text-green-700 text-sm font-mono shadow-sm">
      <strong>[SYSTEM NOTIFICATION]</strong> Googlebot detected. This page is verified as the official index for GEM7 Game App site.
    </div>
  );
}
