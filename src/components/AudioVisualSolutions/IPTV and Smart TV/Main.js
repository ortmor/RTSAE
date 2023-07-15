import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Enhanced Entertainment and </h1>
            <h1>Communication Experience</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Offer a diverse selection of television channels to their
                customers, employees, and guests.
              </li>

              <li>
                High-quality video and audio transmission offers an immersive
                and enjoyable viewing experience.
              </li>
              <li>
                Provides a wide array of channels and superior picture and sound
                quality
              </li>
              <li>
                Enhance customer satisfaction, leading to increased loyalty and
                positive brand perception.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/05/Enhanced Entertainment and Communication Experience.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/audiovisualsolutions/05/Efficient Centralized Management.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Efficient Centralized</h1>
            <h1> Management</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Enable businesses to centrally manage and distribute content
                across multiple locations.
              </li>
              <li>
                Businesses can customize channel lineups based on their specific
                needs.
              </li>
              <li>
                With centralized management, businesses can quickly update and
                modify content, ensuring that viewers have access to the latest
                news, announcements, and promotions.
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
            <h1>Integration with Digital Signage</h1>
            <h1>and Wayfinding Systems</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Allows businesses to display important messages, directions, and
                updates in real-time.
              </li>
              <li>
                Companies can utilize these solutions to broadcast internal
                communications, training videos, and company-wide announcements.
              </li>

              <li>Improves communication and engagement among employees.</li>

              <li>
                Opens up opportunities for interactive experiences, such as
                wayfinding maps, promotional videos, and interactive
                advertisements.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/audiovisualsolutions/05/Integration with Digital Signage and Wayfinding Systems.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
