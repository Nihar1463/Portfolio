import React from "react";
import "./Project_Cards.css";
import Ig1 from "../assets/card.jpg";
const Project_Cards = (props) => {
  return (
    <>
    
      <div className="port-box">
         
       
        <div className="port-image">
          <img src={props.project.img} alt="" className="img1" />
        </div>
        <div className="port-content">
          <h3>{props.project.title}</h3>
          <p>{props.project.description}</p>
          <a href={props.project.link}>
            <i class="bx bx-link-external"></i>
          </a>
        </div>
      </div>
   </>
  );
};

export default Project_Cards;
