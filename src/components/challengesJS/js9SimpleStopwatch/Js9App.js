import React, { useEffect, useRef, useState } from "react";
import "./js9App.css";

/*
We will create a timer displayed at the top, along with three buttons - start, stop, and reset. Clicking the START button will begin the timer. The STOP button will pause the timer using a JavaScript method called SetInterval, which can be cleared using clearInterval. The RESET button will reset the timer to zero. If you click STOP and then START again, the timer will continue from the previously elapsed time. We'll start by installing CSS for the buttons' design and hover effects, then use JavaScript to get the browser time, manipulate the content, replace it with the calculated time, and provide the start, stop, and reset functionality.
*/

// 3st knappar som startar, pusar och resetar timern

const Js9App = () => {
  // states till h:m:s:ms
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisec, setMilisec] = useState(0);

  const timer = useRef();

  useEffect(() => {
    if (milisec === 99) {
      setMilisec(0);
      setSecond((second) => second + 1);
    }

    if (second === 99) {
      setSecond(0);
      setMinute((minute) => minute + 1);
    }

    if (minute === 99) {
      setMinute(0);
      setHour((hour) => hour + 1);
    }

    if (hour === 99) {
      clearInterval(timer.current);
      setHour(99);
      setMinute(99);
      setSecond(99);
      setMilisec(99);
    }
  }, [milisec]);

  const startTimer = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setMilisec((milisec) => milisec + 1);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  const resetTimer = () => {
    clearInterval(timer.current);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMilisec(0);
  };

  const showMilisec = () => {
    switch (milisec) {
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
        break;
    }
  };
  const showSec = () => {
    switch (second) {
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
        break;
    }
  };
  const showMin = () => {
    switch (minute) {
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
        break;
    }
  };
  const showHour = () => {
    switch (hour) {
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
        break;
    }
  };

  return (
    <div className="js9_container">
      <h1>Enkelt stoppur</h1>
      <div className="js9_container-timer_container">
        <div className="js9_container-timer_container-clock">
          <p>{hour < 10 ? showHour() : hour}</p>
          <p>:</p>
          <p>{minute < 10 ? showMin() : minute}</p>
          <p>:</p>
          <p>{second < 10 ? showSec() : second}</p>
          <p>.</p>
          <p>{milisec < 10 ? showMilisec() : milisec}</p>
        </div>
        <div className="js9_container-timer_container-buttons">
          <button
            id="js9_container-timer_container-buttons-start"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            id="js9_container-timer_container-buttons-stop"
            onClick={stopTimer}
          >
            Stop
          </button>
          <button
            id="js9_container-timer_container-buttons-reset"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Js9App;
