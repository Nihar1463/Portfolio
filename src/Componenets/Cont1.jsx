import React from "react";
import "./Cont1.css";
import { motion } from "framer-motion";
const Cont1 = () => {
  return (
    <>
      <motion.header className="header" initial={{ opacity: 0, y: -100 }}
      transition={{duration:1}}
      animate={{opacity:1,y:0}}
      >
        <a href="#home" className="logo">
          Nihar <span>Bijva</span>
        </a>
        {/* <i class='bx bx-menu' style={{color:'#fff7f7'  }}></i> */}
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#education">Education</a>
          <a href="#project">Project</a>
          <a href="#about_me">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>
    </>
  );
};

export default Cont1;
