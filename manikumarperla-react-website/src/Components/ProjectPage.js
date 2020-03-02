import React, { Component } from "react";
import Project from "./Project";

class ProjectPage extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <Project id={id} />
      </div>
    );
  }
}

export default ProjectPage;
