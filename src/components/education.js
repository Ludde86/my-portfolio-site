import React from "react";
import "./education.css";

const Education = (props) => {
  return (
    <div className="education-content">
      <div className="education-item">
        <text className="education-year">
          {props.startYear} - {props.endYear}
        </text>
        <text className="education-title">{props.schoolName}</text>
      </div>

      <div className="education-description">
        <p>{props.schoolDescription}</p>
      </div>
    </div>
  );
};

export default Education;
