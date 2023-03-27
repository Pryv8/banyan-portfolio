import React from "react";
import "./about.css";
import {FaAward} from 'react-icons/fa'
import ME from '../../assets/me.jpg'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Banner from '../about/Banner'
const About = () => {
  return (
    <section id="about">
      <h5>Let's look a little deeper into:</h5>
      <h2> Developer Gilmore</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" s/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
            <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>

            <article className="about_card">
            <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
            <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>45+ Completed</small>
            </article>
          </div>
          <p> Hello and Welcome, I'm Princess. I design and build user interfaces.
           </p>
           <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

      
    </section>
  );
};

export default About;
