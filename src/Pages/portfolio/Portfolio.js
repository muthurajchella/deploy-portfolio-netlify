import React, { Suspense } from "react";
import { portfolio } from "../../data";
import "./portfolio.css";

const PortfolioItem = React.lazy(() =>
  import("../../components/PortfolioItem")
);

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio__container containeR grid">
        {portfolio.map((item, i) => {
          return (
            <Suspense fallback={<h1> </h1>}>
              <PortfolioItem key={item.id} {...item} />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
