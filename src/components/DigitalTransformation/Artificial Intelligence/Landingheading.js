import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1> Transforming Industries with Artificial Intelligence</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            We are one of the premier suppliers of artificial intelligence (AI)
            equipment & support services across the globe. Our company can
            provide you with robust AI solutions that are not seen in some of
            the leading global companies. At Royal Technology Solutions, we will
            collaborate with you to achieve digital supremacy in your fields of
            endeavor through ethical, sustainable, and cost-efficient means.
          </p>

          <p>
            Our company has you covered from the initial in-depth consultations
            and discovery sessions to development, implementation, and
            maintenance. Your needs will be our priority and this project will
            be a life-long partnership that will live to see the fruits of our
            labor. Here is the impact AI can have on your business;
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
