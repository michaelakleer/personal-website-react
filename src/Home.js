import React from "react";

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
          className="button linkedin"
        >
          <span className="icon">
            <i class="fab fa-linkedin-in "></i>
          </span>
        </a>
        <a
          href="https://github.com/michaelakleer"
          target="_blank"
          rel="noreferrer"
          className="button github"
        >
          <span className="icon">
            <i class="fab fa-github "></i>
          </span>
        </a>
        <a
          href="https://www.instagram.com/michaelakleer/"
          target="_blank"
          rel="noreferrer"
          className="button instagram"
        >
          <span className="icon">
            <i class="fab fa-instagram instagramIcon"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
