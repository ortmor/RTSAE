import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Innumerable Benefits of On-Premises <br />
            and Cloud-Based Solutions
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            On-premises data centers empower clients with complete control over
            their systems, allowing for seamless modifications, expansions, and
            consolidation as per their requirements. Accessibility is made
            convenient through common desktop operating systems and smart
            devices, catering to employees at all levels. Advanced maintenance
            protocols, including robust security measures and software patches,
            ensure maximum uptime and protection.
          </p>
          <br />
          <p>
            Moreover, on-premises data centers provide full data access and
            control over specific sections of the digital infrastructure,
            guaranteeing compliance with regulatory requirements. In contrast,
            cloud-based data centers offer a range of advantages, such as
            cost-efficiency, heightened security measures, scalable resource
            allocation, and access to cutting-edge technology. These data
            centers eliminate the need for location dependence, providing
            businesses with backup and recovery options for seamless operations.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
