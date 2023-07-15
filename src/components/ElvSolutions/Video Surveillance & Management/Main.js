import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1> Institutions and </h1>
            <h1> Organizations</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Government Ministries: Ensure the privacy and security of
                valuable data and intellectual property within government
                ministries.
              </li>
              <li>
                Healthcare Institutions and Hospitals: Implement
                state-of-the-art surveillance systems to safeguard sensitive
                information and ensure a secure environment for patients and
                staff.
              </li>
              <li>
                Financial Institutions and Banks: Prioritize privacy and
                security measures to protect financial data and customer
                information.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/02/Institutions-and-Organizations.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/elvsolutions/02/Educational Institutions.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Educational </h1>
            <h1> Institutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Schools: Schools prioritize establishing secure environments to
                protect student records, maintain a safe learning environment,
                and ensure the privacy of student information. They implement
                access controls, secure networks, and surveillance systems to
                prevent unauthorized access and ensure the safety and security
                of students and staff.
              </li>

              <li>
                Colleges and Universities: Implement robust security systems to
                protect student and faculty records, research data, and
                intellectual property. Enhance campus security to ensure the
                safety of students, staff, and visitors.
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
            <h1>Buildings and </h1>
            <h1> Spaces</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Residential Buildings and Housing Complexes: Implement security
                measures to ensure the safety and privacy of residents and their
                personal belongings.
              </li>
              <li>
                Commercial Buildings and Office Spaces: Create secure
                environments in commercial buildings and office spaces to
                protect sensitive business information and ensure the safety of
                employees and visitors.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/elvsolutions/02/Commercial Buildings and Office Spaces.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
