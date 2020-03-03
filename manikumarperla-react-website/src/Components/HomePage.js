import React from "react";
import Title from "./Title";
import SkillStack from "./SkillStack";
import ProjectSection from "./ProjectSection";
import About from "./About";
import RecommendationStack from "./RecommendationStack";

function HomePage() {
  return (
    <div className="HomePage">
      <Title />
      <RecommendationStack />
      <SkillStack />
      <ProjectSection />
      <About />
    </div>
  );
}

export default HomePage;
