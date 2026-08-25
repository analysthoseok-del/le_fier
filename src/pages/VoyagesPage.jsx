import PageHero from "../components/PageHero";
import VoyageCard from "../components/Voyage Card";

export default function VoyagesPage() {
  const cards = [
    ["01", "GREEN RITUAL", "Botanical energy and refined skincare.", "/assets/hero.jpg"],
    ["02", "LUMINOUS CARE", "A bright, quiet approach to daily care.", "/assets/brand-story.jpg"],
  ];

  return (
    <>
      <PageHero eyebrow="LE FIER COLLECTION" title="VOYAGES" description="LE FIER의 브랜드 리추얼을 탐험하세요. " />
      <section className="content-wrap card-page-grid">
        {cards.map(([number, title, description, image]) => (
          <VoyageCard key={number} number={number} title={title} description={description} image={image} />
        ))}
      </section>
    </>
  );
}
