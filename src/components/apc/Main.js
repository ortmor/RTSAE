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
            <h1>Designing, Building,   </h1>
            <h1> and Infrastructure</h1>
          </div>
          <br />
          <Link href="/apcturnkeyprojects/designingbuildingandinfrastructure">Read More</Link>
        </div>
        <div className={Styles.icthomemainboxtwo}>
          <img src="/apc/Designing, Building, and Infrastructure_hero.webp"></img>
          <div className={Styles.icthomemainboxtwoimg}></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
