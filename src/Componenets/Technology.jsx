import React from "react";
import "./Technology.css";
const Technology = () => {
  return (
    <section className="technology" id="technology">
      <div className="technology-box">
        <h2 className="heading">Technologies</h2>
        <div className="wrapper">
          <div className="technology-item">
            <i class="bx bxl-react" style={{ color: "#5ed3f3" }}></i>
            <h2>ReactJs</h2>
          </div>
          <div className="technology-item">
            <i class="bx bxl-javascript" style={{ color: "#efd81d" }}></i>
            <h2>JavaScript</h2>
          </div>
          <div className="technology-item">
            <i class="bx bxl-html5" style={{ color: "#f5480d" }}></i>
            <h2>HTML5</h2>
          </div>
          <div className="technology-item">
            <i class="bx bxl-css3" style={{ color: "#0068ba" }}></i>
            <h2>CSS3</h2>
          </div>
          <div className="technology-item">
          <i class='bx bxl-tailwind-css' style={{color:'#17b1b4' }} ></i>
            <h2>Tailwind-CSS</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
