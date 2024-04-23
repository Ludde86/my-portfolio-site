import React from "react";
import "./haningetk3Navbar.css";
import { FiAlignJustify } from "react-icons/fi";

const Haningetk3Navbar = () => {
  return (
    <div className="htk3-navbar_container">
      <a href="/">Tennisskola</a>
      <a href="/">Medlemsskap</a>
      <a id="htk3-navbar_container-icon" href="/">
        <FiAlignJustify />
      </a>
      <a href="/">Om oss</a>
      <a id="htk3-navbar_container-blue" href="/">
        Boka bana
      </a>
    </div>
  );
};

export default Haningetk3Navbar;
