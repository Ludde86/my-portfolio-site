import React, { useState } from "react";
import "./projects.css";
import Challenge1 from "./challengesCSS/challenge1/Challenge1";
import Webdesign1 from "./webdesigns/webdesign1/webdesign1";
import Naprapatrehab from "./webdesigns/naprapatrehab/Naprapatrehab";
import Htproject from "./webdesigns/htproject/Htproject";
import NaprapatRehab2 from "./webdesigns/naprapatrehab2/NaprapatRehab2";
import Napra3 from "./webdesigns/napra3/Napra3";
import Haningetk1 from "./webdesigns/haningetk1/Haningetk1";
import Haningetk2 from "./webdesigns/haningetk2/Haningetk2";
import ChallengesJs from "./challengesJS/ChallengesJs";
import Haningetk3App from "./webdesigns/haningetk3/Haningetk3App";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(3);

  const links = [
    "Haningetk3",
    "Haningetk1",
    "Haningetk2",
    "Napra3",
    "Napra2",
    "Napra1",
    "HTProject",
    "React",
    "CSS",
    "JS",
  ];

  const toggleCategories = () => {
    switch (activeTab) {
      case 0:
        return <Haningetk3App />;
      case 1:
        return <Haningetk1 />;

      case 2:
        return <Haningetk2 />;
      case 3:
        return <Napra3 />;
      case 4:
        return <NaprapatRehab2 />;
      case 5:
        return <Naprapatrehab />;
      case 6:
        return <Htproject />;
      case 7:
        return <Webdesign1 />;
      case 8:
        return <Challenge1 />;
      case 9:
        return <ChallengesJs />;
      default:
        return "No Tab";
    }
  };

  return (
    <div>
      <header id="nav-projects">
        <nav>
          {/* css in navbar.css */}
          <div className="links-container">
            {links.map((item, index) => (
              <p
                key={index}
                onClick={() => setActiveTab(index)}
                className="link"
              >
                {item}
              </p>
            ))}
          </div>
        </nav>

        <div className="navbar_button-container2_design">
          <div className="navbar_button-container2 menu-button-2">
            <input type="checkbox" />
            <span className="first-line"></span>
            <span className="second-line"></span>
            <span className="third-line"></span>
          </div>
          <div>
            <span id="menu-button-text">
              <i
                className="fa fa-angle-double-left fa-lg menu-button-icon"
                aria-hidden="true"
              />
              DESIGNS
            </span>
          </div>
        </div>
      </header>
      <div className="content">{toggleCategories()}</div>
    </div>
  );
};

export default Projects;
