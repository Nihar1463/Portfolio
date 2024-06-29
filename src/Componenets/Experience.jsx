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
                Frontend Developer | ReactJs | Internship
                <span className="company">- Skytech Pvt. Ltd.</span>
              </h4>
              <p>
                • During this internship, I mainly focused on web development
                with React.js, a leading JavaScript library for building user
                interfaces. <br />
                • Throughout the internship, I honed my skills in React.js,
                including proficiency in componentbased Architecture, State
                management, API and Routing. Also I gained practical experience in
                developing dynamic and interactive web applications. <br />•
                Practice responsive design and version control to enhance my
                skills and collaborate effectively in real-world projects.
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
