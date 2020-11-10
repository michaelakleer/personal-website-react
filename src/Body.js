import React from "react";
import Technologies from "./Technologies";
import Certificates from "./Certificates";
import Projects from "./Projects";

import "./Body.css";

export default function Body() {
  return (
    <div className="Body">
      <h1>Michaela Kleer</h1>
      <h2>Frontend React Web Developer</h2>
      <div>Brief paragraph about myself</div>
      <Projects />
      <Technologies />
      <Certificates />
    </div>
  );
}
