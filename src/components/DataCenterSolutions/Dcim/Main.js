import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1> Sustainability</h1>
            <h1> and Innovation</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Environmentally-friendly practices and solutions for sustainable
                data centers, including energy-efficient infrastructure and
                renewable energy integration.
              </li>
              <li>
                Integration of cutting-edge technologies such as AI-driven
                energy management systems and advanced cooling techniques to
                enhance data center efficiency and reduce environmental impact.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/03/Sustainability and Innovation.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/datacentersolutions/03/Simulation and Modeling.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Simulation and</h1>
            <h1> Modeling</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Utilization of advanced tools and software for accurate
                simulation and modeling of data center designs.
              </li>
              <li>
                Optimization of airflow management, thermal distribution, and
                energy efficiency through detailed analysis and predictive
                modeling.
              </li>

              <li>
                Mitigation of potential risks and identification of performance
                optimization opportunities before implementation.
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
            <h1> Professional </h1>
            <h1> Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Comprehensive support throughout critical facility projects,
                including planning, design, implementation, and ongoing
                maintenance.
              </li>
              <li>
                Expert guidance from qualified engineers and consultants who
                provide industry-specific knowledge and best practices.
              </li>

              <li>
                Tailored solutions and customized strategies to meet the unique
                requirements and objectives of each data center project.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/03/Professional Services.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/datacentersolutions/03/Critical Power.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Critical</h1>
            <h1> Power</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Design and implementation of reliable and resilient power
                systems to ensure uninterrupted operations.
              </li>
              <li>
                Integration of backup power solutions such as uninterruptible
                power supply (UPS) systems, generators, and alternative power
                sources for seamless power supply during outages or disruptions.
              </li>

              <li>
                Robust power management strategies to optimize efficiency,
                ensure scalability, and protect critical data center equipment.
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
            <h1> Cooling and Air </h1>
            <h1> Conditioning</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Customized cooling solutions designed to meet the specific
                cooling requirements of data centers.
              </li>
              <li>
                Implementation of advanced cooling technologies, such as
                precision cooling units, containment systems, and intelligent
                airflow management, to maintain optimal temperature control and
                minimize energy consumption.
              </li>

              <li>
                {" "}
                Optimization of cooling infrastructure to prevent overheating,
                reduce hotspots, and enhance overall energy efficiency.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/03/Cooling and Air Conditioning.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
