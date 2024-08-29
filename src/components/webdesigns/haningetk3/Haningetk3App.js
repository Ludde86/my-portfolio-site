import React from "react";
import "./haningetk3App.css";
import Haningetk3Welcome from "./welcome/Haningetk3Welcome";
import Haningetk3Footer from "./footer/Haningetk3Footer";
import Haningetk3Visions from "./visions/Haningetk3Visions";
import Haningetk3Desc from "./desc/Haningetk3Desc";
import Haningetk3Desc2 from "./desc2/Haningetk3Desc2";
import Haningetk3Landing from "./landing/Haningetk3Landing";
import AboutHtk3 from "./about/AboutHtk3";

const Haningetk3App = () => {
  return (
    <div className="htk3-app_container">
      <Haningetk3Welcome />
      <Haningetk3Desc />
      <Haningetk3Landing />
      <Haningetk3Desc2 />

      <AboutHtk3 />
      <Haningetk3Visions />
      <Haningetk3Footer />
    </div>
  );
};

export default Haningetk3App;
