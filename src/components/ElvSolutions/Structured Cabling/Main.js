import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1> Improved Connectivity </h1>
            <h1>and Efficiency</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Seamless communication and data transfer across devices and
                systems foster a connected and efficient workplace environment.
              </li>
              <li>
                Enhanced collaboration tools and platforms promote teamwork and
                productivity within the organization, enabling teams to work
                together seamlessly.
              </li>

              <li>
                Reduction in network downtime and improved reliability ensure
                uninterrupted operations and smooth workflow.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/01/Improved Connectivity and Efficiency.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/elvsolutions/01/Scalability and Future-Readiness.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Scalability and </h1>
            <h1>Future-Readiness</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Easy adaptation and expansion of network infrastructure allow
                businesses to scale their operations as needs evolve,
                accommodating growth and technological advancements.
              </li>
              <li>
                {" "}
                The flexibility to integrate emerging technologies and devices
                ensures that the network remains future-ready, capable of
                supporting new applications and requirements.
              </li>
              <li>
                Cost-effective scalability minimizes the need for extensive
                rewiring or infrastructure overhaul, saving both time and
                resources.
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
            <h1> Simplified Management </h1>
            <h1> and Cost Efficiency</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Streamlined troubleshooting, maintenance, and upgrades to
                simplify network management, reducing the burden on IT staff and
                minimizing disruptions to daily operations.
              </li>
              <li>
                Reduction in operational costs and infrastructure complexity
                leads to cost efficiency and optimized resource allocation.
              </li>
              <li>
                Long-term cost savings are achieved through standardized design
                and installation processes, enabling efficient deployment and
                maximizing the return on investment.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/01/Simplified Management and Cost Efficiency.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
