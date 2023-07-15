import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Transforming Cities Unlocking the Power of </h1>
          <h1> Smart City Automation Solutions</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            The Smart City automation solutions program is one of the most
            versatile and all-encompassing digital infrastructures designed by
            RTS, from strategic planning and application development all the way
            to the implementation of the Internet of Things (IoT) integrations
            that provide self-aware mechanisms and constantly evolving
            problem-solving capabilities.
          </p>
          <br />
          <p>
            The optimization is felt significantly in the utilization of city
            resources for transport, waste management, lighting, utilities,
            surveillance, and traffic management. All of which would not only
            enhance the quality of life but also eliminate unnecessary surplus
            usage. Our Company is able to provide turnkey (end-to-end) solutions
            for any type of city, regardless of size or degree of automated and
            digital integration. Our Smart City Automation is ideal for; Smart
            City Automation Solutions Program:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
