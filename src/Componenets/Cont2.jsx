import React from "react";

import "./Cont2.css";
// import I1 from "../assets/DDD_0885.jpg";
// import I2 from "../assets/1.png";
// import I3 from "../assets/111.jpg";
// import I4 from "../assets/111-removebg-preview.png";
// import I5 from "../assets/ppphtto.jpg";
// import I6 from "../assets/ppphtto11.jpg";
import I7 from "../assets/pp1.jpg";
import { motion } from "framer-motion";

const Cont2 = () => {
  return (
    <section className="home" id="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 1.5 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1>
          Hi,It's <span>Nihar</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span></span>
        </h3>
        <p>
          Creative and detail-oriented Front-End Developer with expertise in
          HTML, CSS, JavaScript, and React. Skilled in transforming design
          mockups into responsive and user-friendly Websites. Committed to
          delivering high-quality code and exceptional user experiences.
        </p>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/niharbijva146" target="blank">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Nihar1463" target="blank">
            <i class="bx bxl-github"></i>
          </a>
          <a href="#">
            <i class="bx bxl-instagram-alt"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <div className="btn-group">
          <a href="Nihar Bijva.pdf" className="btn" download="Nihar Bijva CV">
            Dowmload CV <i class="bx bx-download"></i>
          </a>
          <a href="#contact" className="btn">
            Hire Me
          </a>
          {/* <a href="#" className="btn">
            Hire
          </a> */}
        </div>
      </motion.div>
      <div className="home-img">
        <img src={I7} alt="" />
      </div>
    </section>
  );
};

export default Cont2;
