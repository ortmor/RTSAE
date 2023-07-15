import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1> Unleash the Power of Unified</h1>
          <h1> Digital Management</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Experience seamless digital communication and take your business to
            new heights with our cutting-edge solutions. Our comprehensive
            platform combines enterprise content, documentation, and intra- and
            inter-department management, providing a robust and secure
            foundation for your operations. With our Enterprise Content
            Management and Document Management Solutions working hand-in-hand,
            we identify and address pain points and challenges, while leveraging
            data-driven insights to keep your business ahead of the competition.
          </p>
          <br />
          <p>
            Here are how our Management Solutions can revolutionize your
            business;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
