import "./About.css";

const About = () => {
  return (
    <section className="about-main-container container-margin">
      <div className="about-left">
        <div className="about-image"></div>
      </div>
      <div className="about-right">
        <p>About Verizon?</p>
        <h2>Secure your property Investment</h2>
        <p className="text">
          Building Trust Through Accuracy, Expertise, and Integrity.
        </p>
        <section className="stats-container">

          <p className="stat">
            <span>300+</span> Verified Properties
          </p>

          <p className="stat">
            <span>95%</span> Compliance Rate
          </p>

          <p className="stat">
            <span>70+</span> Satisfied Customers
          </p>
          
        </section>
        <div className="verizon-logo">
          <img src="./VERIZONEB1.svg" alt="verizon logo" />
        </div>
      </div>
    </section>
  );
};

export default About;
