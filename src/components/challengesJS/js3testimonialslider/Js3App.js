import React, { useEffect, useState } from "react";
import "./js3App.css";
import Js3Slider from "./slider/Js3Slider";
import img1 from "../assets/gekko.jpg";
import img2 from "../assets/waterfall.jpg";
import img3 from "../assets/milkyway.jpg";
import img4 from "../assets/waterfall.jpg";

/*
Project description
In this project, you will learn how to build a testimonial slider using HTML, CSS and JavaScript. We use a timer to change the sliders automatically and also we have added a bountiful animation showing the slides.
*/

const sliderData = [
  {
    color: "#8fbc8f",
    img: img1,
    desc: "Geckoödlor (Gekkonidae) är en familj av ödlor som oftast är nattaktiva, och därför har stora ögon. Det förekommer emellertid så kallade daggeckos, företrädesvis inom släktet Phelsuma. De utmärks också av sin goda klätterförmåga, vilken möjliggörs av deras speciella fötter.",
    author: "Gex",
  },
  {
    color: "#b0e0e6",
    img: img2,
    desc: "Ekodukt är en brokonstruktion avsedd för att vilda djur ska kunna ta sig över hinder som vägar eller järnvägsspår på grund av ökad fragmentering i sitt habitat och lokala ekosystem. Termen är ett sammansatt ord av ekologi och viadukt. En ekodukt är en variant av faunapassage, som även omfattar exempelvis tunnlar för grodor (grodgångar) och liknande.",
    author: "Naturlig bro",
  },
  {
    color: "#00563f",
    img: img3,
    desc: "Skogar är mycket komplexa ekosystem. Tillsammans med oceanerna har de stort inflytande på klimatet på jorden. Skogar tar upp och binder stora mängder koldioxid och produktionen av syre är en viktig förutsättning för djurens existens.",
    author: "Ny början",
  },
  {
    color: "#483d8b",
    img: img4,
    desc: "Vatten är en på jorden allmänt förekommande kemisk förening, bestående av väte och syre, som är nödvändig för allt känt liv. Det vetenskapliga namnet är divätemonoxid eller diväteoxid (se även diväteoxidbluffen). Det latinska namnet aqua används ofta i bland annat innehållsförteckningar till kemiska och kosmetiska produkter.",
    author: "Jordens kretslopp",
  },
];

const Js3App = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  // console.log(sliderIndex);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (sliderIndex >= sliderData.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex(sliderIndex + 1);
      }
    }, 5000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [sliderIndex]);

  return (
    <div className="js3-container">
      <h1>Testimonial Slider</h1>
      {sliderData.map((item, index) => {
        // console.log(index);
        if (index === sliderIndex) {
          return (
            <Js3Slider
              key={index}
              color={item.color}
              img={item.img}
              desc={item.desc}
              author={item.author}
            />
          );
        }
        return true;
      })}
    </div>
  );
};

export default Js3App;
