import React, { Component } from "react";
import { Consumer } from "../context";
import RecommendationCard from "./RecommendationCard";

class RecommendationStack extends Component {
  render() {
    const scrollingWrapperFlexBox = {
      display: "flex",
      flexWrap: "nowrap",
      overflowX: "auto",
      paddingBottom: "50px"
    };

    return (
      <Consumer>
        {value => {
          const { recommendations } = value;
          return (
            <div className="container-fluid">
              <div className="row" style={scrollingWrapperFlexBox}>
                {recommendations.map(recommendation => (
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
}

export default RecommendationStack;
