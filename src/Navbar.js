import React, { useState } from "react";
import logo from "./images/logo.png";

import "./Navbar.css";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <nav
      className="bd-navbar navbar has-shadow is-spaced is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src={logo} alt="Kleer Code logo" width="" />
          </a>

          <a
            onClick={() => {
              setActive(!active);
            }}
            role="button"
            className={`navbar-burger burger ${active ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${active ? "is-active" : ""}`}>
          <div className="navbar-start">
            <a href="/" className="navbar-item is-active">
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
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="mailto:kleer.michaela@gmail.com" className="button">
                  <strong>Contact</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
