import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { branding } = this.props;
    return (
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container my-2">
          <a className="navbar-brand text-dark font-weight-bold" href="#">
            {branding}
          </a>
          <button type="button" className="btn btn-outline-info ml-auto mr-1">
            Contact Me
          </button>
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
                <a className="nav-link text-dark h6 my-auto" href="#">
                  Blogs
                </a>
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
