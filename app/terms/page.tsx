import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service - GEM7 Game",
  description: "Read the Terms of Service and user agreement for the GEM7 gaming platform.",
};

export default function Terms() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last Updated: October 1, 2026</p>

        <div className="prose prose-slate max-w-none">
          <p>Welcome to GEM7. By accessing or using our application, you agree to be bound by these Terms of Service. If you do not agree to all the terms, you may not access the service.</p>
          
          <h2>1. Eligibility and Age Restriction</h2>
          <p>You must be at least 18 years old to create an account and use GEM7. By using the service, you represent and warrant that you are of legal age and have the capacity to enter into a binding contract.</p>

          <h2>2. User Accounts</h2>
          <p>You are responsible for safeguarding the password that you use to access the service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
          <p><strong>Multiple Accounts:</strong> You are strictly permitted to hold only one (1) account. Creation of multiple accounts is grounds for immediate termination and forfeiture of funds.</p>

          <h2>3. Fair Play and Anti-Cheat</h2>
          <p>We employ automated and manual systems to ensure fair play. The use of bots, modified APKs, emulation software to gain an unfair advantage, or exploiting bugs is strictly prohibited and will result in a permanent ban.</p>

          <h2>4. Purchases and Withdrawals</h2>
          <p>All financial transactions are subject to review. We reserve the right to withhold withdrawals if fraudulent activity is suspected. Standard processing times apply, and minimum withdrawal limits are enforced as stated in the app.</p>

          <h2>5. Dispute Resolution</h2>
          <p>Any disputes arising out of or related to these Terms will be handled through binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify.</p>
        </div>
      </div>
    </>
  );
}
