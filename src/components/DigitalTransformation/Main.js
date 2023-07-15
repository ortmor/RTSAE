import Link from "next/link";
import Styles from "../../styles/solution.module.scss";
import { Fragment } from "react";

const Main = () => {
  return (
    <Fragment>
      <br />
      <br />
      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Enterprise Resource</h1>
            <h1>Planning</h1>
          </div>
          <br />
          <Link href="/digitaltransformation/enterpriseresourceplanning">
            Read More
          </Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/digitaltransformation/01/Enterprise Resource Planning.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/digitaltransformation/02/Artificial Intelligence.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Artificial</h1>
            <h1>Intelligence</h1>
          </div>
          <br />
          <Link href="/digitaltransformation/artificialintelligence">
            Read More
          </Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Special Purpose </h1>
            <h1> Applications</h1>
          </div>
          <br />
          <Link href="/digitaltransformation/specialpurposeapplications">
            Read More
          </Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/digitaltransformation/03/Special Purpose Applications.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/digitaltransformation/04/Management Solutions.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Management </h1>
            <h1>Solutions</h1>
          </div>
          <br />
          <Link href="/digitaltransformation/managementsolutions">
            Read More
          </Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Enterprise Mobile Application </h1>
            <h1>& Website Hosting</h1>
          </div>
          <br />
          <Link href="/digitaltransformation/enterprisemobileapplicationwebsitehosting">
            Read More
          </Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/digitaltransformation/05/Enterprise Mobile Application & Website Hosting.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/digitaltransformation/06/digitaltransformationsub.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Digital Transformation </h1>
            <h1>Services</h1>
          </div>
          <br />
          <Link href="/digitaltransformation/digitaltransformationservices">
            Read More
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
