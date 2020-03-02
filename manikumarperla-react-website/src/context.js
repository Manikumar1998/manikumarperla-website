import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    projects: [
      {
        id: 1,
        imageUrl: "Armeria.jpg",
        title: "Project 1",
        excerpt: "This is a sample project"
      },
      {
        id: 2,
        imageUrl: "Armeria.jpg",
        title: "Project 1",
        excerpt: "This is a sample project"
      },
      {
        id: 3,
        imageUrl: "Armeria.jpg",
        title: "Project 1",
        excerpt: "This is a sample project"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
