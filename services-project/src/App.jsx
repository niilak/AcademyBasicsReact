import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Intro from "./components/intro/Intro";
import Products from "./components/products/Products";
import ContactBanner from "./components/contactBanner/ContactBanner";

import "./App.css";

export function App(props) {
  console.log("Props", props);
  return (
    <>
      <Navigation />
      <Intro />
      <Products />
      <ContactBanner />
      {/* Interested topics */}
      <Footer />
    </>
  );
}

// export default App;
