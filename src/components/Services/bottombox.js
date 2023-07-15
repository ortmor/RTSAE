import Link from "next/link";
import Styles from "../../styles/services.module.scss";

const Bottombox = () => {
  return (
    <div className={Styles.bottomhome}>
      <div className={Styles.bottomhomeparentheading}>
        <div className={Styles.bottomhomecontentheading}>
          <h1>Streamline Your Projects with RTS</h1>
          <h1>
            RTS Comprehensive Program and Project Management Services cover a
            wide range of activities, including but not limited to:
          </h1>
        </div>
      </div>

      <div className={Styles.bottomparent}>
        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <div className={Styles.bottomlineparent}>
              <p>
                01 <span>───</span>
              </p>
            </div>
            <h2>
              Requirements <br />
              gathering and <br /> management
            </h2>
          </div>
        </div>

        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <p>
              02 <span>───</span>
            </p>
            <h2>
              Scope <br />
              management
            </h2>
          </div>
        </div>

        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <p>
              03 <span>───</span>{" "}
            </p>
            <h2>
              Stakeholder and <br />
              communication <br /> management
            </h2>
          </div>
        </div>

        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <p>
              04 <span>───</span>{" "}
            </p>
            <h2>
              Risk/issue <br /> management <br />
              and mitigation
            </h2>
          </div>
        </div>
      </div>

      <div className={Styles.bottomparent}>
        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <p>
              05 <span>───</span>{" "}
            </p>
            <h2>
              Schedule
              <br /> planning and <br /> management
            </h2>
          </div>
        </div>

        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <p>
              06<span>───</span>{" "}
            </p>
            <h2>
              Quality assurance <br /> and control <br /> management
            </h2>
          </div>
        </div>

        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <p>
              07 <span>───</span>{" "}
            </p>
            <h2>
              Change <br /> management
            </h2>
          </div>
        </div>

        <div className={Styles.bottombox}>
          <div className={Styles.bottomcontentmain}>
            <p>
              08 <span>───</span>{" "}
            </p>
            <h2>
              Cost and <br /> budget <br /> management
            </h2>
          </div>
        </div>
      </div>

      <div id="supportandmaintenance" className={Styles.bottomtextbottombox}>
        <p>
          By Leveraging our expertise in Program and Project Management, we
          provide our customers with the confidence and assurance they need to
          achieve their goals and succeed in today’s rapidly evolving business
          environment
        </p>
      </div>

      <div  className={Styles.bottomboxsupportpage}>
        <h1>Support & Maintenance</h1>

        <Link href="tel:+97128111399">Helpdesk number :  +971 28111399</Link>
        <Link href="mailto:service.support@rts.ae">
          {" "}
          Email ID : service.support@rts.ae
        </Link>
      </div>

      <div className={Styles.bottomiframe}>
        <iframe
          width="100%"
          height="1000px"
          src="https://app.smartsheet.com/b/form/ada6e2fae1f54cb7a122ba17307d68dd"
        ></iframe>
      </div>
    </div>
  );
};

export default Bottombox;
