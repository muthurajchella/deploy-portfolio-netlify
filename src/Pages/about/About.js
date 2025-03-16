import React, { Suspense } from "react";
import Info from "../../components/Info";
import Status from "../../components/Status";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/muthuraj_resume.pdf";
import { resume } from "../../data";
import "./about.css";

const Skills = React.lazy(() => import("../../components/Skills"));
const ResumeItem = React.lazy(() => import("../../components/ResumeItem"));

const About = () => {
  return (
    <main className="section containeR">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download Cv
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="status grid">
            <Status />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Suspense fallback={<h1> </h1>}>
            <Skills />
          </Suspense>
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val, i) => {
              let html = [];
              if (val.category === "experience") {
                html.push(
                  <Suspense fallback={<h1> </h1>}>
                    <ResumeItem key={val.id} {...val} />
                  </Suspense>
                );
              }

              return html;
            })}
          </div>

          <div className="resume__data">
            {resume.map((val, i) => {
              let html = [];
              if (val.category === "education") {
                html.push(
                  <Suspense fallback={<h1> </h1>}>
                    <ResumeItem key={val.id} {...val} />
                  </Suspense>
                );
              }

              return html;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
