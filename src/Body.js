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
      <section>
        <div className="containerOne">
          <div className="boxOne">
            <h3>One</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="boxTwo">
            <h3>Two</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="boxThree">
            <h3>Three</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="containerTwo">
          <div className="containerTwoBox">
            <h3>Four</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="containerTwoBox">
            <h3>Five</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="containerTwoBox">
            <h3>Six</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section className="projects"></section>
    </div>
  );
}
