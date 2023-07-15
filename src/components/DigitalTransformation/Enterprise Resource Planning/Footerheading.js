import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            {" "}
            Discover the Transformative Potential of <br /> ERP Software and
            Application Services{" "}
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            Our ERP Software and Application Services solutions offer a powerful
            means to revolutionize your business operations. With seamless
            integration, streamlined processes, and real-time insights, our ERP
            software empowers your organization to eliminate data silos and
            achieve peak efficiency. Scale effortlessly, customize with
            precision, and maintain compliance effortlessly. Experience the
            transformative impact of ERP as you unlock the true potential of
            your business.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
