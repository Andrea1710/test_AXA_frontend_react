import React, { Component } from "react";
import { Table } from "antd";

import "antd/dist/antd.css";

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
    let data = [];
    const gnomes = this.state.gnomes.map(gnome => {
      return {
        key: gnome.id,
        id: gnome.id,
        name: gnome.name,
        thumbnail: gnome.thumbnail,
        age: gnome.age,
        weight: gnome.weight.toFixed(2) + " kg",
        height: gnome.height.toFixed(2) + " cm",
        hair_color: [gnome.hair_color],
        professions: gnome.professions,
        friends: gnome.friends
      };
    });
    data = gnomes;

    const columns = [
      {
        title: "NAME",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "IMAGE",
        dataIndex: "thumbnail",
        key: "thumbnail"
      },
      {
        title: "AGE",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "WEIGHT",
        dataIndex: "weight",
        key: "weight",
        width: "8%"
      },
      {
        title: "HEIGHT",
        dataIndex: "height",
        key: "height",
        width: "8%"
      },
      {
        title: "HAIR",
        dataIndex: "hair_color",
        key: "hair_color"
      },
      {
        title: "PROFESSIONS",
        dataIndex: "professions",
        key: "professions"
      },
      {
        title: "FRIENDS",
        dataIndex: "friends",
        key: "friends"
      }
    ];

    return (
      <div>
        <Table dataSource={data} columns={columns} />
      </div>
    );
  }
}

export default Gnomes;
