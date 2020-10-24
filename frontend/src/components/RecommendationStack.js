import React from "react";
import { Consumer } from "../context";
import RecommendationCard from "./RecommendationCard";
import "../App.css";

function RecommendationStack() {
  return (
    <Consumer>
      {(value) => {
        const { recommendations } = value;
        return (
          <div className="container-fluid my-5">
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
              {recommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.id}
                  recommendation={recommendation}
                />
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default RecommendationStack;
