import React from "react";
import { useGlobalContext } from "../Context/context";

import SingleProject from "./SingleProject";

const Projects = () => {
  const { frontendMentor, works, backend, proyectsRef } = useGlobalContext();
  return (
    <section className="projects" ref={proyectsRef}>
      <h1 className="section-title">Proyectos</h1>

      <div className="projects-container">
        <div className="projects-frontend-mentor">
          <h1
            className="projects-title"
            data-aos="fade-up"
            data-aos-offset="250"
          >
            Frontend Mentor
          </h1>
          <div className="works-container">
            {frontendMentor.map((item, index) => {
              return <SingleProject key={index} {...item} />;
            })}
          </div>
          <div className="more-projects" data-aos="fade-up">
            <div className="underline"></div>
            <a
              href="https://www.frontendmentor.io/profile/victor-carancio/solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más proyectos
            </a>
          </div>
        </div>
        <div className="projects-frontend-mentor">
          <h1
            className="projects-title"
            data-aos="fade-up"
            data-aos-offset="250"
          >
            Backend
          </h1>
          <div className="works-container">
            {backend.map((item, index) => {
              return <SingleProject key={index} {...item} />;
            })}
          </div>
        </div>
        <div className="projects-freelance">
          <h1
            className="projects-title"
            data-aos="fade-up"
            data-aos-offset="250"
          >
            Trabajos realizados como freelancer
          </h1>
          {/*  <p>Trabajos realizados recientemente como freelance</p> */}
          <div className="works-container">
            {works.map((item, index) => {
              return <SingleProject key={index} {...item} />;
            })}
          </div>
        </div>
      </div>

      <div className="separation"></div>
    </section>
  );
};

export default Projects;
