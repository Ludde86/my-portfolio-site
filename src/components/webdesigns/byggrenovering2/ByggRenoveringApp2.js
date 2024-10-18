import React from "react";
import "./byggRenoveringApp2.css";
import Bygg2Navbar from "./navbar/Bygg2Navbar";
import Bygg2Hero from "./hero/Bygg2Hero";
import Bygg2Section from "./section/Bygg2Section";
import Bygg2Section2 from "./section2/Bygg2Section2";
import Bygg2Section3 from "./section3/Bygg2Section3";
import Bygg2Section4 from "./section4/Bygg2Section4";
import Bygg2Footer from "./footer/Bygg2Footer";

const ByggRenoveringApp2 = () => {
  return (
    <div className="byggRenoveringApp2">
      <Bygg2Navbar />
      <Bygg2Hero />
      <Bygg2Section />
      <Bygg2Section2 />
      <Bygg2Section3 />
      <Bygg2Section4 />
      <Bygg2Footer />
    </div>
  );
};

export default ByggRenoveringApp2;
