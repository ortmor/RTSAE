import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Enhanced Performance</h1>
            <h1> and Reliability</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Proactive maintenance in data centers ensures that potential
                issues are identified and resolved before they cause downtime,
                leading to improved performance and reduced disruptions.
              </li>
              <li>
                By implementing effective maintenance practices, the lifespan of
                data center equipment is extended, minimizing the need for
                costly replacements and reducing operational expenses.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/04/Enhanced Performance and Reliability.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/datacentersolutions/04/Cost Efficiency and Optimization.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Cost Efficiency </h1>
            <h1> and Optimization</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                {" "}
                Energy-efficient maintenance practices, such as optimizing
                cooling systems and equipment power usage, result in reduced
                operational costs and improved energy conservation in data
                centers.
              </li>
              <li>
                Maximizing asset utilization through proper maintenance and
                monitoring helps minimize waste and unnecessary expenses,
                optimizing resource allocation and cost efficiency.
              </li>
              <li>
                Planned maintenance schedules and regular equipment inspections
                enable better budget control by allowing for more accurate cost
                forecasting and avoiding unexpected repair or replacement costs.
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
            <h1> Compliance and</h1>
            <h1> Risk Mitigation</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Maintaining regulatory compliance in data centers through
                regular audits and adherence to industry standards ensures
                avoidance of penalties, legal issues, and reputational damage.
              </li>

              <li>
                Identifying and addressing vulnerabilities through thorough
                maintenance protocols mitigates risks of data breaches, system
                failures, and potential security threats in data centers.
              </li>
              <li>
                Well-maintained data centers with reliable backup systems and
                disaster recovery plans support business continuity efforts,
                reducing the impact of disruptions and ensuring uninterrupted
                service delivery even in challenging circumstances.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/04/Compliance and Risk Mitigation.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
