import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Large-scale Enterprise SDDC</h1>
            <h1>(Software Defined Datacenter) Solutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Utilizes software-defined technology to manage and automate data
                center infrastructure.
              </li>
              <li>
                Scalable and flexible infrastructure to meet the needs of large
                enterprises.
              </li>
              <li>
                Centralized control and management of computing, storage, and
                networking resources.
              </li>

              <li>
                Enhances agility, efficiency, and cost-effectiveness in data
                center operations.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/05/Large-scale Enterprise SDDC (Software Defined Datacenter) Solutions.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/05/Enterprise-level Software-Defined Campus IT Infrastructure Solutions.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Enterprise-level Software-Defined Campus IT Infrastructure</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Enables centralized management and control of campus IT
                infrastructure.
              </li>
              <li>
                Utilizes software-defined networking (SDN) to virtualize network
                resources.
              </li>
              <li>Provides agility and scalability for enterprise networks.</li>

              <li>
                Improves network performance, security, and manageability.
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
          <br />
          <br />
        </div>
      </div>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Enterprise Data Center </h1>
            <h1> Load Balancing Solutions.</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Optimizes resource utilization by evenly distributing traffic
                load.
              </li>
              <li>
                Enhances reliability and availability of applications and
                services.
              </li>
              <li>
                Improves performance and responsiveness of data center
                applications.
              </li>

              <li>
                Enables seamless scaling and high availability of enterprise
                applications.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/05/Enterprise-Data-Center-Load-Balancing-Solutions.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/05/SDWAN (Software-Defined Wide Area Network) Solutions.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>SDWAN (Software-Defined Wide Area Network)</h1>
            <h1>Solutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>Centralized management and control of wide area networks.</li>
              <li>
                Utilizes software-defined technology to dynamically route
                network traffic.
              </li>
              <li>Enhances network performance, reliability, and security.</li>

              <li>
                Simplifies network management and reduces costs compared to
                traditional WAN solutions.
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
