import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div>
        <h1>
          Skills
        </h1>
      </div>
      <div
        className="skills"
      >
        <div className="icon">
          <i class="fas fa-cubes"></i>
        </div>
        <div className="icon">
          <i class="fab fa-figma"></i>
        </div>
        <div className="icon">
          <i class="fas fa-drafting-compass"></i>
        </div>
        <div className="icon">
          <i class="fas fa-palette"></i>
        </div>
        <div className="icon">
          <i class="fas fa-browser"></i>
        </div>
        {/* <div className="icon">
          <i className="fab fa-js-square"></i>
        </div>
        <div className="icon">
          <i className="fab fa-git-alt"></i>
        </div>
        <div className="icon">
          <i className="fab fa-sass"></i>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
