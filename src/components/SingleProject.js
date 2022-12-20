import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

import { useGlobalContext } from "../Context/context";

const SingleProject = ({ proyectTitle, codeLink, pageLink, tech, img }) => {
  const { iconFilter } = useGlobalContext();
  return (
    <div className="project" data-aos="fade-up">
      <img
        className={codeLink !== "none" ? "frontend-img" : "project-img"}
        src={img}
        alt={proyectTitle}
      />
      <div className="project-info">
        <div className="title-container">
          <h3 className="info-title">{proyectTitle}</h3>
          <div className="external-container">
            <a href={pageLink} target="_blank" rel="noopener noreferrer">
              <BiLinkExternal />
            </a>
            {codeLink !== "none" ? (
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="tech-container">
          {tech.map((item, index) => {
            return iconFilter(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
