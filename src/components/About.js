import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../Context/context";
import cv from "../Assets/doc/Victor-Carancio-CV.pdf";

const About = () => {
  const {
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaReact,
    FaWordpress,
    SiTypescript,
    IoLogoJavascript,
    FaNodeJs,
    about,
    FaBootstrap,
    SiMongodb,
    GrMysql,
  } = useGlobalContext();
  return (
    <section className="about">
      <div className="about-container">
        <div className="presentation">
          <span className="presentation-head" data-aos="fade-right">
            Hola, mi nombre es
          </span>
          <h1
            className="presentation-title"
            data-aos="fade-left"
            data-aos-offset="300"
          >
            <span className="info-name">Victor Carancio</span>, desarrollador
            web.
          </h1>
        </div>
        <div className="info">
          <div className="about-info" data-aos="fade-up">
            <h1 className="section-title">Sobre mí</h1>
            <div className="info-p">
              {" "}
              <p>
                Egresado de Ingeniería Civil informática en la Universidad San
                Sebastián.
              </p>
              <p></p>
              <p>
                Mi objetivo es trabajar en una empresa en la que pueda formar
                parte de un equipo, participando en el desarrollo y mejora de
                proyectos, con el fin de seguir creciendo como desarrollador
                web.
              </p>
              <div className="btn">
                <a href={cv} target="_blank" rel="noopener noreferrer">
                  Descargar CV
                </a>
                <div className="btn-overlay"></div>
              </div>
            </div>
          </div>
          <div className="stack" data-aos="fade-up">
            <h1 className="section-title">Stack</h1>
            <div className="stack-icons" ref={about}>
              <FaWordpress />
              <FaHtml5 />
              <FaCss3Alt />
              <FaSass />
              <FaBootstrap />
              <IoLogoJavascript />
              <SiTypescript />
              <FaReact />
              <FaNodeJs />
              <SiMongodb />
              <GrMysql />
            </div>
          </div>
        </div>
      </div>
      <div className="separation"></div>
    </section>
  );
};

export default About;
