import React from "react";
import Profile from "../../assets/Home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Muthuraj ChellaDuari.</span> Software Engineer
          </h1>

          <p className="home__description">
            Front-End Developer with 3+ years of front-end development
            experience and 1 year of experience as a Quality Supervisor in
            mechanical engineering, totaling 4+ years of overall work
            experience. Proficient in React.js, Vite, GraphQL, Redux, and
            Context API, specializing in scalable and high-performance web
            applications. Developed a fully automated IoT admin dashboard with
            real-time data visualization using GraphQL, similar to Facebook’s
            dashboard. Passionate about full-stack development, currently
            expanding skills in Node.js and MongoDB to transition into a MERN
            stack developer.
          </p>

          <Link to={"/about"} className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"> </div>
    </section>
  );
};

export default Home;
