import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
