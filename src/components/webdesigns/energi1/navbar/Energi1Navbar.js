import React, { useState } from "react";
import "./energi1Navbar.css";

import logo from "../../assets/images/energi-logga.png";
import { Zap } from "lucide-react";

const Energi1Navbar = () => {
  const [isActive, setsActive] = useState("Start");

  return (
    <div className="energi1nav">
      <div className="energi1nav-img">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <div className="energi1nav-link">
          <li onClick={() => setsActive("Start")}>Start</li>
          <Zap
            className={
              isActive === "Start"
                ? "energi1nav-link-icon-active"
                : "energi1nav-link-icon"
            }
          />
        </div>
        <div className="energi1nav-link">
          <li onClick={() => setsActive("Våra produkter")}>Våra produkter</li>

          <Zap
            className={
              isActive === "Våra produkter"
                ? "energi1nav-link-icon-active"
                : "energi1nav-link-icon"
            }
          />
        </div>
        <div className="energi1nav-link">
          <li onClick={() => setsActive("Våra tjänster")}>Våra tjänster</li>

          <Zap
            className={
              isActive === "Våra tjänster"
                ? "energi1nav-link-icon-active"
                : "energi1nav-link-icon"
            }
          />
        </div>
      </ul>
    </div>
  );
};

export default Energi1Navbar;
