import React from "react";
import logo from "./images/logo.png";
import "./Navbar.css";

export default function Header() {
  return (
    <div className="Navbar">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Kleer Code logo" width="" />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/" className="navbar-item">
              Techonologies
            </a>
            <a href="/" className="navbar-item">
              Projects
            </a>
            <a href="/" className="navbar-item">
              Certificates
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="button">
              <a href="mailto:kleer.michaela@gmail.com" className="button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
