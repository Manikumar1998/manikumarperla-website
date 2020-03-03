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
    ],
    skills: [
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 4
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 3
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
