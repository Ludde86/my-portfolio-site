import React from "react";
import "./haningetk4Navbar.css";
import logo from "../assets/htk-logga.png";

const Haningetk4Navbar = () => {
  return (
    <div className="htk4_navbar">
      <a>
        <img src={logo} alt="logo" />
      </a>
      <a>Tennisskola</a>
      <a>Medlemsskap</a>
      <a>Om oss</a>
      <a>Boka bana</a>
    </div>
  );
};

export default Haningetk4Navbar;
