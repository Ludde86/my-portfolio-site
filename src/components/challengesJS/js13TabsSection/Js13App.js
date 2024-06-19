import React, { useState } from "react";
import "./js13App.css";

import img1 from "../assets/monkey.jpg";
import img2 from "../assets/dog.jpg";
import img3 from "../assets/cat.jpg";

/*
Our project involves creating a tab section that includes numerous tabs, each with a title and corresponding text. When you click on a tab, the title will be changed accordingly. We will also add an elegant hovering effect to each tab, and when a user selects a tab, its background color will change. To implement this, we will use JavaScript to dynamically update the content. We will style the tabs and create the hovering effect using CSS and the :hover pseudo-class to apply different styles when the user hovers over each tab.
*/

// Skapa en container med 3 olika tabbar
// Varje tabb ska ha en egen färg, bild, titel och beskrivning
// Lägg till en hover effekt på tabbarna

const Js13App = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);

  const handleSetTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
  };
  const handleSetTab2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
  };
  const handleSetTab3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
  };

  return (
    <div className="js13_app">
      <div className="js13_app-image_container">
        {tab1 && <img src={img1} alt="img1" />}
        {tab2 && <img src={img2} alt="img2" />}
        {tab3 && <img src={img3} alt="img3" />}
      </div>

      <div className="js13_app-tabs_container">
        <div className="js13_app-tabs_container-tabbar">
          <button
            style={{ background: tab1 ? "#8c9e5e" : "#bcb88a" }}
            onClick={handleSetTab1}
          >
            Tab 1
          </button>
          <button
            style={{ background: tab2 ? "#8c9e5e" : "#bcb88a" }}
            onClick={handleSetTab2}
          >
            Tab 2
          </button>
          <button
            style={{ background: tab3 ? "#8c9e5e" : "#bcb88a" }}
            onClick={handleSetTab3}
          >
            Tab 3
          </button>
        </div>
        <div className="js13_app-tabs_container-tab">
          {tab1 && <h1>Tab 1</h1>}
          {tab2 && <h1>Tab 2</h1>}
          {tab3 && <h1>Tab 3</h1>}

          {tab1 && (
            <p>
              Culpa aliquip reprehenderit veniam ullamco. Eu sunt anim duis
              ullamco nulla magna occaecat laborum. Laboris aute fugiat aliqua
              dolore mollit occaecat proident enim deserunt labore ipsum.
              Laboris id enim dolor magna sit consequat nulla esse enim et qui
              occaecat. Mollit Lorem consectetur proident et irure magna duis et
              cillum. Cillum ex dolore ullamco officia eu eiusmod aute officia
              sunt culpa occaecat culpa sint. Ad nulla enim pariatur ea ea
              labore non amet. Nisi id consequat nulla eiusmod Lorem officia
              deserunt et eiusmod. Eu occaecat aliqua consequat tempor ipsum
              labore sit id deserunt. Nostrud irure sint est irure Lorem do
              reprehenderit aute nisi non mollit.
            </p>
          )}
          {tab2 && (
            <p>
              Incididunt do ullamco irure tempor deserunt id officia ipsum.
              Lorem occaecat mollit ullamco deserunt veniam. Minim magna officia
              qui proident magna excepteur nulla enim qui minim. Est consequat
              ea velit adipisicing exercitation fugiat id aliquip reprehenderit
              pariatur pariatur id ex qui. Aliqua consectetur est commodo tempor
              dolore aliquip aliqua ut eiusmod. Proident cupidatat ipsum sunt
              irure magna. Enim exercitation nostrud sunt adipisicing cillum eu
              fugiat. Excepteur dolor quis ipsum proident incididunt pariatur
              exercitation officia proident laborum.
            </p>
          )}
          {tab3 && (
            <p>
              Deserunt ea veniam eiusmod eu id aliquip eiusmod ut sit. Deserunt
              anim velit commodo nulla irure veniam cillum. Minim elit labore
              Lorem qui ut culpa enim aute sit. Labore duis veniam duis ipsum
              ex. Eiusmod duis anim et veniam proident mollit Lorem. Elit
              ullamco enim et et incididunt ex eiusmod deserunt do aliquip ipsum
              veniam aliqua sint. Excepteur eu enim in sint fugiat id consequat
              id nulla ex id irure ut.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Js13App;
