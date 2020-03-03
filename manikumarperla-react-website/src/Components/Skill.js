import React, { Component } from "react";
import uuid from "uuid";
import { Link } from "react-router-dom";

class Skill extends Component {
  render() {
    const { id, image, alt, totalStars, activeStars } = this.props.skill;
    const rating = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < activeStars) {
        rating.push(
          <span key={uuid()} className="text-info">
            ★
          </span>
        );
      } else {
        rating.push(<span key={uuid()}>★</span>);
      }
    }
    const skillStyle = {
      width: "100px",
      height: "100px"
    };

    return (
      <div>
        <img
          className="rounded-circle img-fluid"
          src={require(`../assets/${image}`)}
          alt={alt}
          style={skillStyle}
        />
        <div className="justify-content-around">{rating}</div>
      </div>
    );
  }
}

export default Skill;
