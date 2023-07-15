import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Elevate Collaboration and Communication</h1>
          <h1> with Cutting-Edge UCC Solutions</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Experience a new era of seamless connectivity, collaboration, and
            communication with RTS's innovative Unified Communications and
            Collaboration (UCC) solutions. Our comprehensive suite of tools and
            features empowers your teams to connect, collaborate, and
            communicate effortlessly, revolutionizing the way you work. Our
            Unified Communications (UC) solution brings together voice, video,
            messaging, and conferencing into a single, integrated platform.
            Seamlessly switch between different communication channels for
            enhanced productivity, and access UC tools from desktop, mobile, and
            web applications for flexibility and mobility.
          </p>
          <br />
          <p>
            Our solution simplifies communication management and reduces
            complexity for IT administrators. With improved internal and
            external communication across teams and with clients or customers,
            our UC solution is a game-changer for businesses looking to enhance
            their communication capabilities. With our UCC solutions, you’ll
            get;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
