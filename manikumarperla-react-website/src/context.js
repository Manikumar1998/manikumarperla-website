import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action, value) => {
  switch (action) {
    case "ADD_RECOMMENDATION":
      console.log(value);
      return {
        ...state,
        recommendations: [value, ...state.recommendations]
      };
    default:
      console.log("default");
      break;
  }
};

export class Provider extends Component {
  state = {
    dispatch: (action, payload) => {
      this.setState(state => reducer(state, action, payload));
    },

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
        id: 0,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        id: 1,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        id: 2,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 4
      },
      {
        id: 3,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        id: 4,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        id: 5,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        id: 6,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        id: 7,
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 3
      }
    ],
    recommendations: [
      {
        id: 0,
        name: "Hitesh Jonnalagadda",
        email: "hitesh@gmail.com",
        company: "Oisix ra Daichi",
        designation: "SRE",
        message: "He is smart af!"
      },
      {
        id: 1,
        name: "Hitesh Jonnalagadda",
        email: "hitesh@gmail.com",
        company: "Oisix ra Daichi",
        designation: "SRE",
        message: "He is smart af!"
      },
      {
        id: 2,
        name: "Hitesh Jonnalagadda",
        email: "hitesh@gmail.com",
        company: "Oisix ra Daichi",
        designation: "SRE",
        message: "He is smart af!"
      },
      {
        id: 3,
        name: "Hitesh Jonnalagadda",
        email: "hitesh@gmail.com",
        company: "Oisix ra Daichi",
        designation: "SRE",
        message: "He is smart af!"
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
