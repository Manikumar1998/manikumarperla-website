import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../context";

class ProjectSection extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { projects } = value;
          return (
            <div className="container py-5 text-center">
              <h1 className="font-weight-light">
                My <span className="text-info">Projects</span>
              </h1>
              <div className="lead">
                I build products. Just like this website
              </div>
              <div className="row my-4 pt-4 justify-content-center">
                {projects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <div className="row my-5">
                <div className="col-12 text-right">
                  <a href="/" className="text-dark">
                    <h5>
                      See my projects{" "}
                      <i className="fas fa-arrow-right align-middle"></i>
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ProjectSection;
