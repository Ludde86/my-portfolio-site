import React from "react";
import "./challengesjs.css";
import Js1App from "./js1/Js1App";
import Js4App from "./js4imageslider3/Js4App";
import Js3App from "./js3testimonialslider/Js3App";
import Js4App2 from "./js4tipcalculator/Js4App2";
import Js5App from "./js5agecalculator/Js5App";
import Js6App from "./js6dicerollsimulator/Js6App";
import Js7App from "./js7PomodoroTimer/Js7App";
import Js8App from "./js8RockPaperScissorsGame/Js8App";
import Js9App from "./js9SimpleStopwatch/Js9App";
import Js10App from "./js10WeightConverter/Js10App";
import Js11App from "./js11VideoTrailerPopup/Js11App";
import Js12App from "./js12TemperatureConverter/Js12App";
import Js13App from "./js13TabsSection/Js13App";

const ChallengesJs = () => {
  return (
    <div className="challenges_js_container">
      <Js13App />
      <Js12App />
      <Js11App />
      <Js10App />
      <Js9App />
      <Js8App />
      <Js7App />
      <Js6App />
      <Js5App />
      <Js4App2 />
      <Js3App />
      <Js4App />
      <Js1App />
    </div>
  );
};

export default ChallengesJs;
