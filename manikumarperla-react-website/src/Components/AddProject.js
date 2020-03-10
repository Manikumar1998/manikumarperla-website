import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { Consumer } from "../context";
import uuid from "uuid";

class AddProject extends Component {
  state = {
    imageUrl: "",
    title: "",
    excerpt: "",
    body: ""
  };

  handleChange = value => {
    this.setState({ body: value });
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = async (serverUrl, event) => {
    event.preventDefault();
    await axios.post(serverUrl + "projects/add", {
      id: uuid(),
      ...this.state
    });
    this.setState({
      imageUrl: "",
      title: "",
      excerpt: "",
      body: ""
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { imageUrl, title, excerpt, body } = this.state;
          const { serverUrl } = value;
          return (
            <div className="container-fluid py-5 my-5">
              <h1 className="font-weight-light text-center">
                Add <span className="text-info">Project</span>
              </h1>
              <div className="row px-5">
                <div className="col-6 px-5">
                  <form onSubmit={this.onSubmit.bind(this, serverUrl)}>
                    <div className="form-group">
                      <label htmlFor="name">Featured Image Url *</label>
                      <input
                        type="text"
                        name="imageUrl"
                        className="form-control"
                        value={imageUrl}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Title *</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={title}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Excerpt *</label>
                      <input
                        type="text"
                        name="excerpt"
                        className="form-control"
                        value={excerpt}
                        onChange={this.onChange}
                      />
                    </div>
                    <SimpleMDE
                      onChange={this.handleChange}
                      options={{
                        hideIcons: [
                          "preview",
                          "side-by-side",
                          "fullscreen",
                          "|"
                        ]
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-block float-right my-5"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                  </form>
                </div>

                <div className="col-6 py-3">
                  <div className="container shadow">
                    <div className="row justify-content-center py-5">
                      <img
                        src={imageUrl}
                        alt=""
                        style={{ maxWidth: "400px" }}
                      />
                    </div>
                    <div className="row justify-content-center px-5">
                      <h1 className="font-weight-light text-center">{title}</h1>
                    </div>
                    <div className="p-5">
                      <ReactMarkdown source={body} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddProject;
