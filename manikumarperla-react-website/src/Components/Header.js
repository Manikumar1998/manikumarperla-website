import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav className="navbar navbar-expand-sm fixed-top bg-white">
        <div className="container my-2">
          <Link className="navbar-brand text-dark font-weight-bold" to="/">
            {branding}
          </Link>
          {/* Bring ml-auto to Link below */}
          <Link to="/contact" className="ml-auto">
            <button type="button" className="btn btn-outline-info">
              Contact Me
            </button>
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapseNav"
          >
            <span className="fas fa-bars text-dark"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="collapseNav"
          >
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link text-dark h6 mx-3 my-auto"
                to="/project/all"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: "Manikumar Perla",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
