import { footerGroups } from "../data/siteData";

export default function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <button className="footer-logo" onClick={() => navigate("/")}>ORU</button>
          <div className="social-row">
            <span>◎</span><span>Ｎ</span><span>▶</span>
          </div>
        </div>

        {footerGroups.map((group) => (
          <div className="footer-col" key={group.title}>
            <h4>{group.title}</h4>
            {group.links.map((link) => (
              <button key={link} onClick={() => navigate(link === "1:1 INQUIRY" ? "/inquire" : "/")}>
                {link}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="copyright">ORU CO., LTD. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}
