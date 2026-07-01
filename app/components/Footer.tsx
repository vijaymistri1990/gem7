import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold text-white mb-4"
          >
            <Image
              src="https://ddhp34p0t73zc.cloudfront.net/sys7/p2/uploadfile/20260609/922919822197526528.png?v=20260609155311"
              alt="GEM7 Logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />
            GEM7
          </Link>
          <p className="text-sm text-gray-400 mb-6">
            The ultimate gaming experience on your Android device. Play exciting
            games and discover endless entertainment.
          </p>
          <div className="text-sm font-semibold text-gray-400 mb-2">
            Age Restriction
          </div>
          <div className="flex items-center gap-2 text-white bg-slate-800 px-3 py-1.5 rounded w-max font-bold">
            <span className="text-xl">18+</span> Only
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/games"
                className="hover:text-white transition-colors"
              >
                Games List
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="hover:text-white transition-colors"
              >
                User Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/press-kit"
                className="hover:text-white transition-colors"
              >
                Press Kit
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/responsible-gaming"
                className="hover:text-white transition-colors"
              >
                Responsible Gaming
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 mt-12 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} GEM7 Official. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 max-w-2xl text-center md:text-right">
          <strong>Disclaimer:</strong> This is an independent affiliate site.
          GEM7 involves financial risk. 18+ only. Play responsibly. The
          information provided here is for educational purposes.
        </p>
      </div>
    </footer>
  );
}
