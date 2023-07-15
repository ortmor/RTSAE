import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Empowering Your Digital Journey With</h1>
          <h1>Data Center Infrastructure</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            In the ever-expanding realm of our digital landscape, the Data
            Center Infrastructure has emerged as the backbone, weaving together
            the sway of computing and networking components. With its formidable
            expertise in handling colossal volumes of data, the Data Center
            Infrastructure empowers organizations to unlock the treasures of
            knowledge and embark upon the path of informed decision-making.{" "}
          </p>
          <br />
          <p>
            Now, let us delve into the array of services we proudly offer as a
            comprehensive technology solution provider, harmonizing technology
            and people in this digital realm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
