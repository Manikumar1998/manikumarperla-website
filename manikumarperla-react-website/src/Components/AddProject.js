import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

class AddProject extends Component {
  state = {
    imageUrl: "",
    title: "",
    excerpt: "",
    mdContent: ""
  };

  handleChange = value => {
    this.setState({ mdContent: value });
    console.log(this.mdContent);
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    // Validate and save the values in the database
  };

  render() {
    const { imageUrl, title, excerpt, mdContent } = this.state;
    const markdown = `This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.`;
    const ReactMarkdown = require("react-markdown/with-html");
    const input = "# This is a header\nAnd this is a paragraph";
    return (
      <div className="container-fluid py-5 my-5">
        <h1 className="font-weight-light text-center">
          Add <span className="text-info">Project</span>
        </h1>
        <div className="row px-5">
          <div className="col-6 px-5">
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
                  hideIcons: ["preview", "side-by-side", "fullscreen", "|"]
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
                <img src={imageUrl} maxWidth="500px" />
              </div>
              <div className="row justify-content-center px-5">
                <h1 className="font-weight-light text-center">{title}</h1>
              </div>
              <div className="p-5">
                <ReactMarkdown source={mdContent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
