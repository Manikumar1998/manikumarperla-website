import React, { Component } from "react";
import uuid from "uuid";

class Skill extends Component {
  render() {
    const { imageUrl, name, starsTotal, starsActive } = this.props.skill;
    const rating = [];
    for (let i = 0; i < starsTotal; i++) {
      if (i < starsActive) {
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
          src={imageUrl}
          alt={name}
          style={skillStyle}
        />
        <div className="justify-content-around">{rating}</div>
      </div>
    );
  }
}

export default Skill;
