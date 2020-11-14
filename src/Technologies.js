import React from "react";

import Editor from "./images/Editor.png";
import API from "./images/API.png";
import GitHub from "./images/GitHub.png";
import Bootstrap from "./images/Bootstrap.png";
import Hosting from "./images/Hosting.png";
import ReactIcon from "./images/ReactIcon.png";

import "./Technologies.css";

export default function Technologies() {
  return (
    <div className="Technologies">
      <h3>Technologies</h3>
      <span>
        <i class="fab fa-html5 fa-5x"></i>
      </span>
      <span>
        <i class="fab fa-css3-alt fa-5x"></i>
      </span>

      <span>
        <i class="fab fa-js-square fa-5x"></i>
      </span>
      <img src={Editor} alt="" width={80}></img>
      <img src={API} alt="" width={100}></img>
      <img src={GitHub} alt="" width={100}></img>
      <img src={Bootstrap} alt="" width={100}></img>
      <img src={Hosting} alt="" width={100}></img>
      <img src={ReactIcon} alt="" width={100}></img>
    </div>
  );
}
