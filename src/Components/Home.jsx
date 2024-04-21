// Home.js

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import developerImage from "../images/developer.jpg"; // Import the developer.jpg image
import image from "../images/motion-background.jpg";
import '../styles/home.css';
import { skillsList } from "./About";
import linkedInIcon from "../images/socials/linkedin.svg";

const imageAltText = "";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="home-section min-height" style={
      {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    }>
      <div className="home-main">
        <div className="person__">
          <img src={developerImage} alt="Developer" className="developer-image" />
          <div className="content">
            <h2>{name}</h2>
            <h3>{title}</h3>
            {/* linkedin  */}
            <a className="linkedinLink" href="https://www.linkedin.com/in/gajenderyadavv/" target="_blank" rel="noreferrer">
              <img style={{
                width: "20px",
                height: "20px",
                marginRight: "5px",
              
              }} src={linkedInIcon} alt="Linkedin"  /> Linkedin
            </a>
          </div>
        </div>
        <div className="about-container">
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        </div>


        

      </div>
      <div className="home-arrow">
        <img src={arrowSvg} alt="Scroll Down" />
      </div>
    </section>
  );
};


Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
