import React from "react";
import "./haninge3Footer.css";

import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Haningetk3Footer = () => {
  return (
    <div className="htk3-footer_container">
      <div className="htk3-footer_container-contact_container-open">
        <h4>Öppettider</h4>
        <p>06.30 - 23.30</p>
      </div>
      <div className="htk3-footer_container-contact_container">
        <div className="htk3-footer_container-contact_container-contact">
          <h4>Adress</h4>
          <p>Torvallavägen 14 13644 Handen</p>
        </div>

        <div className="htk3-footer_container-contact_container-contact">
          <h4>Epost</h4>
          <p>kansliet@haningetk.se</p>
        </div>

        <div className="htk3-footer_container-contact_container-contact">
          <h4>Telefon</h4>
          <p>0700000000</p>
        </div>
      </div>

      <div className="htk3-footer_container-social">
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
};

export default Haningetk3Footer;
