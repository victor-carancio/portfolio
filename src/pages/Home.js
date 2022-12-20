import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/nav";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Navbar />;
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
