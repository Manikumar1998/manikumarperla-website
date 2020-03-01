import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectCard extends Component {
  render() {
    const { id, imageUrl, title, excerpt } = this.props.project;
    return (
      <div className="col-12 col-md-4 py-3">
        <div className="card shadow">
          <img
            className="card-img-top img-fluid"
            src={require(`../assets/${imageUrl}`)}
            alt="Project"
          />
          <div className="card-footer text-center">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">
              {excerpt}
              <Link
                to={`project/${id}`}
                className="text-dark stretched-link"
              ></Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
