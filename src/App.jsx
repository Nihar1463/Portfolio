import React from "react";
import Cont1 from "./Componenets/Cont1";
import Cont2 from "./Componenets/Cont2";
import Education from "./Componenets/Education";
import Experience from "./Componenets/Experience";
import Project_Cards from "./Componenets/Project_Cards";
import Project_cont from "./Componenets/Project_cont";
import Technology from "./Componenets/Technology";
const App = () => {
  return (
    <>
      <Cont1 />
      <Cont2/>
      <Education/>
      <Experience/>
      {/* <Project_Cards/> */}
      <Project_cont/>
      <Technology/>
    </>

    
  );
};

export default App;
