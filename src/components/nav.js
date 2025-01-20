import React from "react";
import { useGlobalContext } from "../Context/context";

const Navbar = () => {
  const {
    openToggle,
    setOpenToggle,
    currSection,
    openMenu,
    setOpenMenu,
    scrollToSection,
    home,
    about,
    proyectsRef,
    contact,
  } = useGlobalContext();

  const toggle = () => {
    setOpenToggle(!openToggle);
    setOpenMenu("canOpen");

    if (openMenu === "canOpen" && openToggle === true) {
      setTimeout(() => setOpenMenu("onLoad"), 500);
    }
  };
  return (
    <section className="header " ref={home}>
      <div className="header-container">
        <div className="nav-bar hide-for-mobile">
          <p
            className={
              currSection === "home"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => scrollToSection(home)}
          >
            Inicio
          </p>
          <p
            className={
              currSection === "about"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => scrollToSection(about)}
          >
            Sobre mí
          </p>
          <p
            className={
              currSection === "proyects"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => scrollToSection(proyectsRef)}
          >
            Proyectos
          </p>
          <p
            className={
              currSection === "contact"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => scrollToSection(contact)}
          >
            Contacto
          </p>
        </div>

        <div
          className={
            openToggle
              ? "header-toggle hide-for-desktop open"
              : "header-toggle hide-for-desktop"
          }
          onClick={() => toggle()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div
          className={
            openMenu === "onLoad"
              ? "header-menu hide-for-desktop has-fade"
              : openToggle
              ? "header-menu hide-for-desktop has-fade fade-in"
              : "header-menu hide-for-desktop has-fade fade-out"
          }
        >
          <p
            className={
              currSection === "home"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => {
              scrollToSection(home);
              toggle();
            }}
          >
            Inicio
          </p>
          <p
            className={
              currSection === "about"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => {
              scrollToSection(about);
              toggle();
            }}
          >
            Sobre mí
          </p>
          <p
            className={
              currSection === "proyects"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => {
              scrollToSection(proyectsRef);
              toggle();
            }}
          >
            Proyectos
          </p>
          <p
            className={
              currSection === "contact"
                ? "header-item selected-item"
                : "header-item"
            }
            onClick={() => {
              scrollToSection(contact);
              toggle();
            }}
          >
            Contacto
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
