import { useEffect, useState } from "react";
import "./App.css";
import Achievements from "./components/Achievements";
import NavComp from "./components/NavComp";
import YoutubeComp from "./components/YoutubeComp";
import { Element } from "react-scroll";
import { StickyContainer } from "react-sticky";

const Spacer = () => {
  return <div className="spacer"></div>;
};
function App() {
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const spacer = document.getElementById("topSpacer")
  //   const navbar = document.getElementById("navbar")
  //   const handleScroll = () => {
  //     console.log(window.scrollY)
  //     if (window.scrollY >= spacer.clientHeight) {
  //       navbar.classList.add('sticky');
  //       } else {
  //         navbar.classList.remove('sticky');
  //     }

  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const [isSticky, setIsSticky] = useState(false);
  // useEffect(() => {
  //   const spacer = document.getElementById("topSpacer");
  //   const handleScroll = () => {
  //     if (window.scrollY > spacer.clientHeight) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
        <NavComp />
      {/* <StickyContainer>
      </StickyContainer> */}
      <Spacer />
      <Element name="portfolio" className="scrollable-container">
        <YoutubeComp />
      </Element>
      <Element name="achievement" className="scrollable-container">
        <Achievements />
      </Element>
      <Element name="contact" className="scrollable-container">
        <Achievements />
      </Element>
      <Element name="bio" className="scrollable-container">
        <Achievements />
      </Element>
    </div>
  );
}

export default App;
