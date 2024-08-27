import React, { createContext, useState } from "react";
import "./haningetk3App.css";
import Haningetk3Welcome from "./welcome/Haningetk3Welcome";
import Haningetk3Landing from "./landing/Haningetk3Landing";
import Haningetk3Footer from "./footer/Haningetk3Footer";
import Haningetk3Tennisskola from "./tennisskola/Haningetk3Tennisskola";
import Haningetk3Navbar from "./navbar/Haningetk3Navbar";
import Haningetk3Visions from "./visions/Haningetk3Visions";
import Haningetk3Desc from "./desc/Haningetk3Desc";
import Haningetk3Desc2 from "./desc2/Haningetk3Desc2";

export const Htk3Context = createContext();

const Haningetk3App = () => {
  const [link, setLink] = useState("Hem");

  console.log("link: ", link);

  return (
    <div className="htk3-app_container">
      <div className="htk3-app_container-start_container">
        <Htk3Context.Provider value={{ link, setLink }}>
          <Haningetk3Welcome />
          <Haningetk3Desc />
          {link === "Hem" && <Haningetk3Landing />}
          {link === "Tennisskola" && <Haningetk3Tennisskola />}
          <Haningetk3Desc2 />
        </Htk3Context.Provider>
      </div>
      <Haningetk3Visions />
      <Haningetk3Footer />
    </div>
  );
};

export default Haningetk3App;
