export default function VoyageCard({ number, title, description, image }) {
  return (
    <article className="VoyageCard">
      {image && <img src={image} alt={title} />}
      <div className="Voyage-Card-overlay">
        <span>{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
