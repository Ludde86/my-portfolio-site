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
import ByggRenoveringApp1 from "./webdesigns/byggrenovering1/ByggRenoveringApp1";
import ByggRenoveringApp2 from "./webdesigns/byggrenovering2/ByggRenoveringApp2";
import EnergiApp1 from "./webdesigns/energi1/EnergiApp1";
import Samhalle1App from "./webdesigns/samhalle1/Samhalle1App";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(6);

  const links = [
    "Plats",
    "Energi",
    "Renovering",
    "Sakerhet",
    "Lilitha",
    "Tennis",
    "Naprapat",
    "Bygg",
    "JS",
  ];

  const toggleCategories = () => {
    switch (activeTab) {
      case 0:
        return <Samhalle1App />;
      case 1:
        return <EnergiApp1 />;
      case 2:
        return <ByggRenoveringApp2 />;
      case 3:
        return <ByggRenoveringApp1 />;
      case 4:
        return <Lilitha1 />;
      case 5:
        return <Haningehtk3App />;
      case 6:
        return <Napra3 />;
      case 7:
        return <Htproject />;
      case 8:
        return <ChallengesJs />;

      /*
          case 9:
            return <Webdesign1 />;
            case 10:
              return <Challenge1 />;
              */
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
            <span id="menu-button-text">Fler projekt</span>
          </div>
        </div>
      </header>
      <div className="content">{toggleCategories()}</div>
    </div>
  );
};

export default Projects;
