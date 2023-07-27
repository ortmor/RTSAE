import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Video Surveillance & Management <br /> Enhanced Security, Efficient
            Monitoring
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            Our Video Surveillance & Management solution combines cutting-edge
            camera technology with advanced software to provide you with robust
            security and efficient monitoring capabilities.
          </p>
          <br />

          <p>
            With strategically placed cameras, real-time video capture, and
            centralized management, our system ensures enhanced security for
            your premises. Monitor critical areas, deter potential threats, and
            gain valuable insights with our streamlined video surveillance
            solution.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
