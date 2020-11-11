import React from "react";
import HTML from "./images/HTML.png";
import CSS from "./images/CSS.png";
import JavaScript from "./images/JavaScript.png";
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
      <img src={HTML} alt="" width={100}></img>
      <img src={CSS} alt="" width={100}></img>
      <img src={JavaScript} alt="" width={100}></img>
      <img src={Editor} alt="" width={100}></img>
      <img src={API} alt="" width={100}></img>
      <img src={GitHub} alt="" width={100}></img>
      <img src={Bootstrap} alt="" width={100}></img>
      <img src={Hosting} alt="" width={100}></img>
      <img src={ReactIcon} alt="" width={100}></img>
    </div>
  );
}
