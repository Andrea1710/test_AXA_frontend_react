import React, { Component } from "react";

class Gnomes extends Component {
  state = {
    gnomes: []
  };

  componentDidMount() {
    this.getGnomes();
  }

  getGnomes = () => {
    fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    )
      .then(res => {
        return res.json();
      })
      .then(resData => {
        const data = resData.Brastlewark;
        this.setState({ gnomes: data });
      });
  };

  render() {
    console.log(this.state.gnomes);

    return (
      <div>
        <p>Gnomes List</p>
      </div>
    );
  }
}

export default Gnomes;
