import React, { Component } from "react";

class Recommendation extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    recommendation: "",
    submitStatus: "",
    submitMessage: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    // Send a post request
    let isSuccessful = true;

    // Show submit message
    if (isSuccessful) {
      this.setState({
        submitStatus: "text-info",
        submitMessage: `Hey ${this.state.name}. Thank you so much for your recommendation. I really appreciate it ♥`,
        name: "",
        email: "",
        company: "",
        designation: "",
        recommendation: ""
      });
    } else {
      this.setState({
        name: "",
        email: "",
        company: "",
        designation: "",
        recommendation: "",
        submitStatus: "text-danger",
        submitMessage:
          "Oops! Something went wrong. Couldn't send the recommendation! :("
      });
    }
  };

  render() {
    const {
      name,
      email,
      company,
      designation,
      recommendation,
      submitStatus,
      submitMessage
    } = this.state;
    return (
      <div className="container my-5 py-5">
        <div className="row justify-content-center py-5">
          <h1 className="font-weight-light text-center">
            <span className="text-info">Thank you! </span>for your taking your
            time
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
                <label htmlFor="recommendation">Recommendation *</label>
                <textarea
                  className="form-control"
                  name="recommendation"
                  rows="5"
                  value={recommendation}
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger float-right">
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
  }
}

export default Recommendation;
