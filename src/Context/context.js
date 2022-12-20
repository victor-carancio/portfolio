import React, { useState, useContext, useEffect, useRef } from "react";
import { frontendMentor, works } from "../data";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiWoo } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openToggle, setOpenToggle] = useState(false);
  const [openMenu, setOpenMenu] = useState("onLoad");
  const [currSection, setCurrSection] = useState("");

  const home = useRef(null);
  const about = useRef(null);
  const proyectsRef = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef == about) {
      window.scrollTo({
        top: 709,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const underlineNav = () => {
    if (window.pageYOffset >= 0 && window.pageYOffset < 209) {
      setCurrSection("home");
    }
    if (
      window.pageYOffset >= 209 &&
      window.pageYOffset < proyectsRef.current.offsetTop - 500
    ) {
      setCurrSection("about");
    }

    if (
      window.pageYOffset >= proyectsRef.current.offsetTop - 500 &&
      window.pageYOffset < contact.current.offsetTop - 500
    ) {
      setCurrSection("proyects");
    }

    if (window.pageYOffset >= contact.current.offsetTop - 500) {
      setCurrSection("contact");
    }
  };

  const iconFilter = (str, id) => {
    switch (str) {
      case "Html":
        return <FaHtml5 key={id} />;
      case "Css":
        return <FaCss3Alt key={id} />;
      case "Sass":
        return <FaSass key={id} />;
      case "React":
        return <FaReact key={id} />;

      case "Typescript":
        return <SiTypescript key={id} />;
      case "Wordpress":
        return <FaWordpress key={id} />;
      case "WooCommerce":
        return <SiWoo key={id} />;

      default:
        return <IoLogoJavascript />;
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
    window.addEventListener("load", underlineNav);
    return () => {
      window.removeEventListener("load", underlineNav);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", underlineNav);
    return () => {
      window.removeEventListener("scroll", underlineNav);
    };
  }, [underlineNav]);
  return (
    <AppContext.Provider
      value={{
        openToggle,
        setOpenToggle,
        openMenu,
        setOpenMenu,
        scrollToSection,
        home,
        about,
        proyectsRef,
        contact,
        currSection,
        frontendMentor,
        works,
        iconFilter,
        FaHtml5,
        FaCss3Alt,
        FaSass,
        FaReact,
        FaWordpress,
        SiTypescript,
        IoLogoJavascript,
        FaNodeJs,
        FaBootstrap,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
