import React from "react";
import "./byggRenoveringApp1.css";
import Bygg1Navbar from "./navbar/Bygg1Navbar";
import Bygg1Hero from "./hero/Bygg1Hero";
import Bygg1Section from "./section/Bygg1Section";
import Bygg1Footer from "./footer/Bygg1Footer";

const ByggRenoveringApp1 = () => {
  return (
    <div className="byggRenoveringApp1">
      <Bygg1Navbar />
      <Bygg1Hero />
      <Bygg1Section />
      <Bygg1Footer />
    </div>
  );
};

export default ByggRenoveringApp1;
