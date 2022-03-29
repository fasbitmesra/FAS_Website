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
            desc: "The Fine Arts Society, or FAS as it is known around campus, is a community of like-minded people sharing a strong passion for art and work together to create something beautiful and distinctive. FAS attracts imaginative, hardworking, and creative individuals. FAS has a significant impact on students' artistic backgrounds, which include paintings, crafts, sculptures, and decorations. As the institute's official design team, it also plays a vital role in the organisation of college fests.",
            image: FasLogo,
          })}
        </div>
        <div className="About-section" id="About-reverse">
          {AboutSection({
            title: "What We Do.",
            desc: "FAS contributes to the institute's creativity and design ideas. It also hosts a variety of workshops, ranging from digital to traditional techniques, enabling the students' overall development in the field of art. Spectra, the Annual Club Fest, and Deeprangni, the Diwali Fest, are two of FAS's main events. In addition, FAS conducts a number of PAN India events, workshops, and competitions. FAS also contributes in the major college fest BITOTSAV and the technical fest PANTHEON as the official design team and with its creative events.",
            image: GroupPhoto,
          })}
        </div>
      </div>
    </>
  );
}

export default About;
