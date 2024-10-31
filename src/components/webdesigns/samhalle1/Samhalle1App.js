import React from "react";
import "./samhalle1App.css";
import Samhalle1Navbar from "./navbar/Samhalle1Navbar";
import Samhalle1Hero from "./hero/Samhalle1Hero";
import Samhalle1Section from "./section/Samhalle1Section";
import Samhalle2Section from "./section2/Samhalle2Section";
import Samhalle3Section from "./section3/Samhalle3Section";
import Samhalle4Section from "./section4/Samhalle4Section";
import Samhalle1Footer from "./footer/Samhalle1Footer";

const Samhalle1App = () => {
  return (
    <div className="samhalle1-container">
      <Samhalle1Navbar />
      <Samhalle1Hero />
      <Samhalle1Section />
      <Samhalle2Section />
      <Samhalle3Section />
      <Samhalle4Section />
      <Samhalle1Footer />
    </div>
  );
};

export default Samhalle1App;
