import React from "react";
import FasLogo from "../../assets/elements/FAS_logo(black).png";

const AboutSection = (props) => {
  return (
    <>
      <img src={FasLogo} alt="FAS Logo" />
      <div className="About-text">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

function About() {
  return (
    <>
      <div className="About-container">
        <div className="About-section">
          {AboutSection({
            title: "Who Are We?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          })}
        </div>
        <div className="About-section" id="About-reverse">
          {AboutSection({
            title: "What We Do.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          })}
        </div>
      </div>
    </>
  );
}

export default About;
