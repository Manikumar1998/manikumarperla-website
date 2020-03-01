import React, { Component } from "react";
import Project from "./Project";
import Header from "./Header";
import Footer from "./Footer";

class ProjectPage extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);
    return (
      <div>
        <Project id={id} />
      </div>
    );
  }
}

export default ProjectPage;
