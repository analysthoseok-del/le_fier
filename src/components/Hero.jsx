import { useEffect, useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setShowVideo((current) => !current);
    }, 5000);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <section className="hero-section">
      <img
        className={`hero-image hero-media ${showVideo ? "is-hidden" : "is-visible"}`}
        src="/assets/hero.png"
        alt="ORU Caffeine Shot serum"
      />
      <video
        className={`hero-image hero-media ${showVideo ? "is-visible" : "is-hidden"}`}
        src="/assets/ORU_water_final.mp4"
        autoPlay
        muted
        playsInline
        loop
        aria-label="ORU water video"
      />
    </section>
  );
}
