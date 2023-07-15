import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Smart Automation </h1>
            <h1> Solutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Audio Visual Systems : Seamlessly control audio and video
                devices, including TVs, speakers, projectors, and streaming
                services.
              </li>
              <li>
                Create immersive entertainment experiences with centralized
                audio and video distribution.
              </li>

              <li>
                Lighting Control System : Effortlessly control and automate
                lighting fixtures, dimmers, and color settings.
              </li>

              <li>
                {" "}
                Create customized lighting scenes to suit different moods and
                occasions.
              </li>
              <li>
                Drapes and Curtain Control : Integrate automated control for
                drapes and curtains, allowing for convenient adjustment of
                natural light and privacy.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
        <img src="/audiovisualsolutions/06/Lighting Control System.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/06/BMS.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Building Management </h1>
            <h1> Systems (BMS) Integration</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Butler Calling Solutions : Integrate systems for butler calling
                and service requests, ensuring prompt and efficient response.
              </li>
              <li>
                Master Clock Systems : Synchronize time across different areas
                of a building or facility, ensuring accuracy and coordination.
              </li>
              <li>
                Room Booking Solutions : Implement automated room booking
                systems to streamline scheduling and maximize space utilization.
              </li>

              <li>
                Background and Public Address Systems : Control background music
                and public address systems for announcements and audio
                distribution.
              </li>

              <li>
                Guest Room Management Solutions : Provide guest-centric
                automation solutions for enhanced comfort and convenience in
                hotel rooms.
              </li>

              <li>
                IPTV and Video Demand Systems : Enable interactive TV and
                on-demand video services for guests or residents.
              </li>

              <li>
                {" "}
                Home Cinema Solutions : Design and install customized home
                cinema systems for an immersive entertainment experience.
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
       
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1> Security and Monitoring </h1>
            <h1>Systems</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Security and Monitoring Systems: Integrate surveillance cameras,
                alarms, and access control devices for comprehensive security
                solutions.
              </li>

              <li>
                IT and WiFi Infrastructure: Establish robust IT infrastructure
                and WiFi networks to support smart automation systems and
                connectivity.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
        <img src="/audiovisualsolutions/06/SAS.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
