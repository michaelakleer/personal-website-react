import React from "react";

import VS from "./images/VS-Code.png";
import API from "./images/API-image.png";

import Hosting from "./images/Hosting.png";

import "./Technologies.css";

export default function Technologies() {
  return (
    <div className="Technologies">
      <h3>Technologies</h3>
      <div className="row">
        <div className="col-sm-1">
          <span className="html">
            <i className="fab fa-html5 fa-5x "></i>
            <p>HTML</p>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="css">
            <i className="fab fa-css3-alt fa-5x"></i>
            <p>CSS</p>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="javascript">
            <i className="fab fa-js-square fa-5x"></i>
            <p>JavaScript</p>
          </span>
        </div>
        <div className="col-sm-1">
          <img src={VS} alt="" width={80}></img>
        </div>
        <div className="col-sm-1">
          <img src={API} alt="" width={80}></img>
        </div>
        <div className="col-sm-1">
          <span className="github">
            <i class="fab fa-github fa-5x"></i>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="bootstrap">
            <i class="fab fa-bootstrap fa-5x"></i>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="hosting">
            {" "}
            <i class="fas fa-laptop-code fa-4x"></i>
          </span>
        </div>
        <div className="col-sm-1">
          <span className="react">
            <i class="fab fa-react fa-5x"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
