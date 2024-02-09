// Home.js

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import developerImage from "../images/developer.jpg"; // Import the developer.jpg image
import image from "../images/motion-background.jpg";
import '../styles/home.css';

const imageAltText = "";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="home-section min-height" style={
      {
        backgroundImage: `url(${image})`,
      }
    }>
      <div className="home-main">
        <img src={developerImage} alt="Developer" className="developer-image" />
        <div className="content">
          <h2>{name}</h2>
          <h3>{title}</h3>
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
