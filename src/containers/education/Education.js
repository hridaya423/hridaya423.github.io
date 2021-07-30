import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Education() {
  if (educationInfo.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {educationInfo.schools.map((school, i) => {
                  return (
                    <EducationCard key={i} school={school} /> );
               })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
