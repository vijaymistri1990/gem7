import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "About Us - GEM7 Official Team",
  description: "Learn about the team behind GEM7 Game, our company story, and our mission to provide the best secure gaming platform.",
};

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About GEM7",
    "description": "Information about the GEM7 company and team."
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs />
      
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About GEM7</h1>
        
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p className="lead text-xl text-slate-700 mb-8">
            GEM7 was founded with a single mission: to create a secure, high-performance, and engaging gaming ecosystem for Android users worldwide.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Our Story</h2>
          <p className="mb-6">
            Starting in 2024, our team of passionate game developers and security experts saw a gap in the mobile gaming market. Many platforms lacked robust security, while others suffered from poor performance and excessive battery drain. We built GEM7 from the ground up to solve these exact problems.
          </p>
          <p className="mb-6">
            Today, we are proud to serve over 1 million active users who trust our platform for their daily entertainment. We continuously update our app to introduce new features, optimize performance, and maintain bank-grade security protocols.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">The Team</h2>
          <p className="mb-6">
            We are a diverse group of engineers, designers, and community managers dedicated to providing the best possible experience. We believe in transparency, user privacy, and responsible gaming.
          </p>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mt-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Contact Information</h2>
            <ul className="space-y-3">
              <li><strong>Email:</strong> support@gem7aap.com</li>
              <li><strong>Business Inquiries:</strong> partnerships@gem7aap.com</li>
              <li><strong>Press:</strong> press@gem7aap.com</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-[var(--color-primary)] hover:underline font-semibold">Follow us on Twitter</a>
              <a href="#" className="text-[var(--color-primary)] hover:underline font-semibold">Join our Discord</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
