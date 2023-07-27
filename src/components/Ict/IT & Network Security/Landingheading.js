import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Secure Your Business with RTS ICT's Comprehensive</h1>
          <h1> IT Infrastructure and Security Solutions</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            The world of business today is driven by information technologies
            and communication. To stay ahead of the curve, a robust IT
            infrastructure and reliable security solutions are no longer
            optional but essential. At RTS ICT, we are experts in designing and
            integrating high-performance IT infrastructures and providing
            top-of-the-line network and cyber security solutions.
          </p>
          <br />

          <p>
            Our comprehensive range of services includes IT network solutions
            such as software-defined data center solutions and SDWAN, as well as
            IT security solutions like firewalls, zero-trust network access, and
            cloud security. We prioritize flexibility, integration, and
            protection to ensure that your business remains secure and
            productive. With our expertise, you can focus on growing your
            business while we take care of your IT and security needs.
          </p>
          <br />
          <p>
            Our goal is to provide you with an exceptional IT experience that
            you can rely on. We understand the importance of your data, and we
            work hard to ensure that it is secure at all times. We also work
            with you to develop a plan that meets your needs and budget,
            allowing you to focus on what matters most—your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
