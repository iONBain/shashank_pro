import { useEffect, useState } from "react";
import "./App.css";
import Achievements from "./components/Achievements";
import NavComp from "./components/NavComp";
import YoutubeComp from "./components/YoutubeComp";
import { Element } from "react-scroll";
import { StickyContainer } from "react-sticky";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Bio from "./components/Bio";
import Footer from "./components/Footer";

const Spacer = () => {
  return <div className="spacer"></div>;
};
const InvisibleNav = () => {
  return <div className="invisible-nav"></div>;
};
function App() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const spacer = document.getElementById("topSpacer");
    const handleScroll = () => {
      if (window.scrollY > spacer.clientHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="image-container" id="topSpacer">
        <img
          src="/assets/sUHeader.png"
          className="img-header-su"
          alt="img - header - su"
        />
        <img
          src="/imgGal/ShankBox-Hero.png"
          className="img-hero-header"
          alt="img - hero"
        />
      </div>

      <NavComp isSticky={isSticky} />
      {isSticky && <InvisibleNav />}
      <Element name="portfolio" className="scrollable-container p-bot-40">
        <Spacer />
        <YoutubeComp />
      </Element>
      <Element name="achievement" className="scrollable-container bg-offwhite">
        <Spacer />
        <Achievements />
      </Element>
      <Element name="bio" className="scrollable-container">
        <Spacer />
        <Bio />
      </Element>
      <Element name="gallery" className="scrollable-container p-bot-40">
        <Spacer />
        <Gallery />
      </Element>
      <Element name="contact" className="scrollable-container bg-offwhite p-bot-40">
        <Spacer />
        <Contact />
      </Element>
      {/* <Spacer /> */}
      <Footer />
    </div>
  );
}

export default App;
