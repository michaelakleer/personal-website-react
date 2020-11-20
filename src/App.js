import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
