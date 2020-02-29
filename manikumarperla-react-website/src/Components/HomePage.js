import React from "react";
import Title from "./Title";
import SkillStack from "./SkillStack";
import ProjectSection from "./ProjectSection";

function HomePage() {
  return (
    <div className="HomePage">
      <Title />
      <SkillStack />
      <ProjectSection />
    </div>
  );
}

export default HomePage;
