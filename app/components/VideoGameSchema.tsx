export default function VideoGameSchema({ game }: { game?: string }) {
  const gameName = game ? game.charAt(0).toUpperCase() + game.slice(1) : "GEM7 Game";
  const description = game 
    ? `Play ${gameName} on the official GEM7 platform. Download the app to get started.` 
    : "GEM7 Game App with multiple interactive games. Download now and earn your sign-up bonus.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": gameName,
    "description": description,
    "operatingSystem": "Android",
    "applicationCategory": "GameApplication",
    "genre": ["Casino", "Casual", "Card"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
