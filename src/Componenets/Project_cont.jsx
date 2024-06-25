import React from "react";
import "./Project_cont.css";
import Project_Cards from "./Project_Cards";
import { data } from "./project_data";
const Project_cont = () => {
  return (
    <section className="project" id="project">
      <div className="main1-text">
        <h2 className="heading">Latest Projects</h2>
      </div>
      <div className="container">
        {/* <div className="fillter-buttons">
          <button className="btn">All</button>
          <button className="btn">WebSite</button>
          <button className="btn">APIs</button>
        </div> */}
        <div className="portfolio-gallery">
          {data.map((v, i) => {
            return <Project_Cards project={v} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Project_cont;
