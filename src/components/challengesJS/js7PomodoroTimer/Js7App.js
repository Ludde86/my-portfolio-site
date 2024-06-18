import React, { useEffect, useRef, useState } from "react";
import "./js7App.css";

/*
The objective of this project is to design a Pomodoro timer that features a countdown clock and three functional buttons, namely start, stop, and reset. Upon clicking the start button, the timer will commence counting down from 25 minutes. Should one desire to halt the countdown, the stop button can be pressed. The countdown can be resumed by hitting the start button, and by clicking on the reset button, the timer will reset to 25 mins again. An alert will notify the user when the timer reaches zero. This Pomodoro timer is an ideal tool for individuals seeking to focus on a task for a set amount of time, followed by a break. By implementing this technique, productivity and time management skills can be improved. To create this timer, one must initially grasp the principles of CSS for styling purposes. Next, event listeners will be added to the buttons using JavaScript. Finally, a timer will be established using the SetInterval function in JavaScript.
*/

// Starta en timer på 25min

// En knapp för att nollställa timern

const Js7App = () => {
  const [min, setMin] = useState(25);
  const [sec, setSec] = useState("00");

  const interval = useRef();

  useEffect(() => {
    if (sec === 0) {
      setSec(59);
      setMin((min) => min - 1);
    }

    if (min < 0) {
      resetTimer();
      alert("DAGS FÖR EN 5MIN PAUS");
    }
  }, [sec]);

  // En knapp för att starta timern
  const startTimer = () => {
    if (interval.current) {
      return;
    }

    if (sec === "00") {
      setSec(0);
    }

    interval.current = setInterval(() => {
      setSec((sec) => sec - 1);
    }, 10);
  };

  // En knapp för att pausa timern
  const stopTimer = () => {
    clearInterval(interval.current);
    interval.current = false;
  };

  const resetTimer = () => {
    clearInterval(interval.current);
    setMin(25);
    setSec("00");
    interval.current = false;
  };

  const showMin = () => {
    switch (min) {
      case 0:
        return "00";
      case 1:
        return "01";
      case 2:
        return "02";
      case 3:
        return "03";
      case 4:
        return "04";
      case 5:
        return "05";
      case 6:
        return "06";
      case 7:
        return "07";
      case 8:
        return "08";
      case 9:
        return "09";
      default:
        return min;
    }
  };

  const showSec = () => {
    switch (sec) {
      case 0:
        return "00";
      case 1:
        return "01";
      case 2:
        return "02";
      case 3:
        return "03";
      case 4:
        return "04";
      case 5:
        return "05";
      case 6:
        return "06";
      case 7:
        return "07";
      case 8:
        return "08";
      case 9:
        return "09";
      default:
        return sec;
    }
  };

  return (
    <div className="js7_container">
      <h1>Pomodorotekniken</h1>
      <div className="js7_container-timer_container">
        <div className="js7_container-timer_container-clock_container">
          <p>{showMin()}</p>
          <p>:</p>
          <p>{showSec()}</p>
        </div>

        <div className="js7_container-timer_container-buttons_container">
          <button id="button-start" onClick={startTimer}>
            Start
          </button>
          <button id="button-stop" onClick={stopTimer}>
            Stop
          </button>
          <button id="button-reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Js7App;
