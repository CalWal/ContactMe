import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Picture from "./components/Picture";
import AboutMe from "./components/AboutMe";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Picture />
      <AboutMe />
      <Info />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
