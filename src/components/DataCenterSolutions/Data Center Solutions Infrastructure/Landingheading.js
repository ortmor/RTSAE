import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>
            {" "}
            Empowering Digital Transformation <br /> RTS's Agile Digital
            Infrastructures
          </h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Hyper-accelerated business demands have driven all manner of
            companies into a massive shift towards adopting digital
            transformation and utilizing the tools & facilities often found in
            the digital environment. To keep up, we have provided our business
            partners with digital infrastructures that can rapidly adapt to the
            changing needs of the company and its personnel.
          </p>

          <br />

          <p>
            RTS empowers you to manage, maintain, & operate our established
            system with efficiency and ease of use to allow for a faster shift
            to digital development. Our innovative and industry-leading
            approaches have consistently been delivered without failure.
          </p>

          <br />
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
