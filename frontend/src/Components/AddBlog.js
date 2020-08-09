import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import uuid from "uuid";

class AddBlog extends Component {
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

  onSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(
      process.env.REACT_APP_SERVER + "/api/blog/add",
      {
        id: uuid(),
        ...this.state,
      }
    );
    const isSuccessful = res.data.isSuccessful;
    if (isSuccessful) {
      this.setState({
        textColor: "text-info",
        serverMessage: "Blog added successfully",
      });
    } else {
      this.setState({
        textColor: "text-danger",
        serverMessage: "Oops! something went wrong",
      });
    }
  };

  render() {
    const {
      imageUrl,
      title,
      excerpt,
      body,
      textColor,
      serverMessage,
    } = this.state;
    return (
      <div className="container-fluid py-5 my-5">
        <h1 className="font-weight-light text-center">
          Add <span className="text-info">Blog</span>
        </h1>
        <div className="row px-lg-5">
          <div className="col-12 col-lg-6 px-lg-5">
            <form onSubmit={this.onSubmit}>
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
                  hideIcons: ["preview", "side-by-side", "fullscreen", "|"],
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
              <img src={imageUrl} alt={title} className="w-100" />
            </div>
            <div className="text-center my-5">
              <h1 className="font-weight-light">{title}</h1>
            </div>
            <ReactMarkdown source={body} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddBlog;
