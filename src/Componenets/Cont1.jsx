import React, { useState } from "react";
import "./Cont1.css";
import { motion } from "framer-motion";
import Nav_mobile from "./Nav_mobile";

const Cont1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };
  // const handleScroll = (sectionId) => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(false);
  //   }
  //   document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      {/* mobile navbar  */}

      {isMenuOpen && (
        <Nav_mobile isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      {/* laptop nav bar*/}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, y: 0 }}
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

      {/* <!-- Mobile Navbar Toggle Button --> */}
        
      <div class="navbar-toggle-container">
        <button onClick={toggleMenu} class="navbar-toggle-button">
          {isMenuOpen ? (
            <i class="bx bx-x" style={{color:"#ffffff"}}></i>
          ) : (
            <i class="bx bx-menu" style={{ color: "#fff7f7" }}></i>
          )}
        </button>
      </div>
    </>
  );
};

export default Cont1;
