import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <div className="main1">
        <div className="contact-info">
          <h3>
            <span>Contact No : </span> +91 8490841934
          </h3>
        </div>{" "}
        <div className="contact-info">
          <h3>
            <span>Email : </span>
            <a href="mailto:bijvanihar146@gmail.com" > bijvanihar146@gmail.com</a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
