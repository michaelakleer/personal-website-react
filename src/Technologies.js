import React from "react";

import Editor from "./images/VS-Code.png";
import API from "./images/API.png";

import Hosting from "./images/Hosting.png";

import "./Technologies.css";

export default function Technologies() {
  return (
    <div className="Technologies">
      <h3>Technologies</h3>
      <span className="html">
        <i className="fab fa-html5 fa-5x "></i>
      </span>
      <span className="css">
        <i className="fab fa-css3-alt fa-5x"></i>
      </span>

      <span className="javascript">
        <i className="fab fa-js-square fa-5x"></i>
      </span>
      <img src={Editor} alt="" width={80}></img>
      <img src={API} alt="" width={100}></img>

      <span className="github">
        <i class="fab fa-github fa-5x"></i>
      </span>
      <span className="bootstrap">
        <i class="fab fa-bootstrap fa-5x"></i>
      </span>

      <img src={Hosting} alt="" width={100}></img>

      <span className="react">
        <i class="fab fa-react fa-5x"></i>
      </span>
    </div>
  );
}
