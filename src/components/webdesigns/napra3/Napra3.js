import React, { useEffect } from "react";
import "./napra3.css";
import NavbarNapra3 from "./navbar/NavbarNapra3";
import Napra3LandingPage from "./landing/Napra3LandingPage";
import Napra3AboutPage from "./about/Napra3AboutPage";
import Napra3AboutUsPage from "./aboutus/Napra3AboutUsPage";
import Napra3FooterPage from "./footer/Napra3FooterPage";

const Napra3 = () => {
  /*
    const mediaQueryCondition = window.matchMedia('( max-width: 800px )').matches;
    
    useEffect(() => {
        if (mediaQueryCondition) {
            window.scrollTo(0, 50);
        } else {
            window.scrollTo(0, 120);
        }
    }, [])
    */

  return (
    <div id="Hem" className="napra3-container">
      <NavbarNapra3 />

      <Napra3LandingPage />
      <Napra3AboutUsPage />
      <Napra3AboutPage />
      <Napra3FooterPage />
    </div>
  );
};

export default Napra3;
