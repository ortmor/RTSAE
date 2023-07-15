import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Revolutionizing Urban Efficiency with
            <br />
            RTS Smart City Automation Solutions
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            Smart City Automation is a cutting-edge technology that integrates
            various systems and devices to optimize urban infrastructure
            management. With the use of Internet of Things (IoT) devices,
            sensors, and data analytics, Smart City Automation streamlines city
            services such as transportation, waste management, lighting,
            utilities, surveillance, and traffic management. By implementing
            Smart City Automation, cities can enhance the quality of life for
            citizens by reducing unnecessary surplus usage and improving
            resource utilization. Additionally, Smart City Automation can help
            cities achieve cost savings, increased sustainability, and improved
            communication and collaboration between city services. Explore our
            website to learn more about how Smart City Automation can
            revolutionize your city.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
