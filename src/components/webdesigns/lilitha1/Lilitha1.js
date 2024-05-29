import React from "react";
import "./lilitha.css";
import Lil1Landing from "./landing/Lil1Landing";
import Lil1Content1 from "./content1/Lil1Content1";
import Lil1About from "./about/Lil1About";
import Lil1Footer from "./footer/Lil1Footer";

const Lilitha1 = () => {
  return (
    <div className="lilitha1_container">
      <Lil1Landing />
      <Lil1About />
      <Lil1Content1 />
      <Lil1Footer />
    </div>
  );
};

export default Lilitha1;
