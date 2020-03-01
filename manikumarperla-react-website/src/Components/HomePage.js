import React from "react";
import Title from "./Title";
import SkillStack from "./SkillStack";
import ProjectSection from "./ProjectSection";
import About from "./About";

function HomePage() {
  return (
    <div className="HomePage">
      <Title />
      <SkillStack />
      <ProjectSection />
      <About />
    </div>
  );
}

export default HomePage;
