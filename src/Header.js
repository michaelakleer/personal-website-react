import React from "react";
import logo from "./logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            width="250"
            className="d-inline-block align-top"
            alt="Kleer Coding logo"
          />
        </a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link about" href="#aboutMe">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link tech" href="#technologies">
                Technologies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link certificates" href="#certificates">
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link project" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
