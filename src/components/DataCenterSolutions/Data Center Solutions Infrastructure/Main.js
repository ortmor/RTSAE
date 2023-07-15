import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Higher Efficiency </h1>
            <h1>& Lower Costs</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
              Optimal resource utilization reduces hardware costs and enhances efficiency.

              </li>
              <li>
              Automated operations management boosts staff productivity and significantly reduces operational expenses.

              </li>

              <li>
              Streamlined processes and decreased manual intervention result in improved efficiency and substantial cost savings.

              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/01/Higher Efficiency & Lower Costs.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/datacentersolutions/01/Application Provisioning in Minutes.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Application Provisioning</h1>
            <h1>in Minutes</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
              Rapid workload deployment enabled by policy-based configuration expedites time-to-market.

              </li>

              <li>
              Automatic resource adjustment ensures optimal performance, scalability, and efficient resource allocation.

              </li>

              <li>
              Faster application provisioning accelerates business agility, enabling rapid innovation and responsiveness.
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
            <h1>The Right Availability</h1>
            <h1> & Security for Every Application</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
              Automated business continuity measures ensure uninterrupted availability and minimal downtime.

              </li>

              <li>
              Top-of-the-line security protocols, including robust firewalls and encryption mechanisms, safeguard against cyber threats and unauthorized access.

              </li>

              <li>
              Robust security measures foster customer trust, compliance with regulations, and protection of sensitive data.

              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/01/The Right Availability & Security for Every Application.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/datacentersolutions/01/Any Workload Delivered Anywhere.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Any Workload</h1>
            <h1>Delivered Anywhere</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
              Flexibility and scalability provided by multi-platform and multi-cloud support accommodate diverse business needs.

              </li>

              <li>
              Instant delivery to any user on any device, facilitated by optimized content delivery networks (CDNs), enhances mobility, productivity, and user satisfaction.

              </li>

              <li>
              Seamless application delivery across various environments, operating systems, platforms, and devices, results in an exceptional user experience, accessibility, and broader audience reach.

              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
