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
  };
  async componentDidMount() {
    const serverUrl =
      process.env.ENV === "local" ? "http://127.0.0.1:8000" : "";
    const [
      resultRecommendations,
      resultSkills,
      resultProjects,
      resultBlogs,
    ] = await Promise.all([
      axios.get(serverUrl + "/api/recommendations"),
      axios.get(serverUrl + "/api/skills"),
      axios.get(serverUrl + "/api/projects"),
      axios.get(serverUrl + "/api/blogs"),
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
