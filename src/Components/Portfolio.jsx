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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WhatsImportant?",
    description:
      "This is a summarizer app made with Natural Language Processing to extract important parts of full texts with high accuracy.",
    url: "https://whatsimportant.onrender.com/",
  },
  {
    title: "Binge",
    description:
      "This is a netflix-like movie recommender app which selects aand recommends movies and tv shows, also shows similar shows based on the ones you selected before. It was made with React and JavaScript.",
    url: "https://github.com/AbdulHafeez2004/Binge-movie-app",
  },
  {
    title: "The Group Chat",
    description:
      "This is an app which allows users around the globe to chat with each other in real time.",
    url: "https://github.com/AbdulHafeez2004/TheGroupChat-Render",
  },
  {
    title: "YouTube Downloader",
    description:
      "This is an Automation solution which downloads the video which link is specified to the internal storage of the device after running the code.",
    url: "https://github.com/AbdulHafeez2004/YT-downloader",
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
