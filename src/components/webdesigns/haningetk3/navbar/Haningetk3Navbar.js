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
        <a href="/projects/htk3/tavling">Tävling</a>
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
          Medlemskap
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
        <a href="#Hem">Vision och värdegrunde</a>
        <a href="#Hem">Träna och spela hos oss</a>
        <a href="#Hem">Kontrakt- och strötider</a>
        <a href="#Hem">Om oss</a>
        <a href="#Hem">Gruppspel</a>
        <a href="#Hem">Styrelse</a>
        <a href="#Hem">Klubbens historia</a>
        <a href="#Hem">Kontakt</a>
      </div>
    </div>
  );
};

export default Haningetk3Navbar;
