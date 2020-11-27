import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}
