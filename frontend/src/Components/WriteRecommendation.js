import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
import uuid from "uuid";

class WriteRecommendation extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    recommendationMessage: "",
    textColor: "",
    serverMessage: "",
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = async (action, handler, event) => {
    event.preventDefault();
    const {
      name,
      email,
      company,
      designation,
      recommendationMessage,
    } = this.state;
    const newItem = {
      id: uuid(),
      name,
      email,
      company,
      designation,
      recommendationMessage,
    };

    const res = await axios.post(
      process.env.REACT_APP_SERVER + "/api/recommendation/add",
      newItem
    );
    const isSuccessful = res.data.isSuccessful;

    handler(action, newItem);
    // Show submit message
    if (isSuccessful) {
      this.setState({
        textColor: "text-info",
        serverMessage:
          "Thank you so much for your recommendation. Much appreciated! ♥",
        name: "",
        email: "",
        company: "",
        designation: "",
        recommendationMessage: "",
      });
    } else {
      this.setState({
        textColor: "text-danger",
        serverMessage:
          "Oops! something went wrong. Couldn't save your recommendation. Don't worry, I notified Manikumar about this!",
      });
    }
  };

  render() {
    const {
      name,
      email,
      company,
      designation,
      recommendationMessage,
      textColor,
      serverMessage,
    } = this.state;
    return (
      <Consumer>
        {(value) => {
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
                      <label htmlFor="recommendationMessage">
                        Recommendation *
                      </label>
                      <textarea
                        className="form-control"
                        name="recommendationMessage"
                        rows="5"
                        value={recommendationMessage}
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
              <div className="py-5 mx-2 text-center">
                <h5 className={textColor}>{serverMessage}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default WriteRecommendation;
