import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";

const Contact = () => {
  const { contact } = useGlobalContext();
  return (
    <section className="contact" ref={contact}>
      <div
        className="contact-container"
        data-aos="fade-up"
        data-aos-offset="250"
      >
        <div className="contact-header">
          <h1 className="section-title">Contacto</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            asperiores perferendis id tenetur aut optio quaerat libero eligendi
            ducimus veritatis.
          </p>
        </div>
        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/victor-carancio-avello-85480124b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <div
            className="social-icon"
            onClick={() =>
              window.open(
                "mailto:victor.carancio@gmail.com",
                "blank",
                "noopener noreferrer"
              )
            }
          >
            <SiGmail />
          </div>
          <a
            href="https://github.com/victor-carancio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="separation"></div>
    </section>
  );
};

export default Contact;
