import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img src={skills.img} alt={skills.skillName} style={{ width: "50px", height: "50px" }}></img>
                <b><p style={{ color: skills.color, fontSize: '15px' }}>{skills.skillName}</p></b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
