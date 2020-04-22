import React from "react";
import { Consumer } from "../context";
import BlogCard from "./BlogCard";

function AllBlogs() {
  return (
    <Consumer>
      {(context) => {
        const { blogs } = context;
        return (
          <div className="container text-center my-5 py-5">
            <div className="py-5">
              <h1 className="font-weight-light text-center">
                All my<span className="text-info"> Blogs</span>
              </h1>
            </div>
            <div className="row my-4 pt-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="col-12 col-md-6 py-3">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AllBlogs;
