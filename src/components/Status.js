import React from "react";
import { status } from "../data";
import parse from "html-react-parser";

const Status = () => {
  return (
    <>
      {status.map(({ no, title }, i) => {
        return (
          <div className="status__box" key={i}>
            <h3 className="status__no">{no}</h3>
            <p className="status__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Status;
