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
                  {skills.skillName === "Tensorflow" || skills.skillName === "Keras" || skills.skillName === "PyTorch" ? <img src={skills.image} alt={skills.skillName}></img> : <i className={skills.fontAwesomeClassname} style={{ color: skills.color }}></i>}
                <b><p style={{ color: skills.color, fontSize: '15px' }}>{skills.skillName}</p></b>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
