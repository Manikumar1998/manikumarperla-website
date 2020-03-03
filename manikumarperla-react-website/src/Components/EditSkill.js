import React, { Component } from "react";
import { Consumer } from "../context";

class EditSkill extends Component {
  state = {
    id: "",
    logoUrl: "",
    totalStars: "",
    activeStars: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    console.log("Submitted");
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { id } = this.props.match.params;
          const { logoUrl, totalStars, activeStars } = this.state;
          return (
            <div className="container my-5 py-5">
              <div className="row justify-content-center py-5">
                <h1 className="font-weight-light text-center">
                  Edit <span className="text-info">Skill</span>
                </h1>
              </div>
              <div className="row justify-content-center">
                <div className="col-10 col-lg-5">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="logoUrl">Logo Url *</label>
                      <input
                        type="text"
                        name="logoUrl"
                        className="form-control"
                        value={logoUrl}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="totalStars">Total stars *</label>
                      <input
                        type="text"
                        name="totalStars"
                        className="form-control"
                        value={totalStars}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="activeStars">Active stars *</label>
                      <input
                        type="text"
                        name="activeStars"
                        className="form-control"
                        value={activeStars}
                        onChange={this.onChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark float-right"
                      style={{ backgroundColor: "black" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default EditSkill;
