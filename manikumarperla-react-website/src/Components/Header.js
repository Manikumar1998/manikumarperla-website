import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container my-2">
          <Link className="navbar-brand text-dark font-weight-bold" to="/">
            {branding}
          </Link>
          <Link to="/contact" className="ml-auto mr-1">
            <button type="button" className="btn btn-outline-info ">
              Contact Me
            </button>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="fas fa-bars text-dark"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-4">
                <Link className="nav-link text-dark h6 my-auto" to="/">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: "Manikumar Perla"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
