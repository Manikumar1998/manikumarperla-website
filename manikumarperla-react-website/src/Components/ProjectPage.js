import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../context";

class ProjectPage extends Component {
  state = {
    id: "",
    imageUrl: "",
    title: "",
    excerpt: "",
    body: ""
  };

  async componentDidMount() {
    console.log("this1");
    const { serverUrl } = this.props;
    const { id } = this.props.match.params;
    const res = await axios.get(serverUrl + `project?id=${id}`);
    const project = res.data.payload;
    this.setState({
      imageUrl: project.imageUrl,
      title: project.title,
      excerpt: project.excerpt,
      body: project.body
    });
  }

  render() {
    const { imageUrl, title, body } = this.state;
    return (
      <div className="container-fluid py-5 my-5">
        <div className="container shadow">
          <div className="row justify-content-center py-2">
            <img src={imageUrl} className="img-fluid" alt="" width="500px" />
          </div>
          <div className="text-center m-4">
            <div className="h1">{title}</div>
          </div>
          <div className="text-justify p-5">{body}</div>
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, refs) => (
  <Consumer>
    {context => (
      <ProjectPage {...props} serverUrl={context.serverUrl} refs={refs} />
    )}
  </Consumer>
));
