import Link from "./link/Link";
import "./Navigation.css";

function Navigation() {
  return (
    <header className="header container">
      <nav className="nav">
        <img src="amplitudo-logo-shape.png" className="logo" alt="Amplitudo" />
        <img src="burger-menu.svg" className="burger-menu" alt="Menu" />

        <div className="nav__bar">
          <div className="nav__links">
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">StartUp</Link>
            <Link href="#">Career</Link>
            <Link href="#">Company</Link>
            <Link href="#">Blog</Link>
          </div>
          <a className="nav-lng__btn" href="#">
            cg
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
