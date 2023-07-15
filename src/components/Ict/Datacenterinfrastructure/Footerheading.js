import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>IT Service Management (ITSM)</h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            Our ITSM processes align strictly with ITIL best practices and ISO
            27001:2013 recommendations for Information Security Management
            Systems. Our team consists of specialized units qualified to ensure
            IT services continuity around the clock.
          </p>
          <br />
          <p>
            We strive to provide a technological ecosystem with zero
            interruptions, perfectly catering to each IT requirement that
            supports business productivity. We deliver 95% resolution within
            record time where 76% of tickets are closed as first call resolution
            (FCR).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
