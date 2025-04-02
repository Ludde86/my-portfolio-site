import "./secbar.css";
import logo from "../../assets/images/thk-logga.png";
import { Link } from "react-router-dom";
import React from "react";

const htk5_secbar = ({ navOpen }) => {
  const links = [
    "Spelschema",
    "Tävling",
    "Kontakta oss",
    "Vision & Värdegrund",
  ];
  return (
    <div className={"htk5_secbar " + (navOpen && "htk5_secbar-openSec")}>
      <div className="htk5_secbar-img_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="htk5_secbar-link_container">
        {links.map((item, index) => (
          <Link key={index}>
            <p>{item}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default htk5_secbar;
