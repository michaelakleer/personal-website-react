import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Certificates from "./Certificates";

import "./Body.css";

export default function Body() {
  return (
    <div className="Body">
      <div className="container">
        <Home />
        <Technologies />
        <Projects />
        <Certificates />
      </div>
    </div>
  );
}
