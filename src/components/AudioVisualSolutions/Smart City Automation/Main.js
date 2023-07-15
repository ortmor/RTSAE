import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Small Cities </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                RTS offers the Smart City automation solutions program to small
                cities.
              </li>
              <li>
                Enables strategic planning, application development, and IoT
                integrations.
              </li>

              <li>
                Optimizes resource utilization in areas like transport, waste
                management, lighting, utilities, surveillance, and traffic
                management.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/07/Our Smart City Automation is ideal for.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/07/med.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Medium Cities</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                The Smart City automation solutions program extends to
                medium-sized cities.
              </li>
              <li>
                Provides comprehensive digital infrastructure and self-aware
                mechanisms.
              </li>

              <li>
                Enhances quality of life and eliminates unnecessary surplus
                usage.
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
            <h1>Large Cities </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                RTS caters to the automation needs of large cities through the
                Smart City program.
              </li>
              <li>
                Offers end-to-end solutions for digital integration and
                problem-solving capabilities.
              </li>

              <li>
                Addresses resource optimization in various domains, such as
                transport, waste management, lighting, utilities, surveillance,
                and traffic management.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/07/large.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/07/metro.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Metropolitan Areas </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                The Smart City automation solutions program is applicable to
                metropolitan areas.
              </li>
              <li>
                Enables strategic planning, IoT integrations, and self-aware
                mechanisms.
              </li>

              <li>
                Enhances resource utilization and improves the overall
                functioning of the urban environment.
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
            <h1>Urban Areas </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
              RTS provides the Smart City automation solutions program for urban areas.

              </li>
              <li>
              Offers comprehensive digital infrastructure and problem-solving capabilities.
              </li>

              <li>
              Enhances efficiency and sustainability in areas like transport, waste management, lighting, utilities, surveillance, and traffic management.

              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/07/urban.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

    </Fragment>
  );
};

export default Main;
