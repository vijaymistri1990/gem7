import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gem7aap.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/games",
    "/reviews",
    "/faq",
    "/support",
    "/blog",
    "/blog/how-to-play-gem7-game-for-beginners",
    "/blog/gem7-vs-other-gaming-apps-honest-comparison",
    "/blog/is-gem7-safe-security-review-2026",
    "/blog/top-5-games-inside-gem7-app",
    "/press-kit",
    "/privacy-policy",
    "/terms",
    "/responsible-gaming"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/blog") ? 0.7 : 0.8,
  }));
}
