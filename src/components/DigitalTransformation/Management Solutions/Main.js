import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Streamlined </h1>
            <h1>Operations</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Centralize content and documentation, ensuring easy access and
                efficient information sharing.
              </li>
              <li>
                Efficiently organize, store, and retrieve documents, saving time
                and enhancing operational efficiency.
              </li>

              <li>
                Foster seamless communication and collaboration between teams
                through tools like instant messaging, video conferencing, and
                shared document editing.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/04/Streamlined Operations.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/digitaltransformation/04/Enhanced Productivity.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Enhanced </h1>
            <h1>Productivity </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                {" "}
                Identify bottlenecks and streamline workflows to optimize
                resource allocation and expedite task completion.
              </li>
              <li>
                Empower teams with digital collaboration tools for efficient
                communication, task delegation, and progress tracking.
              </li>
              <li>
                Automate routine tasks to save time and allocate resources to
                more strategic activities.
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
            <h1>Data-Driven </h1>
            <h1>Insights</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Gain valuable insights through data analytics, enabling
                businesses to extract meaning from operational data.
              </li>
              <li>
                Track real-time performance indicators to measure progress and
                identify areas requiring attention.
              </li>
              <li>
                Leverage data for proactive decision-making, identifying
                challenges, mitigating risks, and capitalizing on opportunities.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/04/Data-Driven Insights.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
