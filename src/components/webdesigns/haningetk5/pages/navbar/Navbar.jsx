import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import logo from "../../assets/images/thk-logga.png";
import Secbar from "../secbar/Secbar";
import React from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="htk5-navbar_container">
      <Link className="htk5-navbar_container-link" to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <Link className="htk5-navbar_container-link" to={"tennisskolan"}>
        Spelschema
      </Link>
      <Link className="htk5-navbar_container-link" to={"tavling"}>
        Tävling
      </Link>

      <a
        className="htk5-navbar_container-link"
        target="_blank"
        rel="noopener noreferrer"
        href=""
      >
        Boka bana
      </a>

      <Link
        className="htk5-navbar_container-link htk5-navbar_container-link-button"
        to={"/"}
      >
        Medlemsskap
      </Link>

      {!navOpen ? (
        <Menu
          onClick={() => setNavOpen(true)}
          className="htk5-menu-btn"
          size={40}
        />
      ) : (
        <>
          <X
            onClick={() => setNavOpen(false)}
            className="htk5-menu-btn"
            size={40}
            color="#fff"
          />
        </>
      )}
      <Secbar navOpen={navOpen} />
    </div>
  );
};

export default Navbar;
