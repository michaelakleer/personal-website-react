import React from "react";
import Linkedin from "./images/Linkedin.png";
import GitHub from "./images/GitHub-Mark-32px.png";
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
          <img src={Linkedin} alt="Linkedin Link" width={32} />
        </a>
        <a
          href="https://github.com/michaelakleer"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GitHub} alt="GitHub Link"></img>
        </a>
        <a
          href="https://www.instagram.com/michaelakleer/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Instagram Link" width={32}></img>
        </a>
      </div>
    </div>
  );
}
