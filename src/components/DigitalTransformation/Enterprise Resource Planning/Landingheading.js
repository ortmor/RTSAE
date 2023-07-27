import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1> Ignite Your Digital Journey with Our Dynamic ERP</h1>
          <h1> Software and Application Services</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Our ERP consultancy services leverage the full potential of ERP
            systems, leading to massive growth, increased value, and enhanced
            profitability for our business partners. We work with you throughout
            the entire project life cycle and beyond, ensuring the
            implementation of the perfect ERP system and offering continuous
            assistance for any post-project concerns or clarifications.{" "}
          </p>
          <br />
          <p>
            Our ERP solutions provide 360-degree transparency and visibility,
            ensuring regulatory compliance and facilitating seamless
            interactions with regulatory boards and agencies. The following
            modules have been the most valuable to the business partners of our
            company;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
