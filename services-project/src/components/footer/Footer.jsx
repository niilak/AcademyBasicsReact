import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer__div">
        <p class="footer__intro text-center">Interested in our services?</p>
        <div class="contact__form">
          <p>contact us</p>
        </div>

        <div class="our__location">
          <div class="white__box">
            <img src="amplitudo-logo-rounded.png" alt="Amplitudo Logo" />
            <p class="opacity-80">Hello from the center of the world!</p>
            <img class="pl-10" src="angel-emoji.png" alt="Angel" />
          </div>
          <div class="point"></div>
          <img class="mb-20" src="amplitudo.png" alt="Amplitudo" />
          <p class="text-center">Boulevard of St. Petar Cetinjski 56</p>
          <p class="down-line text-center">Podgorica, Montenegro</p>
          <span class="line text-center"></span>
          <p class="text-center">info@amplitudo.me</p>
          <p class="text-center">+382 20 223 244</p>
        </div>

        <div class="social__media">
          <p class="text-center">Follow us on social media</p>
          <div class="social-media-icons__grid">
            <img src="facebook-logo.png" alt="Facebook" />
            <img src="instagram-logo.png" alt="Instagram" />
            <img src="linked-in.png" alt="LinkedIn" />
            <img src="twitter-logo.png" alt="Twitter" />
            <img src="behance-logo.png" alt="Behance" />
          </div>
        </div>
        <p class="text-gray opacity-50 mb-20">
          © All rights reserved 2019 Amplitudo Ltd.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
