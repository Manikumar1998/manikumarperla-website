import React from "react";
import Title from "./Title";
import SkillStack from "./SkillStack";
import ProjectSection from "./ProjectSection";
import About from "./About";
import RecommendationStack from "./RecommendationStack";
import BlogSection from "./BlogSection";

function HomePage() {
  return (
    <div className="HomePage">
      <Title />
      <RecommendationStack />
      <SkillStack />
      <ProjectSection />
      <About />
      <BlogSection />
    </div>
  );
}

export default HomePage;
