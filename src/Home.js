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
        >
          <button className="linkedin">
            <i class="fab fa-linkedin-in fa-3x"></i>
          </button>
        </a>
        <a
          href="https://github.com/michaelakleer"
          target="_blank"
          rel="noreferrer"
        >
          <button className="github">
            <i class="fab fa-github fa-3x"></i>
          </button>
        </a>
        <a
          href="https://www.instagram.com/michaelakleer/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="instagram">
            <i class="fab fa-instagram fa-3x instagramIcon"></i>
          </button>
        </a>
      </div>
    </div>
  );
}
