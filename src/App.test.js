import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Gnomes from "./components/Gnomes";

it("renders App Component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders Gnomes Component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Gnomes />, div);
});
