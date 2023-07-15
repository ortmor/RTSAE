import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Data Center Design and </h1>
            <h1>Construction Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                3D Design: Utilizing advanced 3D design technology to create
                detailed and accurate data center plans.
              </li>
              <li>
                BIM (Building Information Modelling): Employing BIM techniques
                to facilitate efficient collaboration and integration of various
                design elements.
              </li>

              <li>
                Planning & Construction: Managing the entire data center
                construction process, including site selection, permits, and
                project management.
              </li>

              <li>
                Equipment Sourcing and Installation: Procuring and installing
                essential data center equipment such as racks, cabling, and
                infrastructure components.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/02/Planning & Construction.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/datacentersolutions/02/MEP.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> MEP (Mechanical, Electrical & Plumbing) Specialists</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Expertise in managing MEP systems in data centers: Ensuring the
                efficient operation of mechanical, electrical, and plumbing
                systems crucial for data center functionality.
              </li>

              <li>
                Power Distribution and Management: Designing and implementing
                power distribution systems to deliver reliable and efficient
                electricity to data center equipment.
              </li>

              <li>
                {" "}
                Fire Suppression and Detection: Installing advanced fire
                suppression and detection systems to protect the data center
                from potential hazards.
              </li>

              <li>
                Environmental Monitoring: Implementing sensors and monitoring
                systems to track temperature, humidity, and air quality within
                the data center.
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
            <h1> Power </h1>
            <h1>Solutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Generators & Uninterruptible Power Supplies (UPS): Providing
                reliable backup power solutions to ensure uninterrupted
                operation in case of power outages or disruptions.
              </li>

              <li>
                Power Management and Load Balancing: Implementing intelligent
                power management systems to optimize power usage, reduce energy
                waste, and ensure optimal load balancing.
              </li>

              <li>
                {" "}
                Power Quality Analysis: Conducting assessments and implementing
                measures to maintain consistent power quality, preventing
                voltage fluctuations and electrical disruptions.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/datacentersolutions/02/power.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/datacentersolutions/02/cooling.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Cooling </h1>
            <h1> Systems</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Cooling & Chiller Systems: Implementing effective cooling
                systems to maintain optimal temperatures and prevent overheating
                in the data center environment.
              </li>
              <li>
                Hot & Cold-Aisle Containment: Designing and implementing
                containment systems to separate hot and cold air streams,
                enhancing cooling efficiency and reducing energy consumption.
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
