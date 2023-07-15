import Styles from "../../styles/about.module.scss";

const Certifications = () => {
  return (
    <div className={Styles.Aboutourclientslidermain}>
      <div className={Styles.AboutourHeading}>
        <h1>
          {" "}
          <span>Our</span> certifications
        </h1>
      </div>

      {/* grid */}

      <div className={Styles.MiddlecertifiselectionApproachgridcontainer}>
        <div className={Styles.MiddlecertifiselectionApproachgridcard}>
          <div
            id={Styles.noborderbox1}
            className={Styles.MiddlecertifiselectionApproachgridcardboxmain}
          >
            <div className={Styles.Middlecertifiselectioniconbox}>
              <img src="/about/certifications/logos-01.png" />
            </div>
          </div>

          <div className={Styles.MiddlecertifiselectionApproachgridcardboxmain}>
            <div className={Styles.Middlecertifiselectioniconbox}>
              <img src="/about/certifications/logos-02.png" />
            </div>
          </div>

          <div className={Styles.MiddlecertifiselectionApproachgridcardboxmain}>
            <div className={Styles.Middlecertifiselectioniconbox}>
              <img src="/about/certifications/logos-03.png" />
            </div>
          </div>

          <div className={Styles.MiddlecertifiselectionApproachgridcardboxmain}>
            <div className={Styles.Middlecertifiselectioniconbox}>
              <img src="/about/certifications/logos-04.png" />
            </div>
          </div>

          <div className={Styles.MiddlecertifiselectionApproachgridcardboxmain}>
            <div className={Styles.Middlecertifiselectioniconbox}>
              <img src="/about/certifications/logos-05.png" />
            </div>
          </div>

          <div className={Styles.MiddlecertifiselectionApproachgridcardboxmain}>
            <div className={Styles.Middlecertifiselectioniconbox}>
              <img src="/about/certifications/logos-06.png" />
            </div>
          </div>

          <div className={Styles.MiddlecertifiselectionApproachgridcardboxmain}>
            <div className={Styles.Middlecertifiselectioniconbox}>
              <img src="/about/certifications/logos-07.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
