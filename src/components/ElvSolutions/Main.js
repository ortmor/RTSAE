import Link from "next/link";
import Styles from "../../styles/solution.module.scss";
import { Fragment } from "react";

const Main = () => {
  return (
    <Fragment>
      <br />
      <br />
      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Structured </h1>
            <h1>Cabling</h1>
          </div>
          <br />
          <Link href="/elvsolutions/structuredcabling">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/elvsolutions/01/Structured Cabling.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/elvsolutions/02/Video Surveillance & Management.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Video Surveillance </h1>
            <h1>& Management</h1>
          </div>
          <br />
          <Link href="/elvsolutions/videosurveillancemanagement">
            Read More
          </Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Physical Security </h1>
            <h1> Solutions</h1>
          </div>
          <br />
          <Link href="/elvsolutions/physicalsecuritysolutions">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/elvsolutions/03/Physical Security Solutions.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/elvsolutions/04/Control systems_hero.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Control Systems</h1>
          </div>
          <br />
          <Link href="/elvsolutions/controlsystems">Read More</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
