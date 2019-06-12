import React, { Component } from "react";
import { Table, Tag, Avatar, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";

import "antd/dist/antd.css";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";

class Gnomes extends Component {
  state = {
    gnomes: [],
    searchText: "",
    open: false
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

  filterHandler = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={event =>
            setSelectedKeys(event.target.value ? [event.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small">
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <Icon type="search" />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "yellow", padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  openModalHandler = () => {
    this.setState({ open: true });
  };

  closeModalHandler = () => {
    this.setState({ open: false });
  };

  render() {
    let data = [];
    const gnomes = this.state.gnomes.map(gnome => {
      const professions = gnome.professions;
      let profession = professions.join(", ");
      if (!profession) {
        profession = "Unemployed";
      }

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

    const attitude = [
      "This Gnome likes Hunting, and it likes to go hunting alone",
      "This Gnome is very lazy and it doesn't want to work",
      "This Gnome is good with kids, but nobody here is less than 30 years old!",
      "This Gnome goes running every day!",
      "This Gnome is a good fighter, but the partner doesn't know!",
      "This Gnome has three children with two other Gnomes!",
      "This Gnome wants to leave town, but don't tell anybody!",
      "This Gnome has very good skills in the kitchen",
      "This Gnome wants to learn the Orcs' language",
      "This Gnome learned how to build Applications"
    ];
    const randomAttitude =
      attitude[Math.floor(Math.random() * attitude.length)];

    const columns = [
      {
        title: "NAME",
        dataIndex: "name",
        key: "name",
        ...this.filterHandler("name"),
        render: (text, record) => {
          return (
            <span>
              <button
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  borderRadius: "10px"
                }}
                onClick={this.openModalHandler}
              >
                {record.name}
              </button>
              {this.state.open && <Backdrop />}
              {this.state.open && (
                <Modal
                  title="Gnome Character"
                  onExit={this.closeModalHandler}
                  character={randomAttitude}
                />
              )}
            </span>
          );
        }
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
        key: "age",
        sorter: (a, b) => a.age - b.age
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
        key: "hair_color",
        filters: [
          { text: "Red", value: "Red" },
          { text: "Black", value: "Black" },
          { text: "Green", value: "Green" },
          { text: "Pink", value: "Pink" },
          { text: "Gray", value: "Gray" }
        ],
        onFilter: (value, record) => record.hair_color.indexOf(value) === 0,
        render: hairs => (
          <span>
            {hairs.map(hair => {
              let color;
              switch (hair) {
                case "Pink":
                  color = "pink";
                  break;
                case "Gray":
                  color = "gray";
                  break;
                case "Green":
                  color = "green";
                  break;
                case "Red":
                  color = "red";
                  break;
                default:
                  color = "black";
              }
              return (
                <Tag color={color} key={hair}>
                  {hair.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: "PROFESSIONS",
        dataIndex: "professions",
        key: "professions",
        ...this.filterHandler("professions")
      },
      {
        title: "FRIENDS",
        dataIndex: "friends",
        key: "friends",
        ...this.filterHandler("friends")
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
