import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav className="navbar navbar-expand-md fixed-top bg-white">
        <div className="container my-2">
          <Link className="navbar-brand text-dark font-weight-bold" to="/">
            {branding}
          </Link>
          {/* Bring ml-auto to Link below. talk about mx-3*/}
          <Link to="/contact" className="ml-auto mx-3">
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
              {/* Talk about mx-1 and Projects */}
              <Link
                className="nav-item nav-link text-dark h6 my-auto mx-1"
                to="/project/all"
              >
                Projects
              </Link>
              <Link
                className="nav-item nav-link text-dark h6 my-auto mx-1"
                to="/blog/all"
              >
                Blogs
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
