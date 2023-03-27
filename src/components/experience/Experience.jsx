import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import WordPressIcon from "../../assets/icons8-wordpress-48.png"
import HTMLIcon from "../../assets/markup.png"
import MongoDBIcon from "../../assets/icons8-mongodb-48.png"
import CSSIcon from "../../assets/css3-cascading-style-sheets-logo-html-markup-language-others-c7a8232493819980fb868fee15bae351.png"
import NodeJsIcon from "../../assets/icons8-nodejs-48.png"
import JavaIcon from "../../assets/javascript-ecmascript-computer-software-front-and-back-ends-tutorial-txt-file-d1ea8b336ac026414fa432233165edd2.png"
import ReactIcon from "../../assets/738fa284l7nbj2ni54jd1ij7eb.png"
import BootstrapIcon from '../../assets/bootstrap-responsive-web-design-web-development-logo-django-others-d7ec880588af75918aa8bc2ad69bd1a4 (1).png'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
             <div>
             <img src={HTMLIcon} alt="icon" className="experience_icons" />
            
              <small className="text-light">Experienced</small>
             </div> 
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <img src={CSSIcon} alt="icon" className="experience_icons" />
              
              <small className="text-light">Experienced</small> 
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <img src={BootstrapIcon} alt="icon" className="experience_icons" />
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
              </div> 
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <img src={JavaIcon} alt="icon" className="experience_icons" />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
              </div> 
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div> 
              <img src={ReactIcon} alt="icon" className="experience_icons" />
              <h4>React</h4>
              <small className="text-light">Moderate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <img src={WordPressIcon} alt="icon" className="experience_icons" />
              <h4>WordPress</h4>
              <small className="text-light">Intermediate</small>
              </div> 
            </article>
          </div>
          </div>

{/* END OF FRONTEND SKILLS */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <img src={NodeJsIcon} alt="icon" className="experience_icons" />
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
              </div> 
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <img src={MongoDBIcon} alt="icon" className="experience_icons" />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div> 
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon"/>
              <div>
              <h4>Basic</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
