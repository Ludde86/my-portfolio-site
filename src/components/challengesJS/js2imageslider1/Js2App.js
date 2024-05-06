import React from "react";
import "./js2App.css";

import img1 from "./img/round-drop.jpg";
import img2 from "./img/bridge.jpg";
import img3 from "./img/green-gekko.jpg";
import img4 from "./img/nature-beginning.jpg";

const js2App = () => {
  return (
    <div className="js2_app_container">
      <h3 style={{ color: "#ddd" }}>#2 - Image slider #1</h3>
      <ul>
        <li>
          <img src={img1} alt="img1" />
          <div className="js2_app_container-content">
            <span>
              <h2>Bild1</h2>
              <p>Text1</p>
            </span>
          </div>
        </li>

        <li>
          <img src={img2} alt="img2" />
          <div className="js2_app_container-content">
            <span>
              <h2>Bild2</h2>
              <p>Text2</p>
            </span>
          </div>
        </li>

        <li>
          <img src={img3} alt="img3" />
          <div className="js2_app_container-content">
            <span>
              <h2>Bild3</h2>
              <p>Text3</p>
            </span>
          </div>
        </li>

        <li>
          <img src={img4} alt="img4" />
          <div className="js2_app_container-content">
            <span>
              <h2>Bild4</h2>
              <p>Text4</p>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default js2App;
