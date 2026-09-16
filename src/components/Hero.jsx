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
      {showVideo ? (
        <video
          className="hero-image hero-video"
          src="/assets/ORU_water_final.mp4"
          autoPlay
          muted
          playsInline
          loop
          aria-label="ORU water video"
        />
      ) : (
        <img className="hero-image" src="/assets/hero.jpg" alt="ORU Caffeine Shot serum" />
      )}
    </section>
  );
}
