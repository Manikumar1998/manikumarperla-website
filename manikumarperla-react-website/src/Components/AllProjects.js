import React, { Component } from "react";
import { Consumer } from "../context";
import ProjectCard from "./ProjectCard";

class AllProjects extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          const { projects } = context;
          return (
            <div className="container my-5 py-5">
              <div className="row justify-content-center py-5">
                <h1 className="font-weight-light text-center">
                  All my<span className="text-info"> Projects</span>
                </h1>
              </div>
              <div className="row my-4 pt-4 justify-content-center">
                {projects.map(project => (
                  <div key={project.id} className="col-12 col-md-6 py-3">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AllProjects;
