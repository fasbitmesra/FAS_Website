import React from "react";
import TeamInfo from "../../api/TeamInfo";
import TeamInfo2 from "../../api/TeamInfo23";
import { ReactComponent as TeamBG } from "../../assets/backgrounds/Team-bg.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Team() {
  return (
    <>
      <div className="Team-container" id="team">
        <h1>Team</h1>
        <div className="Team-faculty">
          <div className="Faculty-card">
            <img src={TeamInfo.faculty.image} alt="..." />
            <TeamBG />
          </div>
          <p>{TeamInfo.faculty.name}</p>
          <p className="post">{TeamInfo.faculty.post}</p>
        </div>
        <h2>Executive Body 2023-24</h2>

        <div className="Team-grid">
          {TeamInfo.members.map((member, index) => (
            <div className="Member-card" key={member.name}>
              <div className={`Member-pic col-${index % 5}`}>
                <div className="Image-border">
                  <img src={member.image} alt="..." />
                </div>
                <div className="Social-icon-container">
                  <a href={member.facebookLink}>
                    <div className="Social-icon">
                      <FaFacebookF />
                    </div>
                  </a>
                  <a href={member.instagramLink}>
                    <div className="Social-icon">
                      <BsInstagram />
                    </div>
                  </a>
                  <a href={member.linkedinLink}>
                    <div className="Social-icon">
                      <FaLinkedinIn />
                    </div>
                  </a>
                </div>
                <TeamBG />
              </div>
              <p>{member.name}</p>
              <p className="post">{member.post}</p>
            </div>
          ))}
          
        </div>
        <h2>Executive Body 2022 -23</h2>
        <div className="Team-grid">
          {TeamInfo2.members.map((member, index) => (
            <div className="Member-card" key={member.name}>
              <div className={`Member-pic col-${index % 5}`}>
                <div className="Image-border">
                  <img src={member.image} alt="..." />
                </div>
                <div className="Social-icon-container">
                  <a href={member.facebookLink}>
                    <div className="Social-icon">
                      <FaFacebookF />
                    </div>
                  </a>
                  <a href={member.instagramLink}>
                    <div className="Social-icon">
                      <BsInstagram />
                    </div>
                  </a>
                  <a href={member.linkedinLink}>
                    <div className="Social-icon">
                      <FaLinkedinIn />
                    </div>
                  </a>
                </div>
                <TeamBG />
              </div>
              <p>{member.name}</p>
              <p className="post">{member.post}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
