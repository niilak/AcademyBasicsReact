import Header02 from "../shared/title/Header02";
import ContactButton from "../shared/contactBtn/ContactBtn";

import bannerStyles from "./contactBanner.module.css";

function ContactBanner() {
  return (
    <div className={`${bannerStyles.contact_banner__container}`}>
      <Header02 text={"Like what you see?"} colorClass={"white"} />
      <p>Let's talk about it.</p>
      <ContactButton />
    </div>
  );
}

export default ContactBanner;

const bannerStyles = {
  contact_banner__container: "contact_banner__container_idddddddd",
  surname: "njanja",
};
