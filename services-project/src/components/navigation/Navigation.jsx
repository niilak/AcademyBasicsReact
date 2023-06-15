import Link from "./link/Link";
import "./Navigation.css";

function Navigation() {
  return (
    <header class="header container">
      <nav class="nav">
        <img src="amplitudo-logo-shape.png" class="logo" alt="Amplitudo" />
        <img src="burger-menu.svg" class="burger-menu" alt="Menu" />

        <div class="nav__bar">
          <div class="nav__links">
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">StartUp</Link>
            <Link href="#">Career</Link>
            <Link href="#">Company</Link>
            <Link href="#">Blog</Link>
          </div>
          <a class="nav-lng__btn" href="#">
            cg
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
