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
import styles from "../styles/main.css";
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
    title: "EVRCS",
    description:
      "Led a team of 4 in the development of a proof of concept, to create a cross-platform application using Native and Node technologies to ensure seamless integration with another Php backend.# Integrated an UHF-RFID & IoT-based cloud solution with Php backend for providing real-time charging data to users.# Implemented containerization to deploy both backend and application on ECS, ensuring scalability and reliability.# Also, Navigated for inclusion into UIET, KU’s Community Incubation Centre.#",
    url: "https://www.evrcs.com",
  },
  {
    title: "Cloud/Home Lab",
    description:
      "Deployed various applications on both cloud and home lab environments, such as Kasm, Portainer, Ant-media server, Nginx (for reverse proxy) and MySQL for databases utilizing Docker and Kubernetes light version i.e K3s. Set up ESXi-Arm, DDNS-Cloudflare, NAS, and a custom DNS service on the home lab Raspberry Pi.#",
    url: "https://red-field-00baf2300.4.azurestaticapps.net/",
  },
  {
    title: "Live Video-Streaming Server",
    description:
      " Developed a system for live streaming using RaspberryPi’s Camera input & efficient Encoding of video frames in HLS.# Containerized the application for EC2 using Docker, including Nginx-RTMP-HTML for streaming management & Node container for the authentication purpose.# Established a RTMP endpoint within the Nginx-RTMP container, linking to an S3 bucket for efficient video file storage.# Utilized CloudFront as a CDN to ensure seamless distribution of transcoded HLS streams to end-users.#",
    url: "https://github.com/gajenderyadavv/live-video-streaming-server.git",
  },
  //  {
  //    title: "Detailed Resume Here^",
  //    description:
  //      "",
  //    url: "https://gajenderyadavv.blob.core.windows.net/portfolio/Gajender-Yadav-Resume-March24.pdf",
  //    abc:[
  //     {
  //       url:"",
  //       desc:""
  //     }
  //    ]
  //  },
];





const Portfolio = () => {
  return (
    <section className="portfolio__container" id="portfolio">
      <h2>Portfolio</h2>


      <div className="project__container">
        {projectList.map((project) => (
          <div className="box" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
            </a>
            {project?.abc?.length > 0 && <div style={{ display: "flex", flexDirection: "column", gap: "20px 0px", marginTop: "20px" }}>
              {project.abc.map(a => {
                return <a href={a.url} style={{ color: "rgb(78, 86, 126)" }}>{a.desc}</a>
              })}
            </div>}
            <p className="small">{
              project.description.split('#').slice(0,-1).map((str,index)=>{
                return (
                  <ul key={index}>
                    <li>{str}</li>
                  </ul>
                )
              })
            }</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
