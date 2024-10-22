import React from "react";
import "./energiApp1.css";
import Bygg2Navbar from "./navbar/Energi1Navbar";
import Bygg2Hero from "./hero/Energi1Hero";
import Bygg2Section from "./section/Energi1Section";
import Bygg2Section2 from "./section2/Energi1Section2";
import Bygg2Section3 from "./section3/Energi1Section3";
import Bygg2Section4 from "./section4/Energi1Section4";
import Bygg2Footer from "./footer/Energi1Footer";

const EnergiApp1 = () => {
  return (
    <div className="energiApp1">
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

export default EnergiApp1;
