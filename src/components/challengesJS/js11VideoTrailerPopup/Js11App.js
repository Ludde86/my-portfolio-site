import React, { useState } from "react";
import "./js11App.css";
import img1 from "../assets/pexels-chris-f-38966-20798853.jpg";
import Js11Video from "./video/Js11Video";

/*
Our project involves creating a movie trailer pop-up with an image, movie title, and Loren Ipsum text displayed on the page. Clicking on the Watch Now button will open a video pop-up where. Closing the video will reset it to the 15-second mark, but reopening it using the button will reset it to the beginning, at the zero-second mark. We will use JavaScript to create these functionalities and add or remove the pop-up window. The video tag of HTML will create the video player, and CSS will style it.
*/

// Skapa en komponent med en bild, title lorumtext och en knapp
// Knappen ska öppna en pop-up där videon spelas upp
// I pop-upen ska det finnas en knapp som stänger ner videon och pop-upen, videon ska sedan spelas upp från början

const Js11App = () => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <div className="js11_container">
      <img src={img1} alt="img1" />
      <h1>Popup-fönster med video på snötäckt berg</h1>
      <p>
        Ut sit consectetur excepteur fugiat culpa dolor aute excepteur amet
        officia. Ullamco exercitation minim cillum commodo amet deserunt commodo
        ad nisi dolor exercitation do dolor occaecat. Ullamco proident mollit
        cillum consequat proident eiusmod dolore.
      </p>
      <button onClick={() => setVideoActive(true)}>Se video</button>

      {videoActive && <Js11Video setVideoActive={setVideoActive} />}
    </div>
  );
};

export default Js11App;
