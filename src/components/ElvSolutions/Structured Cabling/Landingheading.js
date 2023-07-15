import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>
            {" "}
            Future-Proof Your Infrastructure With Our <br />
            Extensive Extra-Low Voltage Solution
          </h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Our comprehensive extra-low voltage solution encompasses all
            essential modern technologies for buildings. It includes data
            networks, CCTV equipment, access control systems, intrusion
            detection systems, structured cabling, public address systems, audio
            and video solutions, home automation, and more. RTS provides a
            complete range of structured cabling services, covering new
            constructions and retrofits. We handle expansions, upgrades,
            troubleshooting, and optimization.
          </p>

          <p>
            Our versatile solutions cater to diverse requirements, offering
            copper and fiber solutions, intelligent cabling, and rack solutions
            for data centers and campuses. Our expertise extends to a wide range
            of sectors, including malls, hospitals, ministries, telecom
            companies, factories, luxury villas, corporate offices, banks,
            multi-story apartments, and towers. Here is how ELV structured
            cabling can make an impact on your businesses;
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
