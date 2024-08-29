import React from "react";
import "./haningetk3Landing.css";
import img1 from "../assets/img/trana-1.jpg";
import img2 from "../assets/img/tennisskolan-1.jpg";
import img3 from "../assets/img/alicja-gancarz-wvDELsJ_E20-unsplash.jpg";
import img4 from "../assets/img/start1_notitle.jpg";
import PageHeaderHtk3 from "../components/pageHeader/PageHeaderHtk3";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

const Haningetk3Landing = () => {
  const [image, setImage] = useState(img1);

  const [animated, setAnimated] = useState(false);

  const handleNextImage = () => {
    setAnimated(true);
    if (image === img1) {
      setImage(img2);
    }
    if (image === img2) {
      setImage(img3);
    }
    if (image === img3) {
      setImage(img4);
    }
    if (image === img4) {
      setImage(img1);
    }
    setTimeout(() => {
      setAnimated(false);
    }, 1000);
  };

  const handlePrevImage = () => {
    setAnimated(true);
    if (image === img1) {
      setImage(img4);
    }
    if (image === img2) {
      setImage(img1);
    }
    if (image === img3) {
      setImage(img2);
    }
    if (image === img4) {
      setImage(img3);
    }
    setTimeout(() => {
      setAnimated(false);
    }, 1000);
  };

  const handleSetImage = (img) => {
    setAnimated(true);
    setImage(img);

    setTimeout(() => {
      setAnimated(false);
    }, 1000);
  };

  return (
    <div id="landing" className="htk3-landing_container">
      <PageHeaderHtk3 header={"Nyheter och events"} />
      <div className="htk3-landing_container-content">
        <div className="htk3-landing_container-desc_container">
          <div className="htk3-landing_container-desc_container-desc">
            {image === img1 && (
              <>
                <h3>Höstterminen 2024</h3>
                <p>
                  Hej! Vi är glada att meddela att höstterminen är igång, och vi
                  vill varmt välkomna dig till en ny säsong fylld med spänning,
                  utveckling och glädje på tennisbanan. Oavsett om du är
                  nybörjare eller erfaren spelare, har vi något för dig.
                </p>
                <p>
                  Under höstens träningar kommer vi att fokusera på att
                  förbättra teknik, strategi och kondition i en inspirerande och
                  kamratlig miljö. Missa inte chansen att utveckla ditt spel och
                  ha kul tillsammans med andra tennisälskare. Anmäl dig idag och
                  låt oss tillsammans göra denna höst till en riktig fullträff!
                </p>
                <a
                  className="htk3-landing_container-desc_container-desc-link"
                  href="https://www.matchi.se/forms/9g6MT0BuznTHBMOqbJDq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>
                    Anmäl dig <MoveRight />
                  </button>
                </a>
              </>
            )}

            {image === img2 && (
              <>
                <h3>Tennisskolan</h3>
                <p>
                  Tennisskolan är öppen för både nybörjare och mer vana spelare
                  av varierande åldrar - allt från minitennis till vuxengrupper.
                </p>
                <p>
                  Tennisskolan löper terminsvis och pågår alla dagar i veckan,
                  dock med uppehåll för skollov. Träningen pågår i regel under
                  en timme per gång och standarduppsättningen är en tränare och
                  4-6 elever. Varje elev tränar en eller flera tillfällen per
                  vecka enligt önskemål. Schemat läggs med avsikt att så långt
                  det går skapa jämna grupper efter ålder och spelerfarenhet.
                </p>
                <Link
                  className="htk3-landing_container-desc_container-desc-link"
                  to={"tennisskolan"}
                >
                  <button>
                    Läs mer om tennisskolan
                    <MoveRight />
                  </button>
                </Link>
              </>
            )}

            {image === img3 && (
              <>
                <h3>Sponsorer</h3>
                <p>Vill ni synas här?</p>
                <p>
                  Sponsring används för att få företaget att öka kännedomen om
                  sitt varumärke eller förbättra sitt rykte. Genom sponsring av
                  ett välkänt evenemang som är välbesökt kan du få stor
                  synlighet.
                </p>
                <button>
                  Vill ni vara med? <MoveRight />
                </button>
              </>
            )}

            {image === img4 && (
              <>
                <h3>Börja tävla!</h3>
                <p>
                  Att tävla i tennis är för många barn väldigt stimulerande,
                  spännande och utmanande. En match utvecklar dessutom i regel
                  en spelares tennis betydligt mer än en enskild träningstimme.
                  Idag kan barn börja tävla redan vid 6 års ålder. Junior är man
                  fram till man fyllt 18 år. Det finns ett stort utbud tävlingar
                  för alla åldrar och kategorier.
                </p>
                <Link
                  className="htk3-landing_container-desc_container-desc-link"
                  to={"tavling"}
                >
                  <button>
                    Läs mer om våra tävlingar <MoveRight />
                  </button>
                </Link>
              </>
            )}
          </div>

          <div className="htk3-landing_container-slider_wrapper">
            <div className="htk3-landing_container-slider_wrapper-slider">
              <img src={image} alt="img" className={animated && "animation"} />
            </div>
            <div className="htk3-landing_container-slider_nav">
              <span onClick={handlePrevImage}>
                <ChevronLeft />
              </span>
              <a
                style={{ background: image === img1 && "#1560bd" }}
                onClick={() => handleSetImage(img1)}
              ></a>
              <a
                style={{ background: image === img2 && "#1560bd" }}
                onClick={() => handleSetImage(img2)}
              ></a>
              <a
                style={{ background: image === img3 && "#1560bd" }}
                onClick={() => handleSetImage(img3)}
              ></a>
              <a
                style={{ background: image === img4 && "#1560bd" }}
                onClick={() => handleSetImage(img4)}
              ></a>

              <span onClick={handleNextImage}>
                <ChevronRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Landing;
