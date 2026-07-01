import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Press Kit & Media Assets - GEM7 Game",
  description:
    "Official press kit for GEM7 Game. Download logos, brand assets, and company information for media use.",
};

export default function PressKit() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Press Kit
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Everything you need to cover GEM7 in your publication, blog, or video
          review.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Company Overview
            </h2>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-gray-700 mb-4">
                GEM7 is a premier mobile gaming platform launched in 2024,
                focusing on delivering high-quality, secure, and engaging
                experiences for Android users. With over 1 million active
                downloads, our platform aggregates a variety of skill-based,
                strategy, and casual games into a single optimized application.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  <strong>Founded:</strong> 2024
                </li>
                <li>
                  <strong>Headquarters:</strong> Global Remote
                </li>
                <li>
                  <strong>Active Users:</strong> 1,000,000+
                </li>
                <li>
                  <strong>Platform:</strong> Android (APK)
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Brand Assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center">
                <img
                  src="https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311"
                  alt="GEM7 Logo"
                  className="h-24 w-auto mb-4"
                />
                <h3 className="font-bold text-slate-800 mb-2">Primary Logo</h3>
                <button className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-colors">
                  Download PNG
                </button>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center flex flex-col items-center justify-center">
                <img
                  src="https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311"
                  alt="GEM7 Logo Light"
                  className="h-24 w-auto mb-4"
                />
                <h3 className="font-bold text-white mb-2">
                  Light Logo (For Dark Backgrounds)
                </h3>
                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors">
                  Download PNG
                </button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Brand Guidelines
            </h2>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-gray-700 mb-4">
                When referring to our platform, please use "GEM7" (all caps). Do
                not use "Gem 7", "Gem7", or "GEM 7".
              </p>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <div className="h-16 bg-[#2563eb] rounded-lg mb-2"></div>
                  <p className="text-sm font-mono text-center">
                    Primary Blue (#2563eb)
                  </p>
                </div>
                <div className="w-1/2">
                  <div className="h-16 bg-[#059669] rounded-lg mb-2"></div>
                  <p className="text-sm font-mono text-center">
                    Secondary Green (#059669)
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Media Contact
            </h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <p className="text-blue-900 mb-2">
                For press inquiries, interviews, or additional assets, please
                contact our PR team:
              </p>
              <a
                href="mailto:press@gem7aap.com"
                className="text-xl font-bold text-[var(--color-primary)] hover:underline"
              >
                press@gem7aap.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
