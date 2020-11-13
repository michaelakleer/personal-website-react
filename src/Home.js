import React from "react";
import Linkedin from "./images/Linkedin.png";
import GitHub from "./images/GitHub-Mark-64px.png";
import Instagram from "./images/instagram-logo.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <h1>Michaela Kleer</h1>
      <h2>Front End Web Developer</h2>
      <div className="description">Professional musician turned coder.</div>
      <div className="socialMediaLinks">
        <a
          href="https://www.linkedin.com/in/michaela-kleer-2492641b3/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="linkedin">
            <img src={Linkedin} alt="Linkedin Link" width={50} />
          </button>
        </a>
        <a
          href="https://github.com/michaelakleer"
          target="_blank"
          rel="noreferrer"
        >
          <button className="github">
            <img src={GitHub} alt="GitHub Link" width={42} />
          </button>
        </a>
        <a
          href="https://www.instagram.com/michaelakleer/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="instagram">
            <img src={Instagram} alt="Instagram Link" width={42} />
          </button>
        </a>
      </div>
    </div>
  );
}
