import Navigation from "./components/navigation/Navigation";
import Intro from "./components/intro/Intro";
import Products from "./components/products/Products";
import ContactBanner from "./components/contactBanner/ContactBanner";
import InterestedTopics from "./components/interestedTopics/InterestedTopics";
import Footer from "./components/footer/Footer";

import "./App.css";

export function App(props) {
  console.log("Props", props);
  return (
    <>
      <Navigation />
      <Intro />
      <Products />
      <ContactBanner />
      <InterestedTopics />
      <Footer />
    </>
  );
}

// export default App;
