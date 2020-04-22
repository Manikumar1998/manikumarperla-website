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
    body: "",
    textColor: "",
    serverMessage: "",
  };

  handleChange = (value) => {
    this.setState({ body: value });
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = async (serverUrl, event) => {
    event.preventDefault();
    const res = await axios.post(serverUrl + "project/add", {
      id: uuid(),
      ...this.state,
    });
    const isSuccessful = res.data.successful;
    if (isSuccessful) {
      this.setState({
        textColor: "text-info",
        serverMessage: res.data.message,
      });
    } else {
      this.setState({
        textColor: "text-danger",
        serverMessage: res.data.message,
      });
    }
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            imageUrl,
            title,
            excerpt,
            body,
            textColor,
            serverMessage,
          } = this.state;
          const { serverUrl } = value;
          return (
            <div className="container-fluid py-5 my-5">
              <h1 className="font-weight-light text-center my-5">
                Add <span className="text-info">Project</span>
              </h1>
              <div className="row px-lg-5 px-3">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form
                    autoComplete={"off"}
                    onSubmit={this.onSubmit.bind(this, serverUrl)}
                  >
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
                          "|",
                        ],
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-dark btn-block my-5"
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                  </form>
                  <div className="text-center">
                    <h5 className={textColor}>{serverMessage}</h5>
                  </div>
                </div>

                <div className="col-12 col-lg-6 my-4 markdownRender">
                  <div className="justify-content-center">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <div className="text-center my-5">
                    <h1 className="font-weight-light">{title}</h1>
                  </div>
                  <ReactMarkdown source={body} />
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
