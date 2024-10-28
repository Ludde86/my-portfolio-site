import React from "react";
import "./samhalle1Navbar.css";
import logo from "../../assets/images/samhalle-logo.png";

const Samhalle1Navbar = () => {
  return (
    <div className="samhalle1-navbar">
      <img src={logo} alt="logo" />
      <ul className="samhalle1-navbar-links">
        <li>Hem</li>
        <li>Upplev</li>
        <li>Jobb</li>
      </ul>
    </div>
  );
};

export default Samhalle1Navbar;
