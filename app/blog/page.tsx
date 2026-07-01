import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "GEM7 Blog - News, Tips & Reviews",
  description: "Read the latest news, game tips, comparisons, and security reviews on the official GEM7 blog.",
};

export default function BlogIndex() {
  const posts = [
    {
      title: "How to Play GEM7 Game for Beginners",
      slug: "how-to-play-gem7-game-for-beginners",
      excerpt: "Just downloaded the app? This comprehensive guide will walk you through setting up your account, finding the best games, and mastering the controls.",
      date: "October 10, 2026",
      author: "Jane Smith",
      category: "Guides"
    },
    {
      title: "GEM7 vs Other Gaming Apps: Honest Comparison",
      slug: "gem7-vs-other-gaming-apps-honest-comparison",
      excerpt: "Wondering how GEM7 stacks up against the competition? We take an objective look at performance, game variety, and security.",
      date: "September 25, 2026",
      author: "Mark Johnson",
      category: "Reviews"
    },
    {
      title: "Is GEM7 Safe? Security Review 2026",
      slug: "is-gem7-safe-security-review-2026",
      excerpt: "An in-depth analysis of the security measures, encryption standards, and privacy policies that protect GEM7 users.",
      date: "September 12, 2026",
      author: "Alex Davis",
      category: "Security"
    },
    {
      title: "Top 5 Games Inside GEM7 App",
      slug: "top-5-games-inside-gem7-app",
      excerpt: "Discover the most popular and highest-rated games currently available on the GEM7 platform. Which one will be your favorite?",
      date: "August 30, 2026",
      author: "Sarah Lee",
      category: "Features"
    }
  ];

  return (
    <>
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">GEM7 Official Blog</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">Stay updated with the latest tips, platform news, and in-depth reviews from our community experts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">{post.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="text-sm font-medium text-slate-700">By {post.author}</div>
                    <div className="text-[var(--color-primary)] font-semibold text-sm flex items-center gap-1">
                      Read Article <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
