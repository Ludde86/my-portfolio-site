import React, { useState } from "react";
import "./haningetk3Navbar.css";
import logo from "../assets/img/logga-medium_nobg.png";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

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
        <a href="/projects/htk3/tennisskola">Tennisskola</a>
        <a href="/projects/htk3/tavling">Medlemskap</a>
        <div
          id="htk3-navbar_container-icon"
          onClick={() => setExpandNavbar(!expandNavbar)}
        >
          {expandNavbar ? <AiOutlineClose /> : <FiAlignJustify />}
        </div>
        <a
          href="https://www.matchi.se/forms/Jt3uUWLmTZWytQ0IJe0r"
          target="_blank"
          rel="noreferrer"
        >
          Om oss
        </a>
        <a
          id="htk3-navbar_container-blue"
          href="https://www.matchi.se/facilities/haningetk"
          target="_blank"
          rel="noreferrer"
        >
          Boka bana
        </a>
      </div>

      <div
        className="htk3-navbar_container-sub"
        style={{ visibility: expandNavbar && "visible" }}
      >
        <a href="/projects/htk3">
          <img id="htk3-nav-logo" src={logo} alt="logo" />
        </a>
        <a href="#Hem">Vision och värdegrund</a>
        <a href="#Hem">Spela och träna</a>
        <a href="/projects/htk3/tavling">Tävla</a>
        <a href="#Hem">Kontakt</a>
        <a href="#Hem">Klubbens historia</a>
      </div>
    </div>
  );
};

export default Haningetk3Navbar;
