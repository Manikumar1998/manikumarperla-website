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
    const [
      resultRecommendations,
      resultSkills,
      resultProjects,
      resultBlogs,
    ] = await Promise.all([
      axios.get(process.env.REACT_APP_SERVER + "/api/recommendations"),
      axios.get(process.env.REACT_APP_SERVER + "/api/skills"),
      axios.get(process.env.REACT_APP_SERVER + "/api/projects"),
      axios.get(process.env.REACT_APP_SERVER + "/api/blogs"),
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
