import React, { Component } from "react";
import { Table, Tag, Avatar } from "antd";

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
      const professions = gnome.professions;
      const profession = professions.join(", ");

      const friends = gnome.friends;
      let friend = friends.join(", ");

      if (!friend) {
        friend = "No friends";
      }

      let gender;
      switch (gnome.hair_color) {
        case "Pink":
        case "Red":
        case "Green":
          gender = "FEMALE";
          break;
        default:
          gender = "MALE";
      }

      return {
        key: gnome.id,
        id: gnome.id,
        name: gnome.name,
        thumbnail: gnome.thumbnail,
        gender: [gender],
        age: gnome.age,
        weight: gnome.weight.toFixed(2) + " kg",
        height: gnome.height.toFixed(2) + " cm",
        hair_color: [gnome.hair_color],
        professions: profession,
        friends: friend
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
        key: "thumbnail",
        render: (text, record) => {
          return (
            <span>
              <a
                href={record.thumbnail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar shape="square" size={64} src={record.thumbnail} />
              </a>
            </span>
          );
        }
      },
      {
        title: "GENDER",
        dataIndex: "gender",
        key: "gender",
        render: genders => (
          <span>
            {genders.map(gender => {
              let color = gender === "MALE" ? "blue" : "pink";
              return (
                <Tag color={color} key={gender}>
                  {gender.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
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
