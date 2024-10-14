import React from "react";
import "./bygg1Footer.css";

const Bygg1Footer = () => {
  return (
    <div className="bygg1footer">
      <div className="bygg1footer-contact">
        <form className="bygg1footer-contact-form">
          <h1 id="bygg1footer-contact-form-header">Kontakta oss</h1>
          <label>Namn</label>
          <input type="text" placeholder="Namn" />
          <label>E-post</label>
          <input type="email" placeholder="E-post" />
          <label>Meddelande</label>
          <textarea placeholder="Meddelande" rows="10" />

          <button>Skicka</button>
        </form>
      </div>

      <div className="bygg1footer-social">
        <div className="bygg1footer-social-content">
          <div className="bygg1footer-social-content-item">
            <h1>Adress</h1>
            <p>ProVakt Säkerhet AB</p>
            <p>Storgatan 12</p>
            <p>111 22 Stockholm</p>
          </div>
          <div className="bygg1footer-social-content-item">
            <h1>Telefon</h1>
            <p>08-123 456 78</p>
          </div>
          <div className="bygg1footer-social-content-item">
            <h1>E-post</h1>
            <p>kontakt@provakt.se</p>
          </div>
        </div>
      </div>
      <p id="bygg1footer-social-copy"> &#169; ProVakt Säkerhet 2024</p>
    </div>
  );
};

export default Bygg1Footer;
