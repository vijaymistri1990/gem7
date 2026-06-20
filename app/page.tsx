import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
import Header from "./components/Header";

export default function Home() {
  const affiliateLink =
    "https://share-rxapq9cajg.gems7.org/share/agent/AA0AYTAM?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

  return (
    <>
      <Header />

      <main className="bg-slate-50 flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-16 md:py-24 text-center bg-gradient-to-b from-white to-slate-50 overflow-hidden">
          {/* Subtle animated background shapes */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-50/50 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.15]">
              GEM7 Game Official – <br className="hidden md:block" />
              <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-500">Download Top Gaming App</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Welcome to the official portal for the <strong>GEM7 Game</strong>.
              Download the latest version of the GEM7 App to enjoy premium
              gaming features and claim your daily sign-up bonus.
            </p>

            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="relative block transition-transform duration-300 transform group-hover:-translate-y-2 group-hover:scale-105">
                <img
                  src="https://api-php-res-bucket-ap-south-1.s3.ap-south-1.amazonaws.com/uploadfile/20251210/857215341078515712.png?v=20260609155311"
                  alt="GEM7 Game App Icon"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-xl mx-auto mb-8 object-cover border-4 border-white"
                />
              </a>
            </div>

            <div className="my-8" id="download">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener nofollow"
                className="inline-flex items-center justify-center gap-3 bg-red-600 text-white text-lg md:text-xl font-bold py-4 px-10 rounded-full shadow-lg shadow-red-600/30 hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300"
              >
                DOWNLOAD
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <p className="flex items-center justify-center gap-2 text-sm text-green-600 mt-4 font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                100% Safe & Secure | V 2.4.1
              </p>
            </div>

            <div className="mt-12 w-full max-w-2xl mx-auto overflow-x-auto pb-4 px-2">
              <div className="min-w-[400px]">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-gray-100 text-left">
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <th className="p-4 bg-gray-50/50 text-slate-700 font-semibold w-1/3">App Name</th>
                      <td className="p-4 text-gray-700">GEM7 Game</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <th className="p-4 bg-gray-50/50 text-slate-700 font-semibold">Size</th>
                      <td className="p-4 text-gray-700">~55 MB</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <th className="p-4 bg-gray-50/50 text-slate-700 font-semibold">Version</th>
                      <td className="p-4 text-gray-700">Latest (2026)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <th className="p-4 bg-gray-50/50 text-slate-700 font-semibold">OS Requirement</th>
                      <td className="p-4 text-gray-700">Android 5.0+</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <th className="p-4 bg-gray-50/50 text-slate-700 font-semibold">Downloads</th>
                      <td className="p-4 text-gray-700 font-medium text-green-600">1,000,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                  About GEM7 App
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  The <strong>GEM7 App</strong> is one of the most trending gaming
                  applications in the market right now. Users can download the{" "}
                  <strong>GEM7 Game</strong> to play multiple fun, interactive games
                  and participate in reward-based events. If you are looking for an
                  exciting way to spend your time, downloading the GEM7 APK is the
                  perfect choice for you. The app is completely safe, user-friendly,
                  and offers smooth gameplay even on low-end devices.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
                  Review & Bonus System
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                  Players love the <strong>GEM7 Game</strong> for its straightforward
                  mechanics and massive community. Upon your first{" "}
                  <strong>GEM7 App Download</strong>, you are eligible for welcome
                  bonuses. To claim your bonus, install the
                  application, register, and log in. The platform features an integrated reward system that
                  provides continuous daily bonuses.
                </p>
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener nofollow"
                  className="inline-flex items-center gap-2 bg-amber-500 text-white text-base font-bold py-3 px-6 rounded-xl shadow-md hover:bg-amber-600 hover:-translate-y-0.5 transition-all w-full justify-center md:w-auto"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                  Get Welcome Bonus
                </a>
              </div>
            </div>

            <div id="features" className="mb-16">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Premium Features</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "User-Friendly Interface", desc: "Navigation within the GEM7 app is incredibly smooth and intuitive.", icon: "📱" },
                  { title: "Instant Withdrawals", desc: "Experience lightning-fast transactions directly within the game.", icon: "⚡" },
                  { title: "Low Data Usage", desc: "Heavily optimized to consume very little mobile data while playing.", icon: "📉" },
                  { title: "24/7 Support", desc: "In-app customer service ready to help you with any queries anytime.", icon: "🎧" },
                  { title: "Regular Updates", desc: "Constant updates for bug fixes, new games, and exciting events.", icon: "🔄" },
                  { title: "Secure Platform", desc: "Advanced encryption protects your data and ensures fair play.", icon: "🛡️" }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-8 rounded-3xl border border-green-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-200/50 rounded-full blur-2xl"></div>
                <h3 className="flex items-center gap-2 text-green-700 mb-6 font-bold text-2xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                  Pros
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free to download and install",
                    "High performance on old phones",
                    "Secure and verified platform",
                    "Multiple games in one app"
                  ].map((pro, i) => (
                    <li key={i} className="flex items-start gap-3 text-green-800">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="font-medium">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 p-8 rounded-3xl border border-red-200/60 shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-200/50 rounded-full blur-2xl"></div>
                <h3 className="flex items-center gap-2 text-red-700 mb-6 font-bold text-2xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
                  Cons
                </h3>
                <ul className="space-y-4">
                  {[
                    "Requires active internet connection",
                    "Only available for Android devices currently"
                  ].map((con, i) => (
                    <li key={i} className="flex items-start gap-3 text-red-800">
                      <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="font-medium">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden mb-16">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Download GEM7</h2>
                <div className="grid sm:grid-cols-3 gap-6 text-left mt-10">
                  <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl border border-slate-700/50">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-red-500/30">1</div>
                    <h4 className="font-bold mb-2">Download APK</h4>
                    <p className="text-slate-400 text-sm">Click the download button to get the official APK file.</p>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl border border-slate-700/50">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-red-500/30">2</div>
                    <h4 className="font-bold mb-2">Allow Unknown Apps</h4>
                    <p className="text-slate-400 text-sm">Go to Settings &gt; Security to enable unknown sources.</p>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl border border-slate-700/50">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-red-500/30">3</div>
                    <h4 className="font-bold mb-2">Install & Play</h4>
                    <p className="text-slate-400 text-sm">Open the APK, install, sign up, and claim your bonus!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Safety & Trust</h2>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Is the GEM7 Game safe? Absolutely. The <strong>GEM7 Download</strong>{" "}
                link provided here is the official affiliate link, ensuring you get
                the original, untampered APK file directly from the servers.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 text-center max-w-4xl mx-auto">
              <p className="text-sm text-slate-500 italic leading-relaxed">
                <strong>Disclaimer:</strong> This is a promotional website. We are an affiliate
                partner for GEM7. Please play responsibly. This game involves an
                element of financial risk and may be addictive. Please play at your
                own risk. Only for 18+ users.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">GEM7 Game: The Ultimate Gaming Experience</h2>
            <div className="prose prose-slate max-w-none text-slate-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Welcome to the world of <strong>GEM7</strong>, the most trusted and rapidly growing gaming platform. By completing your <strong>GEM7 Download</strong>, you unlock access to a variety of thrilling games designed for both entertainment and rewards. Whether you are looking for a quick casual game or competitive challenges, the <strong>GEM7 App</strong> has it all. 
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Why Choose GEM7 APK?</h3>
              <p>
                The <strong>GEM7 APK</strong> offers a seamless and optimized experience for all Android devices. With the latest version, players can enjoy bug-free gameplay, instant withdrawals, and 24/7 customer support. Don't fall for fakes; always ensure your <strong>GEM7 Game Download</strong> is from our official affiliate link to keep your device safe and secure.
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">GEM7 Login & Registration Process</h3>
              <p>
                Starting your journey is simple. After the <strong>GEM7 App Download</strong>, install the application and click on "Register". Enter your mobile number, verify via OTP, and complete your <strong>GEM7 Login</strong>. New users instantly receive a massive sign-up bonus! Learn the best <strong>GEM7 Tricks</strong> and participate in daily events to maximize your winnings. 
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Is GEM7 Real or Fake?</h3>
              <p>
                Many users ask, <em>"Is GEM7 real or fake?"</em> We assure you that <strong>GEM7 Game</strong> is 100% genuine, verified, and boasts millions of active players daily. It features secure payment gateways for both deposits and withdrawals. If you face any issues, the <strong>GEM7 Customer Care Number</strong> is available within the app for immediate assistance. Avoid searching for a <strong>GEM7 Mod APK</strong> or <strong>GEM7 Hack</strong>, as our fair-play policy ensures equal winning opportunities for everyone.
              </p>
            </div>
            
            {/* Keywords Block for aggressive SEO */}
            <div className="mt-10 pt-8 border-t border-slate-200">
               <p className="text-xs text-slate-400 leading-relaxed text-justify">
                 <strong>Popular Searches:</strong> GEM7, GEM7 Game, GEM7 App, GEM7 Download, GEM7 APK, GEM7 Official Website, GEM7 Login, GEM7 Register, GEM7 Sign Up Bonus, GEM7 App Download, GEM7 Game Download, GEM7 Customer Care Number, GEM7 Helpline, GEM7 Real or Fake, GEM7 Mod APK, GEM7 Hack, GEM7 Tricks, GEM7 Winning Formula, Play GEM7, GEM7 Earning App, Best Gaming App 2026, Download GEM7 Android.
               </p>
            </div>
          </div>
        </section>

        {/* Image Slider */}
        <ImageSlider />
      </main>

      <footer className="bg-slate-800 text-white text-center py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-5">
          <p className="mb-3 text-sm text-gray-300">
            &copy; 2026 GEM7 Official Promo. All Rights Reserved.
          </p>
          <p className="text-sm">
            <a href="#" className="text-gray-400 mx-3 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 mx-3 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 mx-3 hover:text-white transition-colors">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
