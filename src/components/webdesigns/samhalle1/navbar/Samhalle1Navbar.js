import React from "react";
import "./samhalle1Navbar.css";
import logo from "../../assets/images/samhalle-logo-no-bg.png";
import { AlignJustify } from "lucide-react";

const Samhalle1Navbar = () => {
  return (
    <div className="samhalle1-navbar">
      <img src={logo} alt="logo" />
      <ul className="samhalle1-navbar-links">
        <li>Hem</li>
        <li>Aktuellt</li>
        <li>Upptäck</li>
        <li id="samhalle1-navbar-links-button">Kontakt</li>
      </ul>
      <AlignJustify id="samhalle1-navbar-links-menu" />
    </div>
  );
};

export default Samhalle1Navbar;
