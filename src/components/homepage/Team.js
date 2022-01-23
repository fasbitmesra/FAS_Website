import React from "react";
import TeamInfo from "../../api/TeamInfo";
import { ReactComponent as TeamBG } from "../../assets/backgrounds/Team-bg.svg";

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

        <div className="Team-grid">
          {TeamInfo.members.map((member, index) => (
            <div className="Member-card">
              <div className={`Member-pic col-${index % 5}`}>
                <img src={member.image} alt="..." />
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
