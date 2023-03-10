import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/landing.JPG";
import IMG2 from "../../assets/survey.JPG";
import IMG3 from "../../assets/Technical.JPG";
import IMG4 from "../../assets/tribute.JPG";
import IMG5 from "../../assets/snippet.PNG";
// import { BsGithub } from "react-icons/bs";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Landing_Page_Mock",
    github: "https://github.com",
    demo: URL("../Landing Page/Main page/landing.html"),
  },

  {
    id: 2,
    image: IMG2,
    title: "Consumer_Survey_Page_Mock",
    github: "https://github.com",
    demo: URL("../Survey folder/survey.html"),
  },
  {
    id: 3,
    image: IMG3,
    title: "Tech_Doc_Page_Mock",
    github: "https://github.com",
    demo: URL("../Technical/technical.html"),
  },
  {
    id: 4,
    image: IMG5,
    title: "Tic_Tac_Toe_Game",
    github: "https://github.com",
    demo: URL("../Tic_TAC_TOE/Tic Tac Toe/index.html"),
  },
  {
    id: 5,
    image: IMG4,
    title: "Tribute_Page_Mock",
    github: "https://github.com",
    demo: URL("../Tribute Page/TributePage.html"),
  },
];
// import LIVE from '../Survey folder/survey.html'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfoio</h2>

      <div className="container portfolio_container">
      { data.map(({id,image,title,github,demo})=>{
        return (
          <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>

          <div className="portfolio_item-cta">
            <a href={github} className=" btn">
              GitHub
            </a>
            <a href={demo} target="_parent" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        )
       })
       }
       
       
       
       

        {/* LANDING PAGE SAMPLE */}

       
      </div>
    </section>
  )
};

export default Portfolio;
