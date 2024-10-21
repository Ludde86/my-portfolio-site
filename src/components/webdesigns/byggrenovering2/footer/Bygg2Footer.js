import React from "react";
import "./bygg2Footer.css";

const Bygg2Footer = () => {
  return (
    <div className="bygg2footer">
      <div className="bygg2footer-contact">
        <form className="bygg2footer-contact-form">
          <h1 id="bygg2footer-contact-form-header">Kontakta oss</h1>
          <label>Namn</label>
          <input type="text" placeholder="Namn" />
          <label>E-post</label>
          <input type="email" placeholder="E-post" />
          <label>Meddelande</label>
          <textarea placeholder="Meddelande" rows="10" />

          <button>Skicka</button>
        </form>
      </div>

      <div className="bygg2footer-social">
        <div className="bygg2footer-social-content">
          <div className="bygg2footer-social-content-item">
            <h1>Adress</h1>
            <p>Bygg och vision AB</p>
            <p>Storgatan 12</p>
            <p>111 22 Stockholm</p>
          </div>
          <div className="bygg2footer-social-content-item">
            <h1>Telefon</h1>
            <p>08-123 456 78</p>
          </div>
          <div className="bygg2footer-social-content-item">
            <h1>E-post</h1>
            <p>kontakt@byggvision.se</p>
          </div>
        </div>
      </div>
      <p id="bygg2footer-social-copy"> &#169; Bygg & Vision 2024</p>
    </div>
  );
};

export default Bygg2Footer;
