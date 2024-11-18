import "./Trust.css";

const Trust = () => {
  return (

    <div className="trust-container">
      <div className="trust-first">
        <img src="why-trust-us.svg" alt="" />
      </div>
      <div className="trust-last">
        <div className="trust-last-1">
        <div className="trust-card">
          <h2>Proven Track Record</h2>
          <p>
            With years of experience in property verification, we’ve helped
            thousands of clients  make secure and informed real estate decisions.
            Our expertise  is trusted by buyers, investors, and real estate
            professionals alike.
          </p>
          <hr />
        </div>
        <div className="trust-card">
          <h2>Transparent Reporting</h2>
          <p>
            We believe in full transparency. Our reports are easy to understand,
            providing all findings clearly, along with any  potential risks so
            you can make well-informed decisions.
          </p>
          <hr />
        </div>

        </div>
     <div className="trust-last-2">
     <div className="trust-card">
          <h2>Industry Certified Experts</h2>
          <p>
            Our team is comprised of certified verification specialists  with
            in-depth knowledge of real estate law, title history, and property
            records, ensuring the highest level of service.
          </p>
          <hr />
        </div>
        <div className="trust-card">
          <h2>Commitment to privacy</h2>
          <p>
            We prioritize your privacy and use advanced security protocols to
            protect your information. You can trust us to handle your data with
            the utmost confidentiality and care.
          </p>
          <hr />
        </div>
     </div>
      
      </div>
    </div>
  );
};

export default Trust;
