import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Unrivaled Proficiency in
            <br />
            Global Data Center Solutions
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            At Royal Technology Solutions, we are a team of data center and
            operational experts, each with a wealth of experience in designing
            and operating mission-critical systems for sectors such as aviation,
            financial services, military, utilities, and governments.
          
            Collaboratively, we specialize in the design, construction, and
            operation of data centers for hyper-scale clients, meticulously
            aligning our solutions with their internal standards to ensure the
            availability, service, and integrity they require to pursue their
            business plans sustainably and efficiently on a global scale.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
