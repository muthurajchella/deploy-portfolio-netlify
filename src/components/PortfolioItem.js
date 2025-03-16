import React from "react";

const PortfolioItem = ({ img, title, link, desc }) => {
  return (
    <a href={link} alt={desc} target="_blank" rel="noreferrer">
      <div className="portfolio__item">
        <img src={img} alt="" className="portfolio__img" />

        <div className="portfolio__hover">
          <h3 className="portfolio__title">{title}</h3>
        </div>

        {/* <div className="portfolio__modal">
        <div className="portfolio__modal-content"></div>
      </div> */}
      </div>
    </a>
  );
};

export default PortfolioItem;
