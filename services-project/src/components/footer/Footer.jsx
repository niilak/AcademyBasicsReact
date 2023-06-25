import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__div">
        <p className="footer__intro text-center">Interested in our services?</p>
        <div className="contact__form">
          <p>contact us</p>
        </div>

        <div className="our__location">
          <div className="white__box">
            <img src="amplitudo-logo-rounded.png" alt="Amplitudo Logo" />
            <p className="opacity-80">Hello from the center of the world!</p>
            <img className="pl-10" src="angel-emoji.png" alt="Angel" />
          </div>
          <div className="point"></div>
          <img className="mb-20" src="amplitudo.png" alt="Amplitudo" />
          <p className="text-center">Boulevard of St. Petar Cetinjski 56</p>
          <p className="down-line text-center">Podgorica, Montenegro</p>
          <span className="line text-center"></span>
          <p className="text-center">info@amplitudo.me</p>
          <p className="text-center">+382 20 223 244</p>
        </div>

        <div className="social__media">
          <p className="text-center">Follow us on social media</p>
          <div className="social-media-icons__grid">
            <img src="facebook-logo.png" alt="Facebook" />
            <img src="instagram-logo.png" alt="Instagram" />
            <img src="linked-in.png" alt="LinkedIn" />
            <img src="twitter-logo.png" alt="Twitter" />
            <img src="behance-logo.png" alt="Behance" />
          </div>
        </div>
        <p className="text-gray opacity-50 mb-20">
          © All rights reserved 2019 Amplitudo Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
