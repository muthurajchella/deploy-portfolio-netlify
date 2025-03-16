import React from "react";
import parse from "html-react-parser";

const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <>
      <div className="resume__item">
        <div className="resume__icon">{icon}</div>
        <sapn className="resume__date">{year}</sapn>
        <div className="resume__subtitle">{parse(title)}</div>
        <p className="resume__description">{desc}</p>
      </div>
    </>
  );
};

export default ResumeItem;
