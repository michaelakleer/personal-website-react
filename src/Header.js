import React from "react";
import logo from "./images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img
            src={logo}
            width="250"
            className="d-inline-block align-top"
            alt="Kleer Coding logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav menu">
            <li className="nav-item active">
              <a className="nav-link home" href="#home">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link project" href="#projects">
                Projects
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
              <a className="nav-link " href="mailto:kleer.michaela@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
