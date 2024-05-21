import React from "react";
import "./navbarNap4.css";

const NavbarNap4 = () => {
  return (
    <div className="napra4_navbar">
      <div className="napra4_navbar-logo">LOGGA</div>
      <div className="napra4_navbar-links">
        <div className="napra4_navbar-links-link">
          <a>Tjänster</a>
          <div className="napra4_navbar-links-link-underline" />
        </div>

        <div className="napra4_navbar-links-link">
          <a>Om Oss</a>
          <div className="napra4_navbar-links-link-underline" />
        </div>

        <div className="napra4_navbar-links-link">
          <a>Förretag</a>
          <div className="napra4_navbar-links-link-underline" />
        </div>

        <div className="napra4_navbar-links-link">
          <a>BOKA TID</a>
          <div className="napra4_navbar-links-link-underline" />
        </div>
      </div>
    </div>
  );
};

export default NavbarNap4;
