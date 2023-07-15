import Link from "next/link";
import Styles from "../../styles/careers.module.scss";

const Footercareer = () => {
  return (
    <div className={Styles.Footercareermain}>
      <div className={Styles.Footermaincontent}>
        <div className={Styles.footercontentmain}>
          <Link className={Styles.btn} href="/contact">LET’S TALK </Link>

          <br />
          <span>or</span>

          <br />

          <Link className={Styles.link} href="mailto:careers@rts.ae">careers@rts.ae</Link>
        </div>
      </div>
    </div>
  );
};

export default Footercareer;
