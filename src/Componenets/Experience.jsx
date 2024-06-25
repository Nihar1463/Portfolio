import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <section className="experience">
      <h2 className="heading">Experience</h2>
      <div className="exp-con1">
        <div className="experience-container">
          <div className="experience-box">
            <div className="experience-info">
              <h4>
                Frontend Developer{" "}
                <span className="company">- Skytech Pvt. Ltd.</span>
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio voluptatibus sit consectetur laborum odio omnis!
                Numquam ea libero saepe animi Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Cum, tempora.
              </p>
              <p>
                <b>Technologies : </b>
                <span>
                  <b> ReactJs | JavaScript | HTML | CSS</b>
                </span>
              </p>
              <p className="duration">
                <i class="bx bxs-calendar"></i> : Jan-2024 to Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
