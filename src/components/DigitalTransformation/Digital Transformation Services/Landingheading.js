import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Embark on a Journey towards Digital Transformation</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            Are you truly aware of the objectives of your digital transformation
            and the impact it can have on your business, or is it merely a
            trendy buzzword? Have you considered the potential achievements of
            digitizing your products, processes, and machinery? What concrete
            and measurable business outcomes should you anticipate? And most
            importantly, are you on the right track?
          </p>
<br />
          <p>
            At Royal Technology Solutions, we specialize in empowering your team
            with a tailored approach to digital transformation, enabling you to
            enhance your business's competitiveness and stay ahead in the
            market. Through our expertise and insights, we aim to demystify
            digital transformation and provide you with practical guidance on
            how to navigate this ever-evolving landscape. Together, let's unlock
            the full potential of digital transformation and pave the way for
            your business's success.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
