import React, { Component } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

class BlogPage extends Component {
  state = {
    id: "",
    imageUrl: "",
    title: "",
    excerpt: "",
    body: "",
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      process.env.REACT_APP_SERVER + `/api/blog?id=${id}`
    );
    const blog = res.data.payload;
    this.setState({
      id: blog.id,
      imageUrl: blog.imageUrl,
      title: blog.title,
      excerpt: blog.excerpt,
      body: blog.body,
    });
  }

  render() {
    const { imageUrl, title, body } = this.state;
    return (
      <div className="py-5 my-5">
        <div className="container p-5">
          <div className="justify-content-center py-2">
            <img src={imageUrl} alt={title} className="w-100" />
          </div>
          <div className="text-center my-5">
            <h1 className="font-weight-light">{title}</h1>
          </div>
          <div className="text-justify">
            <ReactMarkdown source={body} />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPage;
