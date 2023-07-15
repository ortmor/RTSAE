import Link from "next/link";
import Styles from "../../styles/services.module.scss";
import { Fragment } from "react";

const Servicesmain = () => {
  return (
    <Fragment>
    <div className={Styles.servicemainparentdiv}>
      <div className={Styles.servicemainboxone}>
        <div className={Styles.servicemainboxoneheading}>
          <h1>Solution design &</h1>
          <h1>professional services</h1>
        </div>

        <div className={Styles.servicemainboxonepara}>
          <p>
            At RTS, we prioritize understanding your business and keeping a
            pulse on your direct competitors. Our commitment is to fulfill your
            management's requests and deliver top-notch IT solutions and
            expertise throughout the project duration.
          </p>
          <p>
            We offer a comprehensive range of services, including hardware,
            software, networking, consultancy, training, maintenance, ERP,
            Artificial Intelligence equipment, program/project management, and
            support. This complete digital solutions package is designed to meet
            the highest quality standards and cater to your organization's
            specific needs.
          </p>
        </div>
        <br />
        <br />
        <Link href="/contact">Let’s Talk</Link>
      </div>

      <div  className={Styles.servicemainboxtwo}>
        <img src="/services/heromain.webp"></img>
        <div className={Styles.servicemainboxtwoimg}></div>
      </div>
     
    </div>
    <div id="managedservices"></div>
    </Fragment>
  );
};

export default Servicesmain;
