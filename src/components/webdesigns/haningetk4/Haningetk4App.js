import React from "react";
import "./haningetk4App.css";
import Haningetk4Landing from "./landing/Haningetk4Landing";
import Haningetk4Navbar from "./navbar/Haningetk4Navbar";
import Haningetk4Main from "./content/Haningetk4Main";
import Haningetk4Footer from "./footer/Haningtk4Footer";

const Haningetk4App = () => {
  return (
    <div className="haninge4_container">
      <Haningetk4Navbar />
      <Haningetk4Landing />
      <Haningetk4Main />
      <Haningetk4Footer />
    </div>
  );
};

export default Haningetk4App;
