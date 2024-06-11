import React from "react";
import "./challengesjs.css";
import Js1App from "./js1/Js1App";
import Js2App from "./js2imageslider1/Js2App";
import Js4App from "./js4imageslider3/Js4App";
import Js3App from "./js3testimonialslider/Js3App";
import Js4App2 from "./js4tipcalculator/Js4App2";

const ChallengesJs = () => {
  return (
    <div className="challenges_js_container">
      <Js4App2 />
      {/*
      <Js2App />
      */}
      <Js3App />
      <Js4App />
      <Js1App />
    </div>
  );
};

export default ChallengesJs;
