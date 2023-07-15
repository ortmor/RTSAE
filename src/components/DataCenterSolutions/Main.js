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
            <h1>Data Center Solutions </h1>
            <h1>Infrastructure</h1>
          </div>
          <br />
          <Link href="/datacentersolutions/datacentersolutionsinfrastructure">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="datacentersolutions/01/Data Center Solutions.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="datacentersolutions/02/Network Critical Physical Infrastructure.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Network Critical</h1>
            <h1>Physical Infrastructure</h1>
          </div>
          <br />
          <Link href="/datacentersolutions/networkcriticalphysicalinfrastructure">Read More</Link>
        </div>
      </div>

      <div className={Styles.icthomemainparentdiv}>
        <div className={Styles.icthomemainboxone}>
          <div className={Styles.icthomemainboxoneheading}>
            <h1>DCIM</h1>
          </div>
          <br />
          <Link href="/datacentersolutions/dcim">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="datacentersolutions/03/DCIM.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.icthomemainparentdivthree}>
        <div className={Styles.icthomemainboxthree}>
          <img src="datacentersolutions/04/Data Centre Maintenance Services.webp"></img>
          <div className={Styles.icthomemainboxthreeimg}></div>
        </div>

        <div className={Styles.icthomemainboxthree}>
          <div className={Styles.icthomemainboxthreeheading}>
            <h1>Data Centre</h1>
            <h1>Maintenance Services</h1>
          </div>
          <br />
          <Link href="/datacentersolutions/datacentremaintenanceservices">Read More</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
