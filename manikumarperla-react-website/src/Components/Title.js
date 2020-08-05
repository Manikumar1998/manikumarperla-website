import React from "react";
import Manikumar from "../assets/manikumar-perla.jpg";
import PropTypes from "prop-types";

function Title(props) {
  const { name, lead } = props;
  return (
    // Add py-5 to container below
    <div className="container">
      <div className="row text-center align-items-center py-5 my-5">
        <div className="col-sm-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={Manikumar}
            alt="Manikumar Perla"
          />
        </div>
        <div className="col-sm-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
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
  lead: "I am a full stack developer from India",
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
};

export default Title;
