import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { products } from "../data/siteData";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="content-wrap">
        <section className="home-section" id="shop">
          <SectionTitle title="WHAT’S NEW" />
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-number">{product.number} / NEW</div>
                <div className="product-photo">
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.subtitle}</p>
                <strong>{product.price}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="story-panel" id="story">
          <div className="story-copy">
            <span>BRAND STORY</span>
            <h2>A BEAUTY RITUAL<br />THAT REVEALS YOU.</h2>
            <p>
              ORU는 피부 본연의 힘을 믿습니다.<br />
              자연과 과학의 조화, 정제한 성분과 섬세한 감각으로<br />
              당신만의 빛을 깨우는 리추얼을 만듭니다.
            </p>
            <a href="#about" className="underline-link">MORE ABOUT ORU</a>
          </div>
          <div className="story-photo">
            <img src="/assets/brand-story.jpg" alt="ORU Brand Story" />
          </div>
        </section>

        <section className="home-section" id="best">
          <SectionTitle title="EVENT" />
          <div className="event-grid">
            <article className="event-card">
              <img src="/assets/event-gift.png" alt="Signature Gift" />
            </article>
            <article className="event-card">
              <img src="/assets/event-review.jpg" alt="Review Event" />
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
