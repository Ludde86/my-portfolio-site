import "./secbar.css";
import logo from "../../assets/images/thk-logga.png";
import { Link } from "react-router-dom";
import React from "react";

const Secbar = ({ navOpen }) => {
  const links = [
    "Spelschema",
    "Tävling",
    "Kontakta oss",
    "Vision & Värdegrund",
  ];
  return (
    <div className={"secbar " + (navOpen && "secbar-openSec")}>
      <div className="secbar-img_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="secbar-link_container">
        {links.map((item, index) => (
          <Link key={index}>
            <p>{item}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Secbar;
