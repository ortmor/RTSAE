import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Embrace the Future with Smart </h1>
          <h1>Automation Solutions</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Automation is rapidly shaping the future, and RTS is at the
            forefront, providing multi-platform integration to deliver
            cutting-edge smart automation solutions for both homes and corporate
            environments. Smart Automation represents the convergence and
            control of various technologies through a single user-friendly GUI
            (Graphical User Interface) interface. With our advanced solutions,
            you can seamlessly integrate and manage multiple systems, enhancing
            convenience, efficiency, and productivity.
          </p>
          <br />
          <p>
            Experience the power of smart automation as we simplify and enhance
            your daily life, creating a harmonious and efficient environment.
            With RTS, the future of automation is at your fingertips. Smart
            Automation encompasses the seamless control and consolidation of
            various technologies through a single intuitive interface. Our team
            of skilled RTS Engineers specializes in designing and implementing
            customized solutions by seamlessly integrating the following systems
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
