import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Unlocking the Power of Software Applications Driving Digital</h1>
          <h1>Transformation for Business Success</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Software applications are the core of every business that seeks to
            adopt massive digital transformation. Applications drive success and
            transformation only if used effectively. With our comprehensive
            digital infrastructure and our decades’ worth of industry expertise
            and experience, we can guarantee that your business will never fall
            behind the latest digital trends and applications.{" "}
          </p>
          <br />
          <p>
            To stay ahead of the rest of the world, RTS will help you manage and
            extract maximum value from core applications – unlocking their
            power, so you can develop new ways of achieving success and
            profits.Here are how digital transformation can make a big impact on
            your business;
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
