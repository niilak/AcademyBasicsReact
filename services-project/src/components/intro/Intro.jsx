import Header01 from "../title/header01";
import "./intro.css";

function Intro() {
  return (
    <div className="container ">
      <Header01 text={"Software development"} />
      <div className="intro__container">
        <img src="group1045.png" alt="Web Development"></img>
        <p>
          We are one of the few companies which create their own products, and
          we are proud to mention SHIFT and eTenderi.
          <br /> <br />
          We make software according to your wishes and needs. Our team of
          dedicated programmers and IT professionals will create an easy-to-use
          solution for you, with unique user experience and attractive design.{" "}
          <br /> <br /> So far we have met the requirements of the following
          clients: Agency for electronical communications and postal services,
          Societe Generale bank, Ministry of Economy, Ministry of Justice,
          Volcano and others.
        </p>
      </div>
    </div>
  );
}

export default Intro;
