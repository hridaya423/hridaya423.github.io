import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import getDetails from "./helperFunctions";

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
                <getDetails skill={skills} name={skills.skillName}/>
                <b><p style={{ color: skills.color, fontSize: '15px' }}>{skills.skillName}</p></b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
