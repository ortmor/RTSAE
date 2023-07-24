import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Our Promise to You </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                We provide a comprehensive Digital Transformation Assessment,
                helping you understand the objectives and potential impact of
                your digital transformation journey.
              </li>
              <li>
                We develop a clear Digital Vision and Strategy tailored to your
                business, empowering you to enhance competitiveness and achieve
                success.
              </li>

              <li>
                Our Digital Portfolio Management ensures effective management of
                digital initiatives and resources.
              </li>
              <li>
                We offer expert Change Management support to facilitate a smooth
                transition and maximize adoption.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/06/Promise.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/digitaltransformation/06/Results.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Results Tailored </h1>
            <h1>For You</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Our services foster improved collaboration across the business,
                facilitating seamless communication and teamwork.
              </li>
              <li>
                We enable an increase in data accuracy and availability,
                empowering informed decision-making and enhanced operational
                efficiency.
              </li>
              <li>
                Our solutions aim for increased Return on Investment (ROI) by
                optimizing digital initiatives and resource allocation.
              </li>

              <li>
                We drive improved efficiency and flexibility through streamlined
                processes and agile methodologies.
              </li>

              <li>
                Continuous improvement is embedded in our approach, fostering a
                culture of ongoing innovation and growth.
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <br />
          <br />
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Our Services </h1>
            <h1> For You</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                We assist in developing and shaping digital initiatives that
                align with your business goals.
              </li>
              <li>
                We create roadmaps that outline the sequencing and dependencies
                of digital projects, ensuring a clear path for implementation.
              </li>
              <li>
                Our services encompass requirements gathering and management to
                define project scope and deliverables.
              </li>

              <li>
                We facilitate effective stakeholder and communication
                management, ensuring engagement and alignment throughout the
                transformation process.
              </li>

              <li>
                Our expertise in risk/issue management and mitigation helps
                identify and address potential obstacles.
              </li>

              <li>
                We provide end-to-end project planning and management to ensure
                on-time and within-budget delivery.
              </li>

              <li>
                Our change management services support successful adoption and
                integration of digital solutions.
              </li>

              <li>
                We oversee cost and budget management, ensuring efficient
                resource utilization and financial control.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
          <br />
          <br />
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/06/Service.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
