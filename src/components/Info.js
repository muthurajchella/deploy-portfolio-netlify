import React from "react";
import { personalInfo } from "../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, i) => {
        return (
          <li className="info__item" key={i}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
