import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Landing from "./landingpage";
import Resume from "./resume";
import Projects from "./projects";
import Dictionary from "./dictionary/dictionary";

const Main = () => (
  <Routes>
    <Route exact path="/" Component={Landing} />
    <Route path="/resume" Component={Resume} />
    <Route path="/projects" Component={Projects} />
    <Route path="/dictionary" Component={Dictionary} />
  </Routes>
);

export default Main;
