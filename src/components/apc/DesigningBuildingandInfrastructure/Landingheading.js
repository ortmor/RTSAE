import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Transforming Spaces: Engineering Excellence in </h1>
          <h1>Designing, Building, and Infrastructure</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            At our company, we take pride in our meticulous design process,
            which begins with a comprehensive consultation. By understanding our
            client's preferences and requirements, we initiate a series of
            phases aimed at creating exceptional spaces. Moving into the second
            phase, we draft an initial design proposal accompanied by detailed
            drawings and immersive 3D renderings. With a focus on customization,
            we provide bespoke solutions that completely transform spaces to
            suit our clients' design and functional needs. Our expertise spans
            from architectural applications to MEP (Mechanical, Electrical, and
            Plumbing), Fire Fighting, and IT solutions.
          </p>
          <br />
          <p>
            We offer turnkey solutions, ensuring a seamless transition from
            conceptualization to execution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
