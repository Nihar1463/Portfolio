import React from "react";
import "./About_me.css";
import Ig1 from "../assets/111.jpg";
import I7 from "../assets/pp1.jpg";
const About_me = () => {
  return (
    <section className="About_me" id="about_me">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="container1">
        <div className="cont1_left">
          <div className="photo">
            <img src={I7} alt="" />
          </div>
        </div>
        <div className="cont1_right">
          <div className="info">
            <h3>
              Nihar Bijva <span>-Frontend Developer</span>
            </h3>
            <p>
              I am a dedicated Front-end developer with a passion for crafting
              engaging and intuitive web experiences. With expertise in HTML,
              CSS, JavaScript and ReactJS . I bring designs to life with clean,
              efficient, and responsive code. I thrive on solving complex
              problems and continuously learning new technologies to stay ahead
              in the fast-evolving field of web development.
            </p>
            <p>
              <b>Experience : </b> 6 months +
            </p>
            <a href="#contact">
              <button className="btn">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_me;
