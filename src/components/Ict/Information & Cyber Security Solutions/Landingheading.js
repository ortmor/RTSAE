import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1> Prioritizing Your Safety in the Digital Frontier </h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            As technology rapidly evolves and digital adoption accelerates,
            organizations may face a constant threat from cyberattacks and it
            can have devastating consequences on operations, services,
            reputation, etc.
          </p>{" "}
          <br />
          <p>
            So It has become crucial to implement a robust cybersecurity
            strategy that addresses the constantly changing terrain of cyber
            threats. Guarding against a range of prevalent cyber threats, we
            prioritize your protection from
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
