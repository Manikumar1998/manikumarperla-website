import React, { Component } from "react";

class RecommendationCard extends Component {
  render() {
    const {
      name,
      company,
      designation,
      recommendationMessage
    } = this.props.recommendation;
    return (
      <div className="col-12 col-lg-4 col-md-4">
        <div className="card text-center shadow h-100">
          <div className="card-body">
            <p className="card-text h4">{recommendationMessage}</p>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} @ {company}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendationCard;
