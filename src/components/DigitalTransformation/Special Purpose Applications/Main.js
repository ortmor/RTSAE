import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Improved Operational Efficiency</h1>
            <h1> and Cost Optimization</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Automation and digitization of processes streamline operations
                and improve efficiency.
              </li>
              <li>
                Data analytics and real-time insights optimize resource
                allocation and minimize costs.
              </li>

              <li>
                Digitized workflows and collaborative tools drive productivity
                and reduce operational expenses.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/03/Improved Operational Efficiency.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/digitaltransformation/03/Enhanced Customer Experience.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Enhanced Customer Engagement</h1>
            <h1> and Experience </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Digital transformation allows for personalized customer
                experiences and seamless omnichannel engagement.
              </li>
              <li>
                Improved communication, real-time support, and personalized
                services enhance overall customer satisfaction.
              </li>
              <li>
                Digital tools enable businesses to deliver targeted offerings
                and foster customer loyalty.
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
            <h1>Increased Agility </h1>
            <h1> and Adaptability</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Digital transformation enables businesses to quickly respond and
                adapt to market changes, driving competitive advantage.
              </li>

              <li>
                Streamlined operations and agile methodologies foster faster
                time-to-market for products and services.
              </li>
              <li>
                Proactive identification of market shifts ensures staying ahead
                of the competition and driving growth.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/03/Accelerated Innovation.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
