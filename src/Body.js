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
        <div className="container">
          <div className="paragraph">
            <p>
              Hi! I am a Winnipeg-based coder and professional musician. I
              strive for clean design and simple code in every project I get my
              hands on. I have always had a hunger to learn and improve my
              skills, which fits nicely with both of my passions. I love what I
              do and I can't wait to help you achieve your vision!
            </p>
          </div>
          <div className="technologies">
            <ul>
              <li>Languages I speak:</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <ul>
              <li>Dev Tools:</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
              <li>GitHub</li>
              <li>Terminal</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="projects"></section>
    </div>
  );
}
