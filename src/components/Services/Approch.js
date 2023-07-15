import Styles from "../../styles/services.module.scss";

const Approch = () => {
  return (
    <div className={Styles.Aboutourclientslidermain}>
      <div className={Styles.diciplinemainhead}>
        <h1>
          <span>Our</span> disciplined approach is
        </h1>
      </div>

      {/* grid */}

      <div className={Styles.diciplinemainApproachgridcontainer}>
        <div className={Styles.diciplinemainApproachgridcard}>
          <div
            id={Styles.noborderbox1}
            className={Styles.diciplinemainApproachgridcardboxmain}
          >
            <div className={Styles.diciplinemainiconbox}>
              <img src="/services/rooted.png" />
            </div>
            <p>
              Rooted in industry <br />
              best practices
            </p>
          </div>

          <div className={Styles.diciplinemainApproachgridcardboxmain}>
            <div className={Styles.diciplinemainiconbox}>
              <img src="/services/tailored.png" />
            </div>
            <p>
              Tailored to each client’s <br />
              unique needs and requirements
            </p>
          </div>

          <div className={Styles.diciplinemainApproachgridcardboxmain}>
            <div className={Styles.diciplinemainiconbox}>
              <img src="services/supported.png" />
            </div>
            <p>
              Supported by a team of highly skilled <br />
              and experienced project managers
            </p>
          </div>

          <div
            id={Styles.noborderbox2}
            className={Styles.diciplinemainApproachgridcardboxmain}
          >
            <div className={Styles.diciplinemainiconbox}>
              <img src="services/enabled.png" />
            </div>
            <p>
              Enabled by a Continuous Process <br />
              and Service Improvement corporate mindset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approch;
