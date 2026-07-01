import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - GEM7 Game",
  description: "Find answers to the most common questions about the GEM7 game app, including downloads, security, and gameplay.",
};

export default function FAQ() {
  const faqs = [
    { q: "How do I download the GEM7 Game app?", a: "You can download the official GEM7 APK directly from our website by clicking the 'Download APK' button. Ensure you allow installations from unknown sources in your device settings." },
    { q: "Is the GEM7 app safe to install?", a: "Yes. Our APK is regularly scanned by top antivirus engines and uses bank-grade 256-bit encryption to protect your data and privacy." },
    { q: "What types of games are available in GEM7?", a: "We offer a wide variety of skill-based and casual games, including puzzles, strategy games, trivia, and action arcade games." },
    { q: "Do I need to pay to play?", a: "Many games on our platform are completely free to play. Some competitive tournaments may require an entry fee, which is clearly stated before you join." },
    { q: "How do I withdraw my winnings?", a: "Navigate to your account wallet and select 'Withdraw'. We support major bank transfers and popular e-wallets. Withdrawals are typically processed within 24 hours." },
    { q: "Can I play GEM7 on iOS?", a: "Currently, GEM7 is an Android-exclusive application. We do not have an official iOS app at this time." },
    { q: "What should I do if the app crashes?", a: "Please ensure you have the latest version installed. If the problem persists, clear your app cache or contact our 24/7 support team." },
    { q: "Is there an age restriction to play?", a: "Yes, you must be strictly 18 years of age or older to create an account and play on our platform." },
    { q: "How can I contact customer support?", a: "You can reach our support team via the 'Support' page on our website or directly through the help center within the GEM7 app." },
    { q: "Can I have multiple accounts?", a: "No. Our Terms of Service strictly prohibit having multiple accounts. Violating this rule may result in a permanent ban." },
    { q: "What is the minimum withdrawal amount?", a: "The minimum withdrawal amount is clearly listed in your wallet section, usually set at a standard minimum to cover processing fees." },
    { q: "Are the games fair?", a: "Absolutely. All our games use certified Random Number Generators (RNG) and are regularly audited by independent third parties to ensure fair play." },
    { q: "How do I update the app?", a: "When a new version is available, you will receive an in-app prompt. Alternatively, you can always download the latest APK from our official website." },
    { q: "What happens if I lose connection during a game?", a: "If you lose connection, our system will attempt to reconnect you. If unable, the game state is saved or handled according to the specific game's rules to ensure fairness." },
    { q: "How do I delete my account?", a: "You can request account deletion by contacting our support team with your registered email address. This process is irreversible." }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs />
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 mb-12">Find quick answers to common questions about the GEM7 platform.</p>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
