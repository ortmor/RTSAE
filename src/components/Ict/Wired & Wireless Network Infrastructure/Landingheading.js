import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Landingheading = () => {
  return (
    <div className={Styles.landingheadingparent}>
      <div className={Styles.landingparentmain}>
        <div className={Styles.landingparenthead}>
          <h1>Empowering Businesses with Wired & </h1>
          <h1>Wireless Network Infrastructure</h1>
        </div>

        <div className={Styles.landingparentheadparagraph}>
          <p>
            As the importance of information technologies and communication
            continues to grow, having a strong IT infrastructure and secure
            communication network has become indispensable for businesses. At
            RTS ICT, we understand the rapid and continuous development in
            technology, and we are dedicated to providing consultancy and
            solution design services to ensure that businesses have the
            high-performance, scalable, and manageable IT infrastructures they
            need.
          </p>
          <br />
          <p>
            Partnering with leading manufacturers in network and cyber security
            solutions, we offer integrated solutions that enable businesses to
            stay ahead in this dynamic digital landscape. With a focus on
            properly designed and problem-free network infrastructure, we help
            businesses build a solid foundation for their IT systems. We're
            proud to offer a wide range of IT network solutions to meet your
            business needs. Check out our list of offerings below:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landingheading;
