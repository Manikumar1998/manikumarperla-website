import React, { Component } from "react";
import Project from "./Project";
import uuid from "uuid";

class ProjectSection extends Component {
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
    ]
  };
  render() {
    const { projects } = this.state;
    return (
      <div class="container py-5 text-center">
        <h1 class="font-weight-light">
          My <span class="text-info">Projects</span>
        </h1>
        <div class="lead">I build products. Just like this website</div>
        <div class="row my-4 pt-4 justify-content-center">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div class="row my-5">
          <div class="col-12 text-right">
            <a href="#" class="text-dark">
              <h5>
                See my projects <i class="fas fa-arrow-right align-middle"></i>
              </h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSection;
