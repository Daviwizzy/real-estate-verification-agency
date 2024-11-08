import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-main-container container">
      <div className="hero-container grid">
        <div className="hero-text">
          <h1 className="slide">
            <span className="heading-text">
              Verify <br /> Your Property{" "}
            </span>
            <br />
            Investment with <span className="green">Verizone</span>
          </h1>
          <p>
            Ensure your investment is safe with comprehensive legal and
            ownership checks.
          </p>
          <button type="button">Register</button>
        </div>

        <div className="hero-image"></div>
      </div>
    </main>
  );
};

export default Hero;
