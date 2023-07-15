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
            <h1>Large Format Indoor </h1>
            <h1>& Outdoor Signage</h1>
          </div>
          <br />
          <Link href="/audiovisualsolutions/largeformatindooroutdoorsignage">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/audiovisualsolutions/01/Large Format Indoor & Outdoor Signage.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/audiovisualsolutions/02/Audio Video Solutions Meeting Room Solutions.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1> Meeting Room </h1>
            <h1>Solutions</h1>
          </div>
          <br />
          <Link href="/audiovisualsolutions/meetingroomsolutions">Read More</Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Public Address (PA)</h1>
            <h1>& Background Music System (BGM)</h1>
          </div>
          <br />
          <Link href="/audiovisualsolutions/publicaddressbackgroundmusicsystem">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/audiovisualsolutions/03/Public Address (PA) & Background Music System (BGM).webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/audiovisualsolutions/04/Video Wall Solutions.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Video Wall </h1>
            <h1>Solutions</h1>
          </div>
          <br />
          <Link href="/audiovisualsolutions/videowallsolutions">Read More</Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>IPTV and </h1>
            <h1>Smart TV </h1>
          </div>
          <br />
          <Link href="/audiovisualsolutions/iptvandsmarttv">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/audiovisualsolutions/05/IPTV and Smart TV.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/audiovisualsolutions/06/Smart Automation Solutions.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1> Smart Automation </h1>
            <h1>Solutions</h1>
          </div>
          <br />
          <Link href="/audiovisualsolutions/smartautomationsolutions">Read More</Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Smart City </h1>
            <h1>Automation</h1>
          </div>
          <br />
          <Link href="/audiovisualsolutions/smartcityautomation">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/audiovisualsolutions/07/Smart City Automation.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
