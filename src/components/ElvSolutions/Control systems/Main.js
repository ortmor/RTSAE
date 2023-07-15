import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Control </h1>
            <h1>Systems</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Control systems play a vital role in various industries,
                enabling efficient and automated operations by encompassing a
                range of technologies and solutions for centralized control.
              </li>
              <li>
                They drive performance optimization, enhance productivity, and
                foster operational excellence.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/04/Control Systems.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/elvsolutions/04/Building Management Systems (BMS).webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Building Management </h1>
            <h1>Systems (BMS) </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                BMS is a centralized software system that monitors control
                points in high-rise buildings, enabling sustainability and cost
                control through the integration of multiple sensors on HVAC and
                MEP systems for effective implementation.
              </li>
              <li>
                It ensures efficient building operations, optimizing energy
                usage, and enhancing occupant comfort.
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
            <h1>Lighting Control </h1>
            <h1>Systems</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Lighting control systems focus on energy-saving solutions and
                offer specialized devices like actuators and GUI interfaces from
                prominent manufacturers.
              </li>
              <li>
                RTS provides designs and installations for centralized control
                of lights, HVAC, and blinds, with successful implementations in
                government offices, VIP Majlis, and Palaces.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/04/Lighting Control Systems.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/elvsolutions/04/Master Clock Systems.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Master Clock</h1>
            <h1> Systems</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Master clock systems provide centralized time management based
                on GPS-enabled servers, playing a critical role in accurate time
                stamping for security systems.
              </li>
              <li>
                They are implemented in schools and integrated with central bell
                systems, ensuring precise time synchronization and coordination.
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
            <h1>Guest Room Management </h1>
            <h1>Systems (GRMS)</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                GRMS is a luxury segment control solution that offers a complete
                room control system for hotels, enhancing the hospitality
                experience for guests.
              </li>
              <li>
                RTS specializes in GRMS design and implementation, including
                international projects, to provide seamless control and comfort
                in guest rooms.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/04/Guest Room Management Systems.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
