import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/landing.JPG";
import IMG2 from "../../assets/survey.JPG";
import IMG3 from "../../assets/Technical.JPG";
import IMG4 from "../../assets/tribute.JPG";
import IMG5 from "../../assets/snippet.PNG";
import TEMP from '../../assets/oscar-ivan-esquivel-arteaga-EXbxNyCypWI-unsplash.jpg'
// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Landing_Page_Mock",
//     github: "https://github.com",
//     demo: URL("../Landing Page/Main page/landing.html"),
//   },

//   {
//     id: 2,
//     image: IMG2,
//     title: "Consumer_Survey_Page_Mock",
//     github: "https://github.com",
//     demo: URL("../Survey folder/survey.html"),
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: "Tech_Doc_Page_Mock",
//     github: "https://github.com",
//     demo: URL("../Technical/technical.html"),
//   },
//   {
//     id: 4,
//     image: IMG5,
//     title: "Tic_Tac_Toe_Game",
//     github: "https://github.com",
//     demo: URL("../Tic_TAC_TOE/Tic Tac Toe/index.html"),
//   },
//   {
//     id: 5,
//     image: IMG4,
//     title: "Tribute_Page_Mock",
//     github: "https://github.com",
//     demo: URL("../Tribute Page/TributePage.html"),
//   },
// ];
// import LIVE from '../Survey folder/survey.html'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfoio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Landing site" />
          </div>
          <h3>Landing Page project</h3>

          <div className="portfolio_item-cta">
            <a href="https://github.com" className=" btn">
              GitHub
            </a>
            <a
              href="../Landing Page/Main page/landing.html"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* LANDING PAGE SAMPLE */}

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="Survey site" />
          </div>
          <h3>Consumer Survey</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        {/* SURVEY PAGE SAMPLE*/}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="Technical site" />
          </div>
          <h3>Technical Documentation page </h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              GitHub
            </a>
            <a href="../Technical/technical.html" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        {/* TECHNICAL DOCUMENT SAMPLE */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="Tribute site" />
          </div>
          <h3>A Tribute to Miami</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* TRIBUTE SAMPLE */}




        {/* beggining of the empty card */}
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={TEMP} alt="Tribute site" />
          </div>
          <h3>A placecard for the future</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* END OF EMPTY CARD WILL FIND OUT WHAT GOES IN THIS SLOT LATER */}



        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img id="long"src={IMG5} alt="A game" />
          </div>
          <h3>A Tic Tac Toe Game</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
