import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Unleash the Power of Cloud Technologies <br />
            for Your On-Premises Infrastructure
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            Unlock the potential of your on-premises infrastructure by
            harnessing the advantages of cloud technologies. Our comprehensive
            solutions deliver a range of benefits, including streamlined
            administration, accelerated developer productivity, and access to
            high-value hybrid cloud services. With automation and lifecycle
            management, you can optimize operations and ensure efficient
            resource allocation. Orchestration capabilities enable seamless
            coordination and execution of complex workflows, while operations
            management provides real-time insights and proactive monitoring.
          </p>
          <br />
          <p>
            Benefit from a consistent architecture that allows for easy scaling
            in and out, and gain consolidated VM and container management for
            simplified administration. Achieve cost savings with reduced capital
            and operational expenditures, leading to a lower total cost of
            ownership. Moreover, our solutions empower you to build, modernize,
            and deploy applications at scale, enabling your organization to stay
            agile and competitive. Experience seamless integrations and a range
            of services designed to enhance your cloud journey. Let us help you
            unlock the full potential of your infrastructure and propel your
            business forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
