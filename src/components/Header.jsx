import { navigation } from "../data/siteData";

export default function Header({ navigate }) {
  return (
    <>
      <div className="utility-bar">
        <span>WELCOME TO LE FIER OFFICIAL STORE</span>
        <div className="utility-links">
          <span>KOREA (KRW)⌄</span>
          <button onClick={() => navigate("/inquire")}>LOGIN</button>
          <button onClick={() => navigate("/inquire")}>CART (0)</button>
        </div>
      </div>

      <header className="site-header">
        <nav className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <button className="brand-logo" onClick={() => navigate("/")}>LE FIER</button>

        <div className="header-actions">
          <button aria-label="Search">⌕</button>
          <button aria-label="Account" onClick={() => navigate("/inquire")}>♙</button>
          <button aria-label="Bag" onClick={() => navigate("/inquire")}>♧<sup>0</sup></button>
        </div>
      </header>
    </>
  );
}
