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
            <h1>Efficiency</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                {" "}
                Automating repetitive tasks saves time and effort, allowing
                employees to focus on more strategic work and increasing
                productivity.
              </li>
              <li>
                {" "}
                Automated systems operate 24/7, without breaks, leading to
                continuous task completion and improved efficiency.
              </li>

              <li>
                These systems identify inefficiencies in processes and recommend
                enhancements, optimizing resource utilization and streamlining
                workflows.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/02/Streamlined Efficiency.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/digitaltransformation/02/Informed Decision-making.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Informed </h1>
            <h1>Decision-making</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Automated systems analyze vast datasets, uncovering hidden
                patterns and trends that human analysis may miss.
              </li>
              <li>
                Real-time insights provided by these systems enable quicker and
                smarter decision-making, ensuring timely actions.
              </li>
              <li>
                By detecting potential threats through data analysis, automated
                systems help minimize risks and enhance decision-making.
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
            <h1>Enhanced Customer </h1>
            <h1> Experience</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Powered chatbots offer personalized customer service, providing
                instant assistance and improving customer satisfaction.
              </li>
              <li>
                Understanding customer preferences through automated systems
                allows businesses to tailor their offerings and marketing
                efforts, leading to higher satisfaction.
              </li>
              <li>
                Anticipating customer needs, automated systems enable proactive
                solutions, delivering a seamless and personalized customer
                experience.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/02/Customer Experience.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
