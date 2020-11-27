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
        <div className="personalParagraph">
          <p>
            Hi! I am a Winnipeg-based coder and professional musician. I strive
            for clean design and simple code in every project I get my hands on.
            I have always had a hunger to learn and improve my skills, which
            fits nicely with both of my passions. I love what I do and I can't
            wait to help you achieve your vision!
          </p>
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
