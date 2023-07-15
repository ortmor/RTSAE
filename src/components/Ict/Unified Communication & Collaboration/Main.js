import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Seamless Integration </h1>
            <h1>and Compatibility</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                {" "}
                Effortlessly integrate with existing applications and systems,
                streamlining workflows.
              </li>
              <li>
                Ensure compatibility across various devices and operating
                systems for seamless access.
              </li>

              <li>
                Seamlessly integrate with CRM, project management, and
                email/calendar tools to centralize communication and enhance
                productivity.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/06/Seamless Integration and Compatibility.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/06/Robust Security and Reliability.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Robust Security </h1>
            <h1>and Reliability</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Implement strong security measures to protect communication and
                data.
              </li>
              <li>Safeguard privacy by encrypting voice and video calls.</li>
              <li>
                Guarantee reliable communication through redundant systems and
                backups.
              </li>
              <li>
                Adhere to industry regulations and data protection standards to
                ensure compliance and data integrity.
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
            <h1>Scalability and </h1>
            <h1> Customization</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Scale effortlessly to accommodate business growth without
                compromising performance.
              </li>
              <li>
                Customize features to meet specific needs and enhance
                efficiency.
              </li>
              <li>
                Extend functionality by integrating with third-party
                applications.
              </li>

              <li>
                Foster easy adoption with user-friendly interfaces for seamless
                onboarding and enhanced user experience.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/06/Scalability and Customization.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
