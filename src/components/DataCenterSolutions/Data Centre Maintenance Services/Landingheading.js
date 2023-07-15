import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Efficient and Bespoke Data Centre</h1>
          <h1>Maintenance Services</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            At RTS, we are dedicated to providing data center maintenance
            services that are customized to your needs and hassle-free. Our
            primary focus is on understanding your systems and standards as
            intimately as you do. We operate with complete transparency, taking
            full accountability for our actions as if we were an integral part
            of your internal team. We acknowledge that our customers operate in
            dynamic environments, frequently responding to global events while
            striving to maintain consistent service levels. We don't just see
            ourselves as developers; we think like operators. This mindset
            drives us to make substantial investments in our partners and
            personnel, ensuring we recruit the finest talent available in the
            market and train them to meet the highest global standards.
          </p>
          <br />
          <p>
            This straightforward approach enables us to swiftly and consistently
            scale our services wherever we go. With RTS, you can rely on a
            maintenance service that is tailored to your requirements,
            stress-free, and supported by a team of professionals who are fully
            committed to your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
