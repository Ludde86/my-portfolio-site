import React from "react";
import "./haningetk3App.css";
import Haningetk3Welcome from "./welcome/Haningetk3Welcome";
import Haningetk3Landing from "./landing/Haningetk3Landing";

const Haningetk3App = () => {
  return (
    <div className="htk3-app_container">
      <div className="htk3-app_container-start_container">
        <Haningetk3Welcome />
        <Haningetk3Landing />
      </div>
    </div>
  );
};

export default Haningetk3App;
