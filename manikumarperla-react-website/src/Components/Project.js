import React, { Component } from "react";

class ProjectPage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="container-fluid py-5 my-5">
        <div className="container shadow">
          <div className="row justify-content-center py-2">
            <img src={require("../assets/Armeria.jpg")} alt="" width="500px" />
          </div>
          <div className="row justify-content-center py-2">
            <div className="h1">This is the title of the project {id}</div>
          </div>
          <div className="text-justify p-5">
            This is some random content for the blog
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
