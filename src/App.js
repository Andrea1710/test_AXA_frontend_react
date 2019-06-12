import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Gnomes from "./containers/Gnomes";

class App extends Component {
  state = {
    instructions: false
  };

  instructionsHandler = () => {
    this.setState(prevState => ({
      instructions: !prevState.instructions
    }));
  };

  render() {
    let text =
      "Click the Button for instructions on how to use the Application!";
    let button = "Open Instructions";

    if (this.state.instructions) {
      text = (
        <div className="instructions">
          <p>
            This App is very useful to browse and find the Gnome you are looking
            for.
          </p>
          <p>
            1. You can click on each Gnome's name to see what's their attitude
            and character
          </p>
          <p>
            2. You can click on the Image to open it o n another page and see
            the face of the Gnome!
          </p>
          <p>
            3. You can browse the Gnomes by Name, hair, profession and even
            friend, clicking on the lens icon
          </p>
          <p>
            4. You can sort the Gnomes by age and filter them depending on their
            hair color
          </p>
        </div>
      );
      button = "Close Instructions";
    }

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
          <button className="btn" onClick={this.instructionsHandler}>
            {button}
          </button>
          <h3>{text}</h3>
        </header>
        <main>
          <Gnomes />
        </main>
      </div>
    );
  }
}

export default App;
