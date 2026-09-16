export default function PageHero({ eyebrow = "ORU", title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
