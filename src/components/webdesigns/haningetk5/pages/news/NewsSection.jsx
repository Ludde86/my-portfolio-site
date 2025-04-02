import "./newsSection.css"; // Du kan lägga till egen stil här
import img1 from "../../assets/images/cristina-anne-costello-rank-Px49iI-unsplash.jpg";
import { useState } from "react";
import { useEffect } from "react";

function NewsSection() {
  // const [newsList, setNewsList] = useState([]);
  const newsList = [
    {
      title: "Tennisklubben och Facebook?",
      date: "2025-01-20",
      content:
        "Nu försöker vi bli något mer kommunikativa och moderna. Vi har skapat en Facebook-grupp. Denna gruppen är enbart för medlemmar och tanken är att vi här ska kunna dela våra bästa tennistips och foton från vår träning.",
      link: " ",
      linkText: "Besök oss på facebook",
      image: "",
    },
    {
      title: "Björns Cup",
      date: "2025-01-20",
      content:
        "Björns Cup, en tävling som startade 1988, går av stapeln den 15 juni. Det är samma dag som årsmötet. Tävlingen är öppen för stora och små, gammal och ung oavsett spelstyrka. Det är en dubbeltävling där tävlingsledningen Björn Lindström sätter ihop paren så att det blir så jämt som möjligt.",
      link: " ",
      linkText: "Björns Cup 2024",
      image: img1,
    },
    // Lägg till fler nyheter här
  ];

  // useEffect(() => {
  //   fetch("bd_get_news.php")
  //     .then((response) => response.json())
  //     .then((data) => setNewsList(data));
  // }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">Senaste Nyheter</h1>
      {newsList.map((newsItem, index) => (
        <div key={index} className="news-item">
          <div className="news-item-desc">
            <h2>{newsItem.title}</h2>
            <p className="news-date">{newsItem.date}</p>
            <p>{newsItem.content}</p>
            {newsItem.link && (
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                {newsItem.linkText}
              </a>
            )}
          </div>
          {newsItem.image && (
            <div className="news-item-img">
              <img src={newsItem.image} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NewsSection;
