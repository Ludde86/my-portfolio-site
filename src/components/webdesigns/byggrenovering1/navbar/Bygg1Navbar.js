import React from "react";
import "./bygg1Navbar.css";

import logo from "../../assets/images/hus-logga.png";

const Bygg1Navbar = () => {
  return (
    <div className="bygg1nav">
      <div className="bygg1nav-img">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <div className="bygg1nav-link">
          <li>Start</li>
          <div className="hover-underline"></div>
        </div>
        <div className="bygg1nav-link">
          <li>Våra tjänster</li>
          <div className="hover-underline"></div>
        </div>
        <div className="bygg1nav-link">
          <li>Boka</li>
          <div className="hover-underline"></div>
        </div>
      </ul>
    </div>
  );
};

export default Bygg1Navbar;
