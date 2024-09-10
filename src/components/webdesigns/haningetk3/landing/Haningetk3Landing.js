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
          <div className="htk3-landing_container-slider_wrapper">
            <div className="htk3-landing_container-slider_wrapper-slider">
              <img
                src={image}
                alt="img"
                className={animated ? "animation" : undefined}
              />

              <div className="htk3-landing_container-slider_nav">
                <span onClick={handlePrevImage}>
                  <ChevronLeft size={32} />
                </span>
                {/*
                <a
                  style={{ background: image === img1 && "#333" }}
                  onClick={() => handleSetImage(img1)}
                ></a>
                <a
                  style={{ background: image === img2 && "#333" }}
                  onClick={() => handleSetImage(img2)}
                ></a>
                <a
                  style={{ background: image === img3 && "#333" }}
                  onClick={() => handleSetImage(img3)}
                ></a>
                <a
                  style={{ background: image === img4 && "#333" }}
                  onClick={() => handleSetImage(img4)}
                ></a>
                */}
                <span onClick={handleNextImage}>
                  <ChevronRight size={32} />
                </span>
              </div>
              <div className="htk3-landing_container-slider_nav-button">
                {image === img1 && (
                  <>
                    <a
                      className="htk3-landing_container-slider_nav-button-link"
                      href="https://www.matchi.se/forms/9g6MT0BuznTHBMOqbJDq"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>Hösttermin 2024</button>
                    </a>
                  </>
                )}

                {image === img2 && (
                  <>
                    <a
                      className="htk3-landing_container-slider_nav-button-link"
                      href="/projects/htk3/tennisskola"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>Läs mer om tennisskolan</button>
                    </a>
                  </>
                )}

                {image === img3 && (
                  <>
                    <a
                      className="htk3-landing_container-slider_nav-button-link"
                      href="https://www.matchi.se/forms/9g6MT0BuznTHBMOqbJDq"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>Vill ni vara med?</button>
                    </a>
                  </>
                )}

                {image === img4 && (
                  <>
                    <Link
                      className="htk3-landing_container-slider_nav-button-link"
                      to={"tavling"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>Läs mer om våra tävlingar</button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="htk3-landing_container-desc_container-desc">
              {image === img1 && (
                <>
                  {/*
                  <h3>Höstterminen 2024</h3>
                 */}
                  <p>
                    Hej! Vi är glada att meddela att höstterminen är igång, och
                    vi vill varmt välkomna alla medlemmar, nya som gamla,
                    tillbaka efter sommaren. Framför oss har vi en ny säsong
                    fylld med spänning, utveckling och med massor av glädje på
                    tennisbanorna.
                  </p>
                  <p>
                    Under kommande hösttermin är det fortsatt mycket träning på
                    banorna eftermiddag och kvällstid.
                  </p>
                  <p>
                    Under höstlovet kommer det finnas möjlighet till en plats på
                    heldagsläger så håll utsikt efter uppsatt lapp i hallen och
                    på mailen. Begränsade platser!
                  </p>
                  <p>
                    Det är en spännande höst som ligger framför oss och
                    tillsammans kommer vi också få väldigt roligt! Sen ska våra
                    pojkar 15 börja spela seriespel, vi är så stolta!
                  </p>
                  <p>
                    Under v44 är det åter dags igen för vårt årliga
                    klubbmästerskap där det ska spelas om nya pokaler och
                    vinnare som ska försöka försvar sina titlar.
                  </p>
                </>
              )}

              {image === img2 && (
                <>
                  {/*
                  <h3>Tennisskolan</h3>
                 */}
                  <p>
                    Tennisskolan är öppen för både nybörjare och mer vana
                    spelare av varierande åldrar - allt från minitennis till
                    vuxengrupper.
                  </p>
                  <p>
                    Vi kan stolt säga att vi är en av de billigaste
                    tennisklubbarna i Stockholmsområdet då de är viktigt för oss
                    att ge möjligheten för alla barn och ungdomar som vill utöva
                    tennis att dem skall få göra detta. Tennis är väldens
                    roligaste sport!
                  </p>
                  <p>
                    Tennisskolan löper terminsvis och pågår alla dagar i veckan,
                    dock med uppehåll för skollov. Träningen pågår i regel under
                    en timme per gång. Varje elev tränar en eller flera
                    tillfällen per vecka enligt önskemål. Schemat läggs med
                    avsikt att så långt det går skapa jämna grupper efter ålder
                    och spelerfarenhet.
                  </p>
                </>
              )}

              {image === img3 && (
                <>
                  {/*
                  <h3>Sponsorer</h3>
                 */}
                  <p>Vill ni synas här?</p>
                  <p>
                    Sponsring används för att få företaget att öka kännedomen om
                    sitt varumärke eller förbättra sitt rykte. Genom sponsring
                    av ett välkänt evenemang som är välbesökt kan du få stor
                    synlighet.
                  </p>
                </>
              )}

              {image === img4 && (
                <>
                  {/*
                  <h3>Börja tävla!</h3>
                 */}
                  <p>
                    Att tävla i tennis är för många barn väldigt stimulerande,
                    spännande och utmanande. En match utvecklar dessutom i regel
                    en spelares tennis betydligt mer än en enskild
                    träningstimme. Idag kan barn börja tävla redan vid 6 års
                    ålder. Junior är man fram till man fyllt 18 år. Det finns
                    ett stort utbud tävlingar för alla åldrar och kategorier.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Landing;
