import React, { Component } from "react";
import { Consumer } from "../context";
import uuid from "uuid";

class Recommendation extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    message: "",
    submitStatus: "",
    submitMessage: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (action, handler, event) => {
    event.preventDefault();
    const { name, email, company, designation, message } = this.state;
    const newItem = {
      id: uuid(),
      name,
      email,
      company,
      designation,
      message
    };

    handler(action, newItem);
    // Send a post request
    let isSuccessful = true;

    // Show submit message
    if (isSuccessful) {
      this.setState({
        submitStatus: "text-info",
        submitMessage: `Hey ${this.state.name}. Thank you so much for your message. I really appreciate it ♥`
      });
    } else {
      this.setState({
        submitStatus: "text-danger",
        submitMessage:
          "Oops! Something went wrong. Couldn't send the message! :("
      });
    }
    this.setState({
      name: "",
      email: "",
      company: "",
      designation: "",
      message: ""
    });
  };

  render() {
    const {
      name,
      email,
      company,
      designation,
      message,
      submitStatus,
      submitMessage
    } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container my-5 py-5">
              <div className="row justify-content-center py-5">
                <h1 className="font-weight-light text-center">
                  <span className="text-info">Thank you! </span>for your taking
                  your time
                </h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-10 col-lg-5">
                  <form
                    onSubmit={this.onSubmit.bind(
                      this,
                      "ADD_RECOMMENDATION",
                      dispatch
                    )}
                  >
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
                      <label htmlFor="company">Company / Institution *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        value={company}
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="designation">Designation *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="designation"
                        value={designation}
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Recommendation *</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        value={message}
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger float-right"
                    >
                      Lot's of love!
                    </button>
                  </form>
                </div>
              </div>
              <div className="row justify-content-center py-5 mx-2">
                <h5 className="font-weight-black text-center">
                  <span className={submitStatus}>{submitMessage}</span>
                </h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Recommendation;
