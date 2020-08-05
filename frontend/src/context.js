import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action, value) => {
  switch (action) {
    case "ADD_RECOMMENDATION":
      console.log(value);
      return {
        ...state,
        recommendations: [value, ...state.recommendations],
      };
    default:
      console.log("default");
      break;
  }
};

export class Provider extends Component {
  state = {
    dispatch: (action, payload) => {
      this.setState((state) => reducer(state, action, payload));
    },
    projects: [],
    blogs: [],
    skills: [],
    recommendations: [],
    serverUrl: "http://localhost:5000/api/",
  };

  async componentDidMount() {
    const { serverUrl } = this.state;
    const [
      resultRecommendations,
      resultSkills,
      resultProjects,
      resultBlogs,
    ] = await Promise.all([
      axios.get(serverUrl + "recommendations"),
      axios.get(serverUrl + "skills"),
      axios.get(serverUrl + "projects"),
      axios.get(serverUrl + "blogs"),
    ]);

    this.setState({
      recommendations: resultRecommendations.data.payload,
      skills: resultSkills.data.payload,
      projects: resultProjects.data.payload,
      blogs: resultBlogs.data.payload,
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;