import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Gnomes from "./containers/Gnomes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Brastlewark App</h1>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            height="100"
            width="100"
          />
          <h2>Browse your Gnome</h2>
        </header>
        <Gnomes />
      </div>
    );
  }
}

export default App;
