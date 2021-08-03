import React from "react";
import "./techStack.scss";
import { techStackData } from "../../portfolio";

export default function TechStackCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.name}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          <div>
            <div className="software-skills-main-div">
              <ul className="dev-icons">
                {cardInfo.icons.map((icon, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={icon.skillName}
                    >
                      <i
                        className={icon.fontAwesomeClassname}
                        style={{ color: icon.color }}
                      ></i>
                      <p>{icon.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}
