import React, {createRef, useState, useContext} from "react";
import "./EducationCard.scss";
import ColorThief from "colorthief";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <p
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
            style={{ textAlign: "center" }}
          >
            {item}
          </p>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);
   return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{school.schoolName}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={school.logo}
          alt={school.schoolName}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {school.subHeader}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {school.duration}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {school.subHeader}
        </p>
        <h3 style={{ textAlign: "center" }}>Description</h3>
          <GetDescBullets descBullets={school.descBullets} isDark={isDark} />
      </div>
    </div>
  );
}
