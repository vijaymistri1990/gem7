import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import JsonLd from "../components/JsonLd";

export const metadata: Metadata = {
  title: "User Reviews - GEM7 Game",
  description: "Read real testimonials and reviews from GEM7 Game players. See why millions choose our platform.",
};

export default function Reviews() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "GEM7 Reviews",
    "description": "User reviews for the GEM7 application."
  };

  const reviews = [
    { name: "Alex M.", rating: 5, date: "October 12, 2026", text: "The app runs flawlessly on my older Android device. The puzzle games are genuinely challenging and I love the daily leaderboards." },
    { name: "Sarah J.", rating: 5, date: "September 28, 2026", text: "I was skeptical at first, but the security features are top-notch. Customer support replied to my query within 10 minutes. Very impressed." },
    { name: "David K.", rating: 4, date: "September 15, 2026", text: "Great variety of games. The interface is clean and doesn't spam you with ads like other apps. Would love to see more strategy games added." },
    { name: "Michael R.", rating: 5, date: "August 30, 2026", text: "Easily the best gaming app I've downloaded this year. The verification process was quick and the app is very stable." },
    { name: "Priya T.", rating: 5, date: "August 14, 2026", text: "I enjoy the trivia arena. It's competitive but fair. The app itself is very well designed and intuitive." },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs />
      <div className="max-w-5xl mx-auto px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Player Reviews</h1>
        <p className="text-xl text-gray-600 mb-12">See what our community has to say about their experience with the GEM7 app.</p>

        <div className="bg-slate-50 rounded-2xl p-8 mb-12 flex flex-col sm:flex-row items-center gap-8 justify-center border border-slate-100 text-center sm:text-left">
          <div className="text-6xl font-extrabold text-slate-900">4.8</div>
          <div>
            <div className="flex gap-1 mb-2 justify-center sm:justify-start">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-slate-600 font-medium">Based on 12,543 reviews</p>
          </div>
        </div>

        <div className="grid gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-bold text-slate-800 text-lg">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
