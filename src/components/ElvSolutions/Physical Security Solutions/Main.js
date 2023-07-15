import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Institutions and </h1>
            <h1> Organizations</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Government Ministries: Implement cutting-edge physical security
                solutions to ensure the safety and control within government
                ministries. This includes access control systems, surveillance
                cameras, and intrusion detection systems to protect sensitive
                information and critical infrastructure.
              </li>
              <li>
                Healthcare Institutions and Hospitals: Enhance security measures
                in healthcare institutions and hospitals by implementing
                comprehensive physical security solutions. This may involve
                access control systems, video surveillance, alarm systems, and
                panic buttons to safeguard patients, staff, and sensitive
                medical resources.
              </li>
              <li>
                Financial Institutions and Banks: Safeguard financial
                institutions and banks with advanced physical security
                solutions. This can include access control systems with
                biometric authentication, CCTV surveillance, intrusion detection
                systems, and vault protection to prevent unauthorized access,
                theft, and fraud.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/03/Government Ministries.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/elvsolutions/03/Educational Institutions.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Educational </h1>
            <h1>Institutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Schools: Implement physical security solutions in schools to
                ensure the safety of students, staff, and visitors. This may
                involve access control systems at entry points, video
                surveillance systems, emergency alert systems, and visitor
                management systems to create a secure learning environment.
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
            <h1> Buildings and </h1>
            <h1> Spaces</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Residential Buildings and Housing Complexes: Enhance security
                measures in residential buildings and housing complexes with
                physical security solutions. This can include access control
                systems for main entrances, video intercom systems, CCTV
                surveillance, and perimeter security measures to protect
                residents and deter unauthorized entry.
              </li>
              <li>
                Factories: Implement physical security solutions in factories to
                monitor access, enhance safety protocols, and protect sensitive
                areas. This may involve access control systems, video
                surveillance, alarm systems, and industrial security measures to
                prevent theft, accidents, and ensure compliance with safety
                regulations.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/03/Buildings and Spaces.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
