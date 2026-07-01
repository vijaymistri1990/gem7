"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie_consent");
    if (!hasConsented) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 text-white p-4 shadow-xl border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements. By continuing to visit this site you agree to our use of cookies. 
          Read our <Link href="/privacy-policy" className="text-[var(--color-primary)] hover:underline">Privacy Policy</Link> for more details.
        </div>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-2 px-6 rounded transition-colors"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
