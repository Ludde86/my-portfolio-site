import React from "react";
import "./challengesjs.css";
import Js1App from "./js1/Js1App";
import Js2App from "./js2imageslider1/Js2App";
import Js3App from "./js3imageslider2/Js3App";
import Js4App from "./js4imageslider3/Js4App";

const ChallengesJs = () => {
  return (
    <div className="challenges_js_container">
      <Js1App />
      {/*
      <Js2App />
      <Js3App />
       */}
      <Js4App />
    </div>
  );
};

export default ChallengesJs;
