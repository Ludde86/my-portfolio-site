import "./footer.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="htk5-footer_container">
      <div className="htk5-footer_container-contact_container">
        <p>Öppettider</p>
        <p>06.30 - 23.30</p>
        <div className="htk5-footer_container-contact_container-linebreak"></div>
        <p>Tegelbruksvägen 24</p>
        <div className="htk5-footer_container-contact_container-linebreak"></div>
        <p>kansliet@tyresotk.se</p>
        <div className="htk5-footer_container-contact_container-linebreak"></div>
        <p>0700000000</p>
      </div>
      <div className="htk5-footer_container-social">
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaFacebookSquare />
        </a>
      </div>
      <p>© Tyresö Tennisklubb 2025</p>
    </div>
  );
};

export default Footer;
