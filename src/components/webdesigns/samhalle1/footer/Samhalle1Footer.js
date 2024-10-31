import React from "react";
import "./samhalle1Footer.css";

const Samhalle1Footer = () => {
  return (
    <div className="samhalle1footer">
      <div className="samhalle1footer-social-content">
        <div className="samhalle1footer-social-content-item">
          <h1>Adress</h1>
          <p>Skogsvik Kommun AB</p>
          <p>Storgatan 12</p>
          <p>111 22 Stockholm</p>
        </div>
        <div className="samhalle1footer-social-content-item">
          <h1>Telefon</h1>
          <p>08-123 456 78</p>
        </div>
        <div className="samhalle1footer-social-content-item">
          <h1>E-post</h1>
          <p>kontakt@skogsvikkommun.se</p>
        </div>
      </div>
      <p id="samhalle1footer-social-copy"> &#169; Skogsvik Kommun 2024</p>
    </div>
  );
};

export default Samhalle1Footer;
