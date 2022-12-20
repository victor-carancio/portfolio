import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../Context/context";

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae distinctio praesentium alias.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae distinctio praesentium alias.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae distinctio praesentium alias.
              </p>
              <div className="btn">
                <a href="#" target="blank">
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
              <IoLogoJavascript />
              <SiTypescript />
              <FaReact />
              <FaNodeJs />
            </div>
          </div>
        </div>
      </div>
      <div className="separation"></div>
    </section>
  );
};

export default About;
