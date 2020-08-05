import React, { Component } from "react";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    submitStatus: "",
    submitMessage: "",
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();

    // Send a post request
    let isSuccessful = true;

    // Show submit message
    if (isSuccessful) {
      this.setState({
        submitStatus: "text-info",
        submitMessage: `Hey ${this.state.name}. I've received your message. Can't wait to work with you! :)`,
        name: "",
        email: "",
        description: "",
      });
    } else {
      this.setState({
        name: "",
        email: "",
        description: "",
        submitStatus: "text-danger",
        submitMessage: "Oops! Something went wrong :(",
      });
    }
  };

  render() {
    const {
      name,
      email,
      description,
      submitStatus,
      submitMessage,
    } = this.state;
    return (
      <div className="container my-5 py-5">
        <div className="row justify-content-center py-5">
          <h1 className="font-weight-light text-center">
            <span className="text-info">Thank you! </span>for your interest
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">
                  Tell me about your project *
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  value={description}
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark float-right"
                style={{ backgroundColor: "black" }}
              >
                Let's talk business
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center py-5 mx-2">
          <h5 className="text-center">
            <span className={submitStatus}>{submitMessage}</span>
          </h5>
        </div>
      </div>
    );
  }
}

export default ContactPage;
