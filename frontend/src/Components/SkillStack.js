import React from "react";
import Skill from "./Skill";
import uuid from "uuid";
import { Consumer } from "../context";

function SkillStack() {
  return (
    <Consumer>
      {(value) => {
        const { skills } = value;
        const skillRow = [];
        const noOfSkillPerRow = 4;
        for (let index = 0; index < skills.length / noOfSkillPerRow; index++) {
          var row = skills.slice(
            index * noOfSkillPerRow,
            (index + 1) * noOfSkillPerRow
          );
          skillRow.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">
              {row.map((skill) => (
                <Skill key={skill.id} skill={skill} />
              ))}
            </div>
          );
        }

        return (
          <div className="bg-light w-100">
            <div className="container text-center py-5">
              <h1 className="font-weight-light">
                <span className="text-info">Technology </span>stack
              </h1>
              <div className="lead pb-5">
                I design, develop and deliver with these weapons
              </div>
              {skillRow}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SkillStack;
