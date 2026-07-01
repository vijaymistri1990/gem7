import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Support & Contact - GEM7 Game",
  description: "Get help with the GEM7 app. Contact our support team for issues with downloads, accounts, or gameplay.",
};

export default function Support() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Customer Support</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl">We are here to help. Submit a ticket below and our team will get back to you as soon as possible.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Submit a Request</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all">
                  <option>Account Issue</option>
                  <option>Payment / Withdrawal</option>
                  <option>Game Bug / Glitch</option>
                  <option>Feedback / Suggestion</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-all" placeholder="Describe your issue in detail..."></textarea>
              </div>
              
              <button type="button" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
              <h3 className="font-bold text-slate-800 text-lg mb-2">Direct Contact</h3>
              <p className="text-gray-600 text-sm mb-4">Prefer to email us directly? You can reach our departments at:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>General Support:</strong> support@gem7aap.com</li>
                <li><strong>Billing:</strong> billing@gem7aap.com</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 text-lg mb-2">Live Chat</h3>
              <p className="text-blue-800 text-sm mb-4">Our live chat agents are available 24/7 inside the official GEM7 app.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full transition-colors text-sm">
                Start Chat (App Required)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
