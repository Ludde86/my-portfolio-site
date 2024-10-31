import React from "react";
import "./samhalle4Section.css";
import logo from "../../assets/images/samhalle-logo-no-bg.png";

const Samhalle4Section = () => {
  return (
    <div className="samhalle4Section">
      <img src={logo} alt="logo" />
      <p>
        Har du frågor om Skogsvik eller vill veta mer om vad vår kommun kan
        erbjuda? Vår vänliga personal finns här för att hjälpa dig med allt från
        boendefrågor till fritidsaktiviteter. Vi ser fram emot att höra från
        dig!
      </p>

      <button>Kontakta oss</button>
    </div>
  );
};

export default Samhalle4Section;
