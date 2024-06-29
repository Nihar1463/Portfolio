import React from "react";
import Cont1 from "./Componenets/Cont1";
import Cont2 from "./Componenets/Cont2";
import Education from "./Componenets/Education";
import Experience from "./Componenets/Experience";
import Project_Cards from "./Componenets/Project_Cards";
import Project_cont from "./Componenets/Project_cont";
import Technology from "./Componenets/Technology";
import Contact from "./Componenets/Contact";
import Footer from "./Componenets/Footer";
import About_me from "./Componenets/About_me";
const App = () => {
  return (
    <>
      <Cont1 />
      <Cont2 />
      <Experience />
      <Project_cont />
      <Technology />
      <About_me />
      <Education />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
