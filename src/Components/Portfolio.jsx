/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/DevSecOps.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  // {
  //   title: "10 Things To Know About Azure Static Web Apps 🎉",
  //   description:
  //     "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
  //   url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  // },
  {
    title: "EV-RCS",
    description:
      "Steering a project in EV sector which is towards LLP registration and seed funding with fostering an environment for collaborative growth with colleagues. Leading pivotal Proof of Concept integrating IoT-based cloud solutions with a native mobile application ensuring my DevSecOps practices on top of it.",
    url: "https://www.evrcs.com",
  },
  {
    title: "This Site",
    description:
      "Created this from Microsoft's resume workshop and deployed to Azure Static web-app with CI/CD through GitHub. Includes my experience and abilities.",
    url: "https://red-field-00baf2300.4.azurestaticapps.net/#portfolio",
  },
   {
     title: "Detailed Resume Here^",
     description:
       "",
     url: "src/Resume/Gajender-Yadav-Resume-Dec23.pdf",
   },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
