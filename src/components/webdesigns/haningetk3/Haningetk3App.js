import React from "react";
import "./haningetk3App.css";
import Haningetk3Welcome from "./welcome/Haningetk3Welcome";
import Haningetk3Landing from "./landing/Haningetk3Landing";
import Haningetk3Footer from "./footer/Haningetk3Footer";

const Haningetk3App = () => {
  return (
    <div className="htk3-app_container">
      <div className="htk3-app_container-start_container">
        <Haningetk3Welcome />
        <Haningetk3Landing />
      </div>
      <Haningetk3Footer />
    </div>
  );
};

export default Haningetk3App;
