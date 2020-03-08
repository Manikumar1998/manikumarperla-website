import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../context";

class ProjectPage extends Component {
  state = {
    id: "",
    imageUrl: "",
    title: "",
    excerpt: "",
    body: "",
    serverUrl: ""
  };

  async componentDidMount() {
    const { id } = this.props;
    const res = await axios.post("http://localhost:5000/project", { id: id });
    const project = res.data.payload;

    this.setState({
      imageUrl: project.imageUrl,
      title: project.title,
      excerpt: project.excerpt,
      body: project.body
    });
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { imageUrl, title, body } = this.state;

          return (
            <div className="container-fluid py-5 my-5">
              <div className="container shadow">
                <div className="row justify-content-center py-2">
                  <img src={imageUrl} alt="" width="500px" />
                </div>
                <div className="row justify-content-center py-2">
                  <div className="h1">{title}</div>
                </div>
                <div className="text-justify p-5">{body}</div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ProjectPage;
