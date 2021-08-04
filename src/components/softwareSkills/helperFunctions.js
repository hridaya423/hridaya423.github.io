import React from 'react';

const getDetails = (skill, name) => {
  if name == "Tensorflow" || name == "Keras" || name == "PyTorch" {
    return <img src={skill.image} alt={name} ></img>
  } else {
    return <i className={skills.fontAwesomeClassname} style={{ color: skills.color }}></i>
  }
}

export default getDetails
