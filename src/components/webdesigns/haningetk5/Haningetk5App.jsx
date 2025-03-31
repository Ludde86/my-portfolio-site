import "./haningetk5App.css";
import React from "react";
import BackgroundLogo from "./components/background/BackgroundLogo";
import CardsPage from "./pages/card/CardsPage";
import DescPage from "./pages/desc/DescPage";
import Desc2Page from "./pages/desc2/Desc2Page";
import Footer from "./pages/footer/Footer";
import HeroPage from "./pages/hero/HeroPage";
import LandingPage from "./pages/landing/LandingPage";
import { Home } from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Tennisskolan from "./routes/tennisskolan/Tennisskolan";
import Tavling from "./routes/tavling/Tavling";

function Haningetk5App() {
  return (
    <>
      <Navbar />

      <HeroPage />
      <DescPage />
      <LandingPage />
      <Desc2Page />
      <CardsPage />
      <Footer />
      {/*
    <input
        style={{ position: "fixed", bottom: "2rem", left: "2rem" }}
        type="color"
      />
     */}
      <Link to={"/tavling"}>
        <Home
          size={40}
          style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
        />
      </Link>
      <Routes>
        <Route exact path="/projects" to={Haningetk5App} />
        <Route path="tennisskolan" to={Tennisskolan} />
        <Route path="tavling" to={Tavling} />
      </Routes>
    </>
  );
}

export default Haningetk5App;
