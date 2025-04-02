import "./cardsPage.css";
import React from "react";

const CardsPage = () => {
  return (
    <div className="htk_cards_container">
      <div className="htk_cards_container-text">
        <h1>Håll dig</h1>
        <h1>uppdaterad</h1>
        <p>
          Vill du veta mer om vår tennisklubb och hur vi arbetar för att främja
          sporten? Kontakta oss direkt för frågor, information om vår verksamhet
          och hur du kan bli en del av vår engagerade klubbgemenskap. Vi ser
          fram emot att höra från dig!
        </p>
      </div>
      <form className="htk_cards_container-form">
        <input placeholder="Epost" type="email" />
        <textarea placeholder="Meddelande" cols="30" rows="5" />
        <button>Skicka</button>
      </form>
    </div>
  );
};

export default CardsPage;
