import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Responsible Gaming - GEM7 Game",
  description: "Learn about GEM7's commitment to responsible gaming, including self-exclusion tools and support resources.",
};

export default function ResponsibleGaming() {
  return (
    <>
      <Breadcrumbs />
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Responsible Gaming</h1>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-10">
          <h2 className="text-xl font-bold text-red-800 mb-2">Need Immediate Help?</h2>
          <p className="text-red-700">If you feel that gaming is negatively impacting your life, finances, or relationships, please seek professional help immediately.</p>
          <p className="text-red-700 font-bold mt-2">National Problem Gambling Helpline: 1-800-522-4700 (US/Canada)</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="lead">At GEM7, we want our platform to be a source of entertainment and fun. We are deeply committed to protecting our players and promoting responsible gaming practices.</p>
          
          <h2>Our Commitment</h2>
          <p>We believe that gaming should always be a choice, not a compulsion. We have implemented several tools within the app to help you manage your playtime and spending.</p>

          <h2>Player Protection Tools</h2>
          <p>Inside the GEM7 app settings, you can access the following tools:</p>
          <ul>
            <li><strong>Deposit Limits:</strong> Set daily, weekly, or monthly limits on how much you can deposit into your wallet.</li>
            <li><strong>Time Alerts:</strong> Enable notifications that remind you how long you have been actively playing.</li>
            <li><strong>Cool-Off Period:</strong> Temporarily lock your account for a short duration (24 hours to 7 days) if you need a break.</li>
            <li><strong>Self-Exclusion:</strong> You can request a long-term or permanent exclusion from our platform. During this time, you will not be able to log in or create a new account.</li>
          </ul>

          <h2>Warning Signs</h2>
          <p>It's important to monitor your gaming habits. You may need to take a step back if you find yourself:</p>
          <ul>
            <li>Playing longer than intended or hiding your playtime from loved ones.</li>
            <li>Chasing losses by depositing more money than you can afford.</li>
            <li>Feeling anxious, irritable, or restless when unable to play.</li>
            <li>Neglecting personal, professional, or social responsibilities to game.</li>
          </ul>

          <h2>Underage Gaming Prevention</h2>
          <p>GEM7 is strictly for adults aged 18 and over. We utilize identity verification systems to prevent minors from accessing the platform. If you share your device with minors, we strongly recommend using parental control software to restrict access to our application.</p>
        </div>
      </div>
    </>
  );
}
