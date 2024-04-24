import React, { useState } from "react";
import "./haningetk3Navbar.css";
import { FiAlignJustify } from "react-icons/fi";

const Haningetk3Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div
      className="htk3-navbar_container"
      style={{
        minHeight: expandNavbar && "80vh",
        background: expandNavbar && "#000000a8",
      }}
    >
      <div className="htk3-navbar_container-main">
        <a href="/">Tennisskola</a>
        <a href="/">Medlemsskap</a>
        <div
          id="htk3-navbar_container-icon"
          onClick={() => setExpandNavbar(!expandNavbar)}
        >
          <FiAlignJustify />
        </div>
        <a href="/">Om oss</a>
        <a id="htk3-navbar_container-blue" href="/">
          Boka bana
        </a>
      </div>

      <div
        className="htk3-navbar_container-sub"
        style={{ visibility: expandNavbar && "visible" }}
      >
        <a href="/">Vision och värdegrunde</a>
        <a href="/">Träna och spela hos oss</a>
        <a href="/">Kontrakt- och strötider</a>
        <a href="/">Tävlingar</a>
        <a href="/">Gruppspel</a>
        <a href="/">Styrelse</a>
        <a href="/">Klubbens historia</a>
        <a href="/">Kontakt</a>
      </div>
    </div>
  );
};

export default Haningetk3Navbar;
