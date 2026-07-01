"use client";

import { useState, useEffect } from "react";

export default function AgeGate() {
  const [showGate, setShowGate] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("age_verified");
    if (!isVerified) {
      setShowGate(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("age_verified", "true");
    setShowGate(false);
    document.body.style.overflow = "auto";
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  if (!showGate) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm px-4">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center shadow-2xl">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl font-bold">18+</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Age Verification Required</h2>
        <p className="text-gray-600 mb-8">
          This website contains content related to gaming with real money rewards. 
          You must be 18 years of age or older to enter.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleVerify}
            className="w-full bg-[var(--color-primary)] text-white font-bold py-3 px-6 rounded-lg hover:bg-[var(--color-primary-hover)] transition-colors"
          >
            I am 18 or older
          </button>
          <button
            onClick={handleReject}
            className="w-full bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
          >
            I am under 18 (Exit)
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          By entering this site, you agree to our Terms of Service and Privacy Policy. Play responsibly.
        </p>
      </div>
    </div>
  );
}
