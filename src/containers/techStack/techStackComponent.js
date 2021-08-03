import React, {useContext} from "react";
import "./techStack.scss";
import TechStackCard from "../../components/techStacks/techStack";
import {techStackData} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function TechStack() {
  const {isDark} = useContext(StyleContext);
  if (!techStackData.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="tech-stack">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {techStackData.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {techStackData.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {techStackData.techStacks.map((card, i) => {
              return (
                <TechStackCard
                  key={i}
                  isDark={isDark}
                  cardInfo={card}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
