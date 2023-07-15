import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Public Sector </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Government Ministries: Enhance public communication and
                information sharing within government ministries.
              </li>

              <li>
                Healthcare Institutions and Hospitals: Improve communication
                with patients, staff, and visitors in healthcare institutions
                and hospitals.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/01/Healthcare Institutions and Hospitals.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/01/commericalsector.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Commercial Sector</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Shopping Malls: Engage shoppers, promote brands, and provide
                important information within shopping malls.
              </li>

              <li>
                Telecom Companies: Utilize digital signage to enhance
                communication and branding efforts in the telecom industry.
              </li>

              <li>
                Clubs: Enhance member experiences and communication within
                clubs, offering dynamic and interactive displays.
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
            <h1>Industrial Sector</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Factories: Utilize large-format indoor and outdoor signage
                solutions to enhance communication, and display real-time
                production updates, safety reminders, and performance metrics
                within factories, improving operational efficiency and promoting
                a culture of safety.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/01/industrialsector.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
