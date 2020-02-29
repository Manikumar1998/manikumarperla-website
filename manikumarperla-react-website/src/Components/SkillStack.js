import React, { Component } from "react";
import Skill from "./Skill";
import uuid from "uuid";

class SkillStack extends Component {
  state = {
    skills: [
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 4
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 2
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 1
      },
      {
        image: "Armeria.jpg",
        alt: "Armeria",
        totalStars: 3,
        activeStars: 3
      }
    ]
  };
  render() {
    const { skills } = this.state;
    const skillRow = [];
    const noOfSkillPerRow = 4;
    for (let index = 0; index < skills.length / noOfSkillPerRow; index++) {
      var row = skills.slice(
        index * noOfSkillPerRow,
        (index + 1) * noOfSkillPerRow
      );
      skillRow.push(
        <div
          key={uuid()}
          className="d-flex flex-row justify-content-around py-3"
        >
          {row.map(skill => (
            <Skill key={uuid()} skill={skill} />
          ))}
        </div>
      );
    }
    return (
      <div className="container-fluid my-auto bg-light">
        <div className="container text-center py-5">
          <h1 className="font-weight-light">
            <span className="text-info">Technology </span>stack
          </h1>
          <div className="lead">
            I design, develop and deliver with these weapons
          </div>
          <div className="d-flex flex-column py-5">{skillRow}</div>
        </div>
      </div>
    );
  }
}

export default SkillStack;
