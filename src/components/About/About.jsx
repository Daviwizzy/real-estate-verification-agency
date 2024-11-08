import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-main-container container">
      <div className="about-left">
        <div className="about-image"></div>
      </div>
      <div className="about-right">
        <p>About Verizon?</p>
        <h2>Secure your property Investment</h2>
        <p className="text">
          Building Trust Through Accuracy, Expertise, and Integrity.
        </p>
        <section className="stats-container flex">
          <div className="stat">
            <p className="stat-number">300+</p>
            <p className="stat-label">Verified Properties</p>
          </div>
          <div className="stat">
            <p className="stat-number">95%</p>
            <p className="stat-label">Compliance Rate</p>
          </div>
          <div className="stat">
            <p className="stat-number">70+</p>
            <p className="stat-label">Satisfied Customers</p>
          </div>
        </section>
        <div className="logo slide">
          <img src="/src/assets/images/VERIZONE B 1.png" alt="verizon logo" />
        </div>
      </div>
    </section>
  );
};

export default About;