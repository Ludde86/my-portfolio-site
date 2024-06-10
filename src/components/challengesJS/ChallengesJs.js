import React from "react";
import "./challengesjs.css";
import Js1App from "./js1/Js1App";
import Js2App from "./js2imageslider1/Js2App";
import Js4App from "./js4imageslider3/Js4App";
import Js3App from "./js3testimonialslider/Js3App";

const ChallengesJs = () => {
  return (
    <div className="challenges_js_container">
      <Js1App />
      {/*
      <Js2App />
      */}
      <Js4App />
      <Js3App />
    </div>
  );
};

export default ChallengesJs;
