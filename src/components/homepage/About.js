import React from "react";
import FasLogo from "../../assets/elements/FAS_logo(black).png";
import GroupPhoto from "../../assets/elements/group_photo.jpg";

function About() {
  const AboutSection = (props) => {
    return (
      <>
        <img src={props.image} alt="FAS Logo" />
        <div className="About-text">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="About-container" id="about">
        <div className="About-section">
          {AboutSection({
            title: "Who Are We?",
            desc: "The Fine Arts Society, known around the campus as FAS, is a community of like-minded individuals that have a common passion that is  the pursuit of art and collaborate together to create something beautiful and unique. FAS has people who are innovative, hardworking, and creative. FAS plays an important role in shaping students' creative background which includes paintings, crafts, sculptors and decorations. It also plays a key part in the organization as the design team decorating the college during fests.",
            image: FasLogo,
          })}
        </div>
        <div className="About-section" id="About-reverse">
          {AboutSection({
            title: "What We Do.",
            desc: "FAS contributes to the institute's creativity and design ideas. It also organizes various workshops ranging from digital to traditional techniques for the all-round development of the students in the field of art. Main events of FAS are Spectra, the Annual Club fest and Deeprangni, the Diwali fest. Along with this several PAN India events, workshops and competitions are also organized by FAS. The major college fest BITOTSAV and technical fest PANTHEON decoration is also done by the members of FAS.",
            image: GroupPhoto,
          })}
        </div>
      </div>
    </>
  );
}

export default About;
