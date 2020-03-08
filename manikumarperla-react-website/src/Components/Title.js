import React from "react";
import Manikumar from "../assets/manikumar-perla.jpg";
import PropTypes from "prop-types";

function Title(props) {
  const { name, lead } = props;
  return (
    <div className="container py-5">
      <div className="row my-5 align-items-center">
        <div className="col-sm-12 col-md-6 my-4">
          <img
            className="img-fluid rounded-circle w-75 mx-auto d-block"
            src={Manikumar}
            alt="Manikumar Perla"
          />
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <div className="display-4" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{lead}</h4>
        </div>
      </div>
    </div>
  );
}

Title.defaultProps = {
  name: "Manikumar Perla",
  lead: "I am a software engineer at LINE Corporation"
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired
};

export default Title;
