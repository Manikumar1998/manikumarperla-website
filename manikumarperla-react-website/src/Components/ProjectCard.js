import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
  render() {
    const { id, imageUrl, title, excerpt } = this.props.project;
    return (
      <div className="card shadow h-100">
        <img
          className="card-img-top p-2"
          src={imageUrl}
          alt="Project"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div
          className="card-footer text-center"
          style={{ backgroundColor: "white" }}
        >
          <h4 className="card-title">{title} </h4>
          <p className="card-text">
            {excerpt}
            <Link to={`/project/${id}`} className="stretched-link"></Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
