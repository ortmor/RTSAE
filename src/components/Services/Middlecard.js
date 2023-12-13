import Link from "next/link";
import Styles from "../../styles/services.module.scss";
import { Fragment } from "react";

const MiddleCard = () => {
  return (
    <Fragment>

        <div className={Styles.mainmiddlecard}>
      <div className={Styles.servicemainparentdiv}>
   
        <div className={Styles.servicemainboxtwo}>
          <img src="/services/middle.webp"></img>
          <div className={Styles.servicemainboxtwoimg}></div>
        </div>
        <div className={Styles.servicemainboxone}>
          <div className={Styles.servicemainboxoneheading}>
            <h1>Our Comprehensive Support and </h1>
            <h1>Maintenance Services</h1>
          </div>

          <div className={Styles.servicemainboxonepara}>
            <p>
              At Royal Technology Solutions, we take pride in our extensive
              range of specialized services, delivered by a team of
              exceptionally skilled engineers with a wealth of knowledge and
              experience. Our service offerings include:
            </p>
            <br />

            <ol style={{ marginLeft: "1em" }}>
              <li>Data Center Audit</li>
              <li>Uptime Certification</li>
              <li>Power Quality Audit </li>
              <li>Power Quality Audit </li>
              <li>Thermography Audit </li>
              <li>Data Center Cleaning </li>
              <li>Ongoing Data Center Maintenance </li>
            </ol>

            <p>
              With our team of highly qualified professionals, we ensure the
              optimal performance and reliability of your data center
              infrastructure. Choose Royal Technology Solutions for expert
              support and maintenance you can trust.
            </p>
          </div>
          <br />
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>
      <div id="managedservices"></div>
      </div>
    </Fragment>
  );
};

export default MiddleCard;
