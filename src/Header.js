import React from "react";
import logo from "./logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header" id="navbar">
      <img src={logo} alt="Kleer Coding logo" className="logo" />
      <nav>
        <div className="row">
          <div className="col-sm-3">
            <p>
              <a href="#aboutMe" className="nav-link about">
                About me
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <p>
              <a href="#technologies" className="nav-link tech">
                Technologies
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <p>
              <a href="#certificates" className="nav-link certificate">
                Certificates
              </a>
            </p>
          </div>
          <div className="col-sm-3">
            <p>
              <a href="#projects" className="nav-link projects">
                Projects
              </a>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
