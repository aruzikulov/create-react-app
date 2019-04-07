import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>SurveyJS App</p>
          <a
            className="App-link"
            href="https://ahmad.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Ahmad John
          </a>
        </header>
      </div>
    );
  }
}

export default App;
