import React from "react";
import "./Nav_mobile.css";
const Nav_mobile = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) {
      setIsMenuOpen(false);
    }
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div class="fixed-container"> 
      <div class="sidebar">
        <ul>
          <li class="menu-item">
            <a class="menu-link" onClick={()=>handleScroll("home")}>
              home
            </a>
          </li>
          <li class="menu-item">
            <a class="menu-link" onClick={()=>handleScroll("experience")}>
              experience
            </a>
          </li>
          <li class="menu-item">
            <a class="menu-link" onClick={()=>handleScroll("project")}>
              project
            </a>
          </li>
          <li class="menu-item">
            <a class="menu-link" onClick={()=>handleScroll("about_me")}>
             About Us
            </a>
          </li>
        </ul>
        <button class="contact-button" onClick={()=>handleScroll("contact")}>
          Contact Us
        </button>
      </div>
      <div class="overlay" onClick={()=>setIsMenuOpen(false)}/>
    </div>
  );
};

export default Nav_mobile;
