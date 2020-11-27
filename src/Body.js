import React from "react";

import "./Body.css";

export default function Body() {
  return (
    <div className="Body">
      <section className="home">
        <div className="intro">
          <h1>Michaela Kleer</h1>
          <h2>Front-end Web Developer</h2>
        </div>
      </section>
      <section className="aboutMe">
        <div>
          <p className="greeting">Hi! I'm Michaela!</p>
          <p className="personalParagraph">
            I am a Winnipeg-based coder and professional musician. I strive for
            clean design and simple code in every project I get my hands on. I
            have always had a hunger to learn and improve my skills, which fits
            nicely with both of my passions. I love what I do and I can't wait
            to help you achieve your vision!
          </p>

          <div className="container">
            <h3>As a Front-end Web Developer:</h3>
            <div className="containerOne">
              <div className="languages">
                <p className="title">Languages I speak</p>
                <ul className="lists">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="devTools">
                <p className="title">Dev Tools I use</p>
                <ul className="lists">
                  <li>Bootstrap</li>
                  <li>Bulma</li>
                  <li>GitHub</li>
                  <li>Terminal</li>
                  <li>Visual Studio Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <h1>Projects</h1>
        <p>Vanilla Javascript Weather App</p>
        <p>React Weather App</p>
      </section>
      <footer>Footer</footer>
    </div>
  );
}
