import Link from "next/link";
import Styles from "../../styles/about.module.scss";

const Jointeam = () => {
  return (
    <div className={Styles.Joinmainparentdiv}>
      <div className={Styles.Joinmainboxtwo}>
        <img src="/about/team.webp"></img>
        <div className={Styles.Joinmainboxtwoimg}></div>
      </div>

      <div className={Styles.Joinmainboxone}>
        <div className={Styles.Joinmainboxoneheading}>
          <h1>HR Zone</h1>
        </div>

        <div className={Styles.Joinmainboxonepara}>
          <p>
            Do you want to work for an organization that believes in the
            workforce and offers career grooming and growth-oriented
            opportunities?
          </p>
          <p>
            If you have all that it takes to join our dynamic team, explore the
            opportunities with us, as we are always looking for multi-talented
            candidates with a passion to learn and we offer a wide range of
            benefits with our offered package.
          </p>

          <p>
            Please drop in your information at careers@rts.ae Our hiring
            philosophy is centered around selecting the most qualified candidate
            for each job. This approach not only enhances our productivity and
            efficiency but also helps us earn the trust of our valued clients.
          </p>
        </div>
        <br />
        <br />
        <Link href="/careers">View Openings</Link>
      </div>

      <div className={Styles.JoinSpace}></div>
    </div>
  );
};

export default Jointeam;
