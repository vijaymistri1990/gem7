import Image from "next/image";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import {
  StoreButtons,
  TrustBadges,
  VerifiedBadge,
} from "./components/TrustBadge";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GEM7 Game",
    operatingSystem: "ANDROID",
    applicationCategory: "GameApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "12543",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GEM7 Official",
    url: "https://gem7aap.com",
    logo: "https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311",
    sameAs: [
      "https://facebook.com/gem7official",
      "https://twitter.com/gem7official",
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={orgSchema} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden py-16 sm:py-24">
        <div
          className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04] dark:bg-[bottom_1px_center]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-5 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <VerifiedBadge />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
            GEM7 Game Download - Official Android Gaming App 2026
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the next generation of mobile entertainment. Play
            expertly crafted games, compete on leaderboards, and join a thriving
            community of over 1 million players.
          </p>

          <div id="download-section" className="scroll-mt-32">
            <StoreButtons />
          </div>

          <TrustBadges />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How to Get Started in 3 Simple Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting into the action is fast, secure, and incredibly easy.
              Follow these steps to begin your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-slate-100 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-white">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-4 mb-3">
                Download the App
              </h3>
              <p className="text-gray-600">
                Click the secure download button to get the latest official GEM7
                APK directly to your Android device.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-slate-100 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-white">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-4 mb-3">
                Install & Register
              </h3>
              <p className="text-gray-600">
                Open the file to install. Create your free account in seconds
                using just your mobile number or email.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-slate-100 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xl font-bold border-4 border-white">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-4 mb-3">
                Start Playing
              </h3>
              <p className="text-gray-600">
                Browse our extensive library of games, join matches, and start
                your entertainment experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Choose the Official GEM7 App?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Bank-Grade Security
                    </h3>
                    <p className="text-gray-600">
                      Your data is protected with 256-bit encryption. The app is
                      regularly scanned for vulnerabilities to ensure a safe
                      environment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Lightning Fast Performance
                    </h3>
                    <p className="text-gray-600">
                      Optimized for Android devices of all tiers. Enjoy smooth
                      gameplay with minimal battery drain and network usage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Massive Community
                    </h3>
                    <p className="text-gray-600">
                      Join leaderboards, participate in daily events, and
                      connect with other players in our integrated social
                      features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              {/* Using a placeholder for gameplay screenshot */}
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white relative">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15.999V8a2 2 0 0 0-2-2h-3.5a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 6 3.5v1A1.5 1.5 0 0 1 4.5 6H3a2 2 0 0 0-2 2v7.999a2 2 0 0 0 2 2h2.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 0 8.5 22h5a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5H19a2 2 0 0 0 2-2zM8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10.5 2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1.5-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">
                    Action-Packed Gameplay
                  </h4>
                  <p className="text-white/80">
                    Experience high-quality graphics and responsive controls.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900 text-white p-4 text-center text-sm font-medium">
                Actual app interface showcasing the main lobby.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance Notice */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
            <svg
              className="w-6 h-6 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Commitment to Safe Gaming
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            GEM7 is committed to providing a secure and responsible gaming
            environment. We enforce strict 18+ age verification and provide
            tools for self-exclusion and limit setting. If you feel that gaming
            is negatively impacting your life, please seek help immediately.
          </p>
          <Link
            href="/responsible-gaming"
            className="text-[var(--color-primary)] font-semibold hover:underline"
          >
            Read our Responsible Gaming Policy
          </Link>
        </div>
      </section>
    </>
  );
}
