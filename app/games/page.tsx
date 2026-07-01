import { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Games List - GEM7 Game",
  description: "Explore the wide variety of skill-based, strategy, and casual games available on the official GEM7 app.",
};

export default function Games() {
  const games = [
    { title: "Gem Puzzle Pro", desc: "A fast-paced puzzle game requiring quick reflexes and pattern recognition.", category: "Puzzle" },
    { title: "Strategic Towers", desc: "Defend your base in this complex strategy game. Upgrade your towers and defeat waves of enemies.", category: "Strategy" },
    { title: "Speed Racer 3D", desc: "Experience high-speed racing with stunning 3D graphics and multiplayer leaderboards.", category: "Action" },
    { title: "Brain Teaser Arena", desc: "Compete against others in real-time trivia and logic puzzles.", category: "Trivia" },
    { title: "Galaxy Defender", desc: "Classic arcade shooter action modernized for touch screens.", category: "Arcade" },
  ];

  return (
    <>
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Available Games</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">Discover the diverse library of high-quality games available inside the GEM7 app. From puzzles to strategy, there is something for everyone.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-100 flex items-center justify-center relative">
                 <div className="text-slate-400 font-medium">Gameplay Screenshot</div>
                 <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider">{game.category}</div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-slate-900 mb-2">{game.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{game.desc}</p>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-[var(--color-primary)] font-semibold text-sm">Play in GEM7 App &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
