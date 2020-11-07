import React from "react";
import logo from "./logo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header" id="navbar">
      <img src={logo} alt="Kleer Coding logo" className="logo" />
      Add a logo and site's navigation menu
    </div>
  );
}
