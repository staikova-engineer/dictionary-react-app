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
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer className="App-footer">Coded by Anna Staikova</footer>
      </div>
    </div>
  );
}

export default App;
