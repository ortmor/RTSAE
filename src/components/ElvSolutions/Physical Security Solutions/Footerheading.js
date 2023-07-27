import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Enhancing Security with Extra Low Voltage <br /> Physical Security
            Solutions
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            Extra Low Voltage (ELV) - Physical Security Solutions refer to a
            range of advanced security systems that operate on a low-voltage
            power supply. These solutions encompass various technologies, such
            as access control systems, surveillance cameras, intruder detection
            systems, and intercoms.
          </p>
          <br />
          <p>
            ELV - Physical Security Solutions are designed to enhance the safety
            and protection of individuals, properties, and assets. By utilizing
            low-voltage power, these solutions offer efficient and reliable
            security measures while minimizing risks associated with
            high-voltage installations.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
