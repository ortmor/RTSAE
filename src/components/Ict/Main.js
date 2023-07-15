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
            <h1>Data Centre </h1>
            <h1>Infrastructure</h1>
          </div>
          <br />
          <Link href="/ictsolutions/datacenterinfrastructure">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/ict/01/hero.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/ict/02/Virtualization & Cloud Solutions.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Virtualization & Cloud </h1>
            <h1>Solutions</h1>
          </div>
          <br />
          <Link href="/ictsolutions/virtualization&cloudsolutions">
            Read More
          </Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>IT & Network </h1>
            <h1>Security</h1>
          </div>
          <br />
          <Link href="/ictsolutions/it&networksecurity">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/ict/03/IT & Network Security.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/ict/04/Information & Cyber Security Solutions.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Information & Cyber </h1>
            <h1>Security Solutions</h1>
          </div>
          <br />
          <Link href="/ictsolutions/information&cybersecuritysolutions">
            Read More
          </Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>Wired & Wireless </h1>
            <h1>Network Infrastructure</h1>
          </div>
          <br />
          <Link href="/ictsolutions/wired&wirelessnetworkinfrastructure">
            Read More
          </Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/ict/05/Wired & Wireless Network Infrastructure.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="/ict/06/Unified Communication & Collaboration.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Unified Communication </h1>
            <h1> & Collaboration</h1>
          </div>
          <br />
          <Link href="/ictsolutions/unifiedcommunication&collaboration">
            Read More
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
