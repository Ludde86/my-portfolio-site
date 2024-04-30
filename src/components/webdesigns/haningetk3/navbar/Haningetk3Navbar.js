import React, { useContext, useState } from "react";
import "./haningetk3Navbar.css";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Htk3Context } from "../Haningetk3App";

const Haningetk3Navbar = () => {
  const htk3 = useContext(Htk3Context);
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
        <a href="#Hem">Tennisskola</a>
        <a href="#Hem">Medlemsskap</a>
        <div
          id="htk3-navbar_container-icon"
          onClick={() => setExpandNavbar(!expandNavbar)}
        >
          {expandNavbar ? <AiOutlineClose /> : <FiAlignJustify />}
        </div>
        <a href="#Hem">Om oss</a>
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
        <a href="#Hem">Vision och värdegrunde</a>
        <a href="#Hem">Träna och spela hos oss</a>
        <a href="#Hem">Kontrakt- och strötider</a>
        <a href="#Hem">Tävlingar</a>
        <a href="#Hem">Gruppspel</a>
        <a href="#Hem">Styrelse</a>
        <a href="#Hem">Klubbens historia</a>
        <a href="#Hem">Kontakt</a>
      </div>
    </div>
  );
};

export default Haningetk3Navbar;
