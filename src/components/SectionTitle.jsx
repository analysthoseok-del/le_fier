export default function SectionTitle({ eyebrow, title, linkText = "VIEW ALL", href = "#" }) {
  return (
    <div className="section-title-row">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2>{title}</h2>
      </div>
      <a href={href} className="section-view-link">{linkText} <span>+</span></a>
    </div>
  );
}
