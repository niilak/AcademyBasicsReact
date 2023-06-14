import Header02 from "../title/Header02";
import ContactButton from "../shared/contactBtn/ContactBtn";

import "./contactBanner.css";

function ContactBanner() {
  return (
    <div className="contact-banner__container">
      <Header02 text={"Like what you see?"} colorClass={"white"} />
      <p>Let's talk about it.</p>
      <ContactButton />
    </div>
  );
}

export default ContactBanner;
