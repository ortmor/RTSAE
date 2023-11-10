import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>
            {" "}
            Streamline Your Data Center <br />
            Infrastructure with DCIM Software
          </h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Enhance the efficiency and reliability of your data center
            operations with our cutting-edge Data Center Infrastructure
            Management (DCIM) solutions. DCIM is a comprehensive software suite
            designed to provide holistic management and control over all aspects
            of your data center infrastructure.
          </p>
          <br />

          <p>
            Our DCIM software provides real-time alerts and notifications,
            empowering you to take proactive measures to prevent downtime and
            ensure business continuity. With our software, you'll have a
            complete overview of your data center's power and cooling systems,
            IT assets, and environmental conditions, enabling you to make
            informed decisions and streamline your operations. Unlock the full
            potential of your data center infrastructure with our DCIM
            solutions.
          </p>

          <br />

          <p>
            Our Professional Services are designed to guide our clients through
            every step of their critical facility journey, from initial designs
            to final testing and commissioning. With an experienced and
            qualified team of engineers and consultants, we provide a
            comprehensive service that ensures the success of your critical
            infrastructure, such as,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
