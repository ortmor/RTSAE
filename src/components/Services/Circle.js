import Link from "next/link";
import Styles from "../../styles/services.module.scss";

const Circle = () => {
  return (
    <div id="projectmanagement" className={Styles.circleservicemainparentdiv}>
      <div className={Styles.circleservicemainboxtwo}>
        <img src="/services/circle.webp"></img>
      </div>
      <div className={Styles.circleservicemainboxone}>
        <div className={Styles.circleservicemainboxoneheading}>
          <h1>Program and project</h1>
          <h1>management</h1>
        </div>

        <div className={Styles.circleservicemainboxonepara}>
          <p>
            At Royal Technology Solutions, our mission is to empower our clients
            in achieving their strategic business goals by harnessing the power
            of infrastructure technologies. We are dedicated to delivering
            exceptional value by understanding and surpassing customer
            expectations. As part of our commitment, we employ the discipline of
            Applied Project Management to ensure optimal outcomes.
          </p>
          <p>
            Program and Project Management lie at the core of our service
            offerings, enabling us to meticulously plan, execute, monitor,
            control, and successfully conclude projects. Our expertise in these
            areas ensures timely completion, adherence to budgets, and utmost
            client satisfaction.
          </p>
        </div>
        <br />
        <br />
        <Link href="/contact">Let’s Talk</Link>
      </div>
    </div>
  );
};

export default Circle;
