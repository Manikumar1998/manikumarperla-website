import React from "react";
import Manikumar from "../assets/manikumar-perla.jpg";

function Title(props) {
  return (
    <div className="container py-5">
      <div className="row my-5">
        <div className="col-sm-12 col-md-6 my-4">
          <img
            className="img-fluid rounded-circle w-75 mx-auto d-block"
            src={Manikumar}
            alt="Manikumar Perla"
          />
        </div>
        <div className="col-sm-12 col-md-6 text-center my-auto">
          <div className="display-4" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info">{props.name}</span>
          </div>
          <h4 className="font-weight-light">{props.lead}</h4>
        </div>
      </div>
    </div>
  );
}

export default Title;
