import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Commercial Spaces </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Hotel Lobby Lounges: Enhance the ambiance and guest experience
                in hotel lobby lounges with high-quality PA-BGM systems.
              </li>
              <li>
                Mall: Create an immersive shopping experience by implementing
                top-of-the-line PA-BGM systems in malls.
              </li>

              <li>
                Auditoriums: Ensure exceptional sound quality and enhance
                performances in auditoriums with carefully designed PA-BGM
                systems.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/03/Mall and Auditoriums.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/03/educational.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Educational Spaces</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Schools: Improve communication and create an engaging learning
                environment in schools through tailored PA-BGM systems.
              </li>

              <li>
                Educational Institutions: Enhance educational experiences and
                facilitate effective communication within educational
                institutions using specialized PA-BGM systems.
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
            <h1> Public and Community </h1>
            <h1>Spaces</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Public Spaces: Enrich the atmosphere and provide clear
                communication in public spaces, such as parks and plazas, with
                well-designed PA-BGM systems.
              </li>
              <li>
                Majlis: Enhance the gathering experience in Majlis areas by
                implementing high-quality PA-BGM systems for better sound
                distribution and clarity.
              </li>

              <li>
                Community Spaces: Foster community engagement and communication
                in community spaces with customized PA-BGM systems that cater to
                diverse needs and events.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/03/community.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

   
    </Fragment>
  );
};

export default Main;
