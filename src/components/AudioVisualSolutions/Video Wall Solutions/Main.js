import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Control Room </h1>
            <h1> Applications</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Control rooms are equipped with video solutions to monitor and
                manage critical operations in various industries.
              </li>
              <li>
                Video walls and display systems provide real-time visualization
                of data, enhancing situational awareness and decision-making.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/04/Control Room.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/04/Signboard.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Large Sign Boards </h1>
            <h1> with Digital Signage</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Large signboards incorporate digital signage to deliver dynamic
                and engaging content to audiences.
              </li>
              <li>
                These display setups are ideal for advertising, information
                dissemination, and brand promotion in high-traffic areas.
              </li>

              <li>
                It can be used to amplify and enhance Auditorium and Backdrops:
              </li>

              <li>
                Video solutions enhance auditoriums by providing visually
                stunning backdrops and immersive experiences.
              </li>
              <li>
                Large-scale video displays create captivating environments for
                performances, presentations, and events.
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
            <h1> Immersive Cubes</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Immersive cubes offer a unique and immersive viewing experience
                by surrounding viewers with seamless video content.
              </li>
              <li>
                These setups are used in immersive exhibits, virtual reality
                applications, and interactive showcases.
              </li>

            
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/04/Cubes.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

    







      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/04/outdoor.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
          <h1>Outdoor Building</h1>
            <h1> Facade </h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
            <li>
                Video solutions transform the exterior of buildings into dynamic
                and attention-grabbing displays.
              </li>
              <li>
                Outdoor building façades utilize large-scale video screens to
                showcase visually striking content and create impactful visual
                experiences.
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>




    </Fragment>
  );
};

export default Main;
