// import Link from "next/link";
import Styles from "../../styles/careers.module.scss";

const Footercareer = () => {
  return (
    <div className={Styles.Footercareermain}>
      <div className={Styles.Footermaincontent}>
        <div className={Styles.footercontentmain}>
          {/* <Link className={Styles.link} href="mailto:careers@rts.ae">
            careers@rts.ae
          </Link> */}

          <a className={Styles.link} href="mailto:careers@rts.ae">
            careers@rts.ae
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footercareer;
