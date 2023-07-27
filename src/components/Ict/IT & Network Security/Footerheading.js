import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Transcending the Boundaries of the <br />
            IT Networking Industry
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            We are a team of experienced and certified network engineers and
            technicians, with over a decade of expertise in the IT networking
            industry. Our profound understanding of complex network environments
            and the challenges businesses face has enabled us to deliver
            successful projects and exceptional customer satisfaction.
          </p>
          <br />

          <p>
            We believe in providing personalized services that align with your
            unique business requirements and budget. Our topmost priority is
            reliability, and we provide ongoing support to ensure that your
            network operates seamlessly. Our responsive support team is just a
            phone call away, ready to assist you whenever you need it.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
