import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Expanded Market </h1>
            <h1> Reach</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Reach a wider audience by targeting smartphone users who prefer
                accessing information and services on their mobile devices.
              </li>
              <li>
                Ensure your website is optimized for mobile devices to capture
                the growing number of users who browse and shop on their phones
                or tablets.
              </li>
              <li>
                Reach customers beyond your physical location by providing easy
                access to your business offerings through mobile applications
                and well-hosted websites.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/05/Expanded Market Reach.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/digitaltransformation/05/Improved Customer Engagement and Sales.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Improved Customer </h1>
            <h1>Engagement and Sales</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Provide seamless and user-friendly interfaces, personalized
                content, and convenient features like mobile shopping carts and
                secure payment gateways to boost customer satisfaction and
                increase sales.
              </li>
              <li>
                Engage with customers directly through targeted notifications,
                alerts, and promotions to drive repeat purchases and foster
                customer loyalty.
              </li>
              <li>
                Enable customers to interact with your business, make inquiries,
                provide feedback, and request support through mobile
                applications and website hosting, enhancing customer engagement
                and building stronger relationships.
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Streamlined Operations</h1>
            <h1> and Efficiency</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Facilitate efficient communication and collaboration among
                employees through mobile applications, enabling real-time
                updates, task management, and streamlined workflows.
              </li>
              <li>
                Leverage data and analytics provided by mobile applications and
                website hosting to gain valuable insights into customer
                behavior, preferences, and usage patterns, enabling data-driven
                decision-making and improved marketing strategies.
              </li>
              <li>
                Benefit from scalable hosting solutions that can accommodate
                growing business needs and handle increased website traffic,
                ensuring smooth operations and uninterrupted service delivery.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/05/Streamlined Operations and Efficiency.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
