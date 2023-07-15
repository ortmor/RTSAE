import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Unparalleled Expertise in Network </h1>
          <h1> Critical Physical Infrastructure</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Our exceptional team comprises world-class experts carefully
            selected from a variety of industries where failure is simply not an
            option, ranging from aviation to nuclear operations. This diverse
            blend of expertise allows us to harness cross-industry experience
            and deliver top-tier processes and controls. With a proven global
            footprint, our team has successfully completed numerous data center
            projects in a wide array of locations, always adhering to the
            highest international standards and catering to the most demanding
            clients. These capabilities are fortified by the substantial
            financial backing of Oaktree Capital, providing us with the
            necessary funding depth to undertake large-scale projects across the
            world.
          </p>
<br />
          <p>
            At Royal Technology Solutions, we specialize in developing
            continuity plans, enhancing the resilience of existing data centers,
            and constructing new facilities that incorporate the latest
            state-of-the-art technology. Our comprehensive services include
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
