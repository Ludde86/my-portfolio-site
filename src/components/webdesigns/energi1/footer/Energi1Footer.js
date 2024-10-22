import React from "react";
import "./energi1Footer.css";

const Energi1Footer = () => {
  return (
    <div className="energi1Footer">
      <div className="energi1Footer-contact">
        <form className="energi1Footer-contact-form">
          <h1 id="energi1Footer-contact-form-header">Kontakta oss</h1>
          <label>Namn</label>
          <input type="text" placeholder="Namn" />
          <label>E-post</label>
          <input type="email" placeholder="E-post" />
          <label>Meddelande</label>
          <textarea placeholder="Meddelande" rows="10" />

          <button>Skicka</button>
        </form>
      </div>

      <div className="energi1Footer-social">
        <div className="energi1Footer-social-content">
          <div className="energi1Footer-social-content-item">
            <h1>Adress</h1>
            <p>EcoPower Nordic AB</p>
            <p>Storgatan 12</p>
            <p>111 22 Stockholm</p>
          </div>
          <div className="energi1Footer-social-content-item">
            <h1>Telefon</h1>
            <p>08-123 456 78</p>
          </div>
          <div className="energi1Footer-social-content-item">
            <h1>E-post</h1>
            <p>kontakt@ecopowernordic.se</p>
          </div>
        </div>
      </div>
      <p id="energi1Footer-social-copy"> &#169; EcoPower Nordic 2024</p>
    </div>
  );
};

export default Energi1Footer;
