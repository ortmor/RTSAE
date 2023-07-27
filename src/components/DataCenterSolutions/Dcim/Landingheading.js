import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1> Tailored Cooling Solutions and</h1>
          <h1> Resilient Critical Infrastructures</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            At Royal Technology Solutions, we partner with top product
            manufacturers and brands to deliver customized and reliable cooling
            solutions. Our team of experienced mechanical engineers ensures that
            our solutions are designed and installed to minimize carbon impact
            and maintain uptime, providing cost-effective and environmentally
            friendly options for your business. 
          </p>
          <br />

          <p>In addition to our cooling
            solutions, we also specialize in critical infrastructure services.
            Our knowledgeable team works closely with a diverse range of clients
            to ensure that their data centers and critical facilities are
            resilient, sustainable, and well-protected.</p>
            <br />
          <p>
            Our Professional Services are designed to guide our clients through
            every step of their critical facility journey, from initial designs
            to final testing and commissioning. With an experienced and
            qualified team of engineers and consultants, we provide a
            comprehensive service that ensures the success of your critical
            infrastructure, such as
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
