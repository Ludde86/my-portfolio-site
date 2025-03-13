import React from "react";
import "./navbarNapra3.css";
import logo from "../assets/img/Naprapat.png";

const NavbarNapra3 = () => {
  const links = ["Hem", "Om oss", "Tjänster", "BOKA TID"];

  return (
    <div className="navbarNapra3-container">
      <div className="napra3-logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="napra3-links-container">
        <a className="napra3-links-container-link" href="#Hem">
          <div className="napra3-links-container-link-overline"></div>
          Hem
          <div className="napra3-links-container-link-underline"></div>
        </a>
        <a className="napra3-links-container-link" href="#Om oss">
          <div className="napra3-links-container-link-overline"></div>
          Om oss
          <div className="napra3-links-container-link-underline"></div>
        </a>
        <a className="napra3-links-container-link" href="#Tjänster">
          <div className="napra3-links-container-link-overline"></div>
          Tjänster
          <div className="napra3-links-container-link-underline"></div>
        </a>
        <a
          className="napra3-links-container-link"
          href="https://www.bokadirekt.se/places/naprapat-rehabcenter-haninge-10747"
          target="_blank"
          rel="noreferrer"
        >
          <div className="napra3-links-container-link-overline"></div>
          BOKA TID
          <div className="napra3-links-container-link-underline"></div>
        </a>
      </div>
    </div>
  );
};

export default NavbarNapra3;
