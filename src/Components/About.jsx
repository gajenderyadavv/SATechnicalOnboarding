/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import '../styles/about.css'
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */


const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "A fresher and a 3rd year student pursuing B.E/B.Tech in Electronics and Communication Degree at the U.I.E.T, Kurukshetra University, Kurukshetra with a passion for innovation and technology in DevSecOps and Generative AI.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
export const skillsList = [
  "Cloud Architectures",
  "System Administration",
  "Automation",
  "Containerisation",
  "Microservices",
  "Generative AI",
];

// const skillsList2 = [
//   "Cloud Architectures",
//   "System Administration",
//   "Automation",
//   "Containerisation",
//   "Microservices",
//   "Generative AI",
// ];


/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Let's connect for discussions on technology, innovation, and professional growth.              Let's 🌱🚀 #TechInnovation #DevSecOps #CloudArchitecture";

const About = () => {
  return (
    <section className="padding" id="about">
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div className="about-container">
        <h2 style={{textAlign:'center'}}>About Myself</h2>
        <p className="large">{description}</p>
        {/* <ul>
          {skillsList2.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul> */}
        <hr />
        <p className="large">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
