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
import Napra4 from "./webdesigns/napra4/Napra4";
import Lilitha1 from "./webdesigns/lilitha1/Lilitha1";
import Haningetk4App from "./webdesigns/haningetk4/Haningetk4App";
import Haningetk5App from "./webdesigns/haningetk5/Haningetk5App";
import Haningehtk3App from "./webdesigns/haningetk3/Haningetk3App";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

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
    "Napra4",
    "Lilitha1",
    "Haningetk4",
    "Haningetk5",
  ];

  const toggleCategories = () => {
    switch (activeTab) {
      case 0:
        return <Haningehtk3App />;
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
      case 10:
        return <Napra4 />;
      case 11:
        return <Lilitha1 />;
      case 12:
        return <Haningetk4App />;
      case 13:
        return <Haningetk5App />;
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
              PROJEKT
            </span>
          </div>
        </div>
      </header>
      <div className="content">{toggleCategories()}</div>
    </div>
  );
};

export default Projects;
