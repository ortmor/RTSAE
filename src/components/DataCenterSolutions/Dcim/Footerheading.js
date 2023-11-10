import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
        <h1> Tailored Cooling Solutions and
         <br /> Resilient Critical Infrastructures</h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
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
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
