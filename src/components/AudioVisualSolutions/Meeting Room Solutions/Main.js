import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Collaboration Spaces</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Experience hubs: Create immersive and interactive environments
                for collaborative work and idea sharing.
              </li>
              <li>
                Presentation rooms: Equipped with advanced technology for
                impactful presentations and seamless content sharing.
              </li>

              <li>
                Board rooms: Designed for executive meetings and
                decision-making, featuring sophisticated audiovisual solutions.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/02/Presentations Rooms.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/02/decision.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Decision-Making Spaces </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                {" "}
                Critical war rooms: Specialized spaces for high-stakes
                decision-making, crisis management, and strategic planning.
              </li>
              <li>
                Training rooms: Optimal environments for conducting training
                sessions, workshops, and skill development programs.
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
            <h1> Event Spaces</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Auditoriums: Large-scale spaces with advanced audiovisual
                capabilities for hosting conferences, seminars, and
                performances.
              </li>

              <li>
                Multipurpose rooms: Flexible spaces that can be customized to
                accommodate a variety of events, such as meetings, exhibitions,
                and social gatherings.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/02/event.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
