import React from "react";
import "./footerNapra4.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const FooterNapra4 = () => {
  return (
    <div className="napra4_footer">
      <div className="napra4_footer-content">
        <div className="napra4_footer-content-phone">
          <div>
            <h5>Telefon</h5>
            <h6>08-599 00 459</h6>
          </div>
          <div>
            <h5>Susanne</h5>
            <h6>0704530288</h6>
          </div>
          <div>
            <h5>Sofie</h5>
            <h6>0702443473</h6>
          </div>
          <div>
            <h5>Line</h5>
            <h6>0704540923</h6>
          </div>
        </div>
        <div className="napra4_footer-content-address">
          <h5>Adress</h5>
          <h6>Naprapat & Rehabcenter Haninge AB</h6>
          <h6>Hantverkarvägen 23C</h6>
          <h6>136 44 Handen</h6>

          <div className="napra4_footer-content-address-social">
            <div>
              <FaFacebook size={30} />
            </div>
            <div>
              <BsInstagram size={30} />
            </div>
          </div>
        </div>
        <div className="napra4_footer-content-mail">
          <h5>E-Post</h5>
          <h6>info@naprapatrehab.com</h6>

          <h6>susanne@naprapatrehab.com</h6>
          <h6>sofie@naprapatrehab.com</h6>
          <h6>line@naprapatrehab.com</h6>
        </div>
      </div>
      <div className="napra4_footer-copy">
        <p>
          GDPR ersätter den svenska personuppgiftslagen (PuL). Information om
          hur vi samlar in och behandlar dina uppgifter hittar du i vår
          Integritetspolicy.
        </p>
      </div>
    </div>
  );
};

export default FooterNapra4;
