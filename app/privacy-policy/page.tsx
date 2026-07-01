import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy - GEM7 Game",
  description: "Read our privacy policy to understand how GEM7 collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: October 1, 2026</p>

        <div className="prose prose-slate max-w-none">
          <p>This Privacy Policy describes how GEM7 ("we", "us", or "our") collects, uses, and discloses your personal information when you use our mobile application and website.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We only collect information necessary to provide our services and ensure a secure environment:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, phone number, and age verification details.</li>
            <li><strong>Usage Data:</strong> Device ID, IP address, game interaction data, and crash reports.</li>
            <li><strong>Transaction Data:</strong> Deposit and withdrawal history (processed securely via encrypted third-party gateways).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected data for the following purposes:</p>
          <ul>
            <li>To provide and maintain the GEM7 service.</li>
            <li>To verify your identity and age (18+ strictly enforced).</li>
            <li>To prevent fraud, cheating, and abuse of the platform.</li>
            <li>To communicate with you regarding updates, security alerts, and customer support.</li>
          </ul>

          <h2>3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal data to advertisers. We may share data only with:</p>
          <ul>
            <li>Service providers necessary for operating our platform (e.g., cloud hosting, payment processors).</li>
            <li>Law enforcement agencies when legally required to do so.</li>
          </ul>

          <h2>4. Your Rights (GDPR & CCPA Compliant)</h2>
          <p>Depending on your region, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request complete deletion of your account and associated data.</li>
          </ul>
          
          <h2>5. Contact Us</h2>
          <p>If you have questions regarding this privacy policy, please contact our Data Protection Officer at <strong>privacy@gem7aap.com</strong>.</p>
        </div>
      </div>
    </>
  );
}
