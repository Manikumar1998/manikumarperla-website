import React, { Component } from "react";

class Project extends Component {
  render() {
    const { imageUrl, title, excerpt } = this.props.project;
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
              <a href="/" className="text-dark stretched-link"></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
