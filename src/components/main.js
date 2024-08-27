import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./landingpage";
import Resume from "./resume";
import Projects from "./projects";
import Dictionary from "./dictionary/dictionary";
import Haningehtk3App from "./webdesigns/haningetk3/Haningetk3App";
import Haningehtk3Tennisskola from "./webdesigns/haningetk3/tennisskola/Haningetk3Tennisskola";
import Haningehtk3Tavling from "./webdesigns/haningetk3/tavling/Haningetk3Tavling";

const Main = () => (
  <Routes>
    <Route exact path="/" Component={Landing} />
    <Route path="/resume" Component={Resume} />
    <Route path="/projects" Component={Projects} />
    <Route path="/dictionary" Component={Dictionary} />

    <Route path="/projects/htk3" Component={Haningehtk3App} />
    <Route
      path="/projects/htk3/tennisskola"
      Component={Haningehtk3Tennisskola}
    />
    <Route path="/projects/htk3/tavling" Component={Haningehtk3Tavling} />
  </Routes>
);

export default Main;
