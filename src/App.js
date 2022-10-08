import React from "react";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/anna-staikova-engineer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anna Staikova
          </a>{" "}
          with React and is{" "}
          <a
            href="https://github.com/staikova-engineer/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          and{" "}
          <a
            href="https://playful-froyo-8e202c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
