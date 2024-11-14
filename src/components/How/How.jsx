import "./How.css";

const How = () => {
  return (
    <div className="how-container">
  <section className="how-main-container container-margin">
      <div className="how-title-container">
        <h2 className="how-title">How it works</h2>
        <p>Your Path To Verified Property</p>
      </div>

      <div className="how-card-container">
        <div className="how-card">
          <div className="how-card-content">
            <span>1</span>
            <h3>Submit Your Property Details</h3>
            <p>
              Stay ahead of any legal complications. Verify if your property is
              free of disputes or pending litigation with just a few clicks.
            </p>
          </div>
        </div>
        <div className="how-card">
          <div className="how-card-content">
            <span>2</span>
            <h3>Let Us Do The Research</h3>
            <p>
              We conduct thorough verification to give you confidence in your
              property decision. We simplify the process so you can focus on
              what matters, knowing every detail is reviewed and verified by
              professionals.
            </p>
          </div>
        </div>
        <div className="how-card">
          <div className="how-card-content">
            <span>3</span>
            <h3>Receive a Detailed Report</h3>
            <p>
              After research is complete, we compile everything into a
              comprehensive report, providing a clear breakdown of your property
              verification status.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  
  );
};

export default How;
