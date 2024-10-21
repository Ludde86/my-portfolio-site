import React from "react";
import "./bygg2Navbar.css";

import logo from "../../assets/images/bygg-logga.png";

const Bygg2Navbar = () => {
  return (
    <div className="bygg2nav">
      <div className="bygg2nav-img">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <div className="bygg2nav-link">
          <li>Start</li>
          <div className="hover-underline"></div>
        </div>
        <div className="bygg2nav-link">
          <li>Våra tjänster</li>
          <div className="hover-underline"></div>
        </div>
        <div className="bygg2nav-link">
          <li>Boka</li>
          <div className="hover-underline"></div>
        </div>
      </ul>
    </div>
  );
};

export default Bygg2Navbar;
