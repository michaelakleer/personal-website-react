import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="AboutMe">
      <div>
        <p className="greeting">Hi! I'm Michaela!</p>
        <p className="personalParagraph">
          I am a Winnipeg-based coder and professional musician. <br />I strive
          for clean design and simple code in every project I get my hands on. I
          have always had a hunger to learn and improve my skills, which fits
          nicely with both of my passions. I love what I do and I can't wait to
          help you achieve your vision!
        </p>

        <div className="container">
          <h3>Front-end Web Developer</h3>
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
  );
}
