import React, { Component } from "react";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    description: ""
  };

  render() {
    return (
      <div className="container my-5 py-5">
        <div className="row justify-content-center py-5">
          <h1 className="font-weight-light text-center">
            <span className="text-info">Thank you! </span>for your interest
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <form action="">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Tell me about your project</label>
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="A short note on your project"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
