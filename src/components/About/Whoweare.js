import Styles from "../../styles/about.module.scss";

const Whoweare = () => {
  return (
    <div>
      <div className={Styles.aboutmainparentdiv}>
        <div className={Styles.aboutmainboxone}>
          <div className={Styles.aboutmainboxoneheading}>
            <h1>
              <span>Who </span>we are
            </h1>
          </div>

          <div className={Styles.aboutmainboxonepara}>
            <p>
              With a legacy spanning over a decade, Royal Technology Solutions
              (RTS) is a trailblazer in enhancing end-user satisfaction through
              innovation, creativity, and forward thinking. Equipped with
              comprehensive resources, we stay at the forefront by monitoring,
              evaluating, and analyzing current trends and emerging
              technologies. This ensures our clients stay ahead in their
              respective industries. At RTS, each project takes top priority,
              evidenced by our track record of successful ventures that leverage
              advanced IT systems. Setting us apart from other providers, we
              offer a diverse range of IT solutions that deliver optimal
              results.
            </p>
            <p>
              Our focus is on driving business outcomes and prioritizing
              customer needs. Sustainability and effectiveness are the
              cornerstones of our core values, reflected in our partnerships
              with businesses. We take pride in our high success rates and the
              positive impact we have made on the profitability and lives of our
              esteemed business partners.
            </p>
          </div>
        </div>

        <div className={Styles.aboutmainboxtwo}>
          <img src="/about/whoweare.webp"></img>
          <div className={Styles.aboutmainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.whowearebottom}>
        <div className={Styles.whowearebottomboxone}>
          <div className={Styles.whoweareparagraph}>
            <img src="/about/vision.png" />
            <h1>
              <span>Our</span> Vision
            </h1>
            <p>
              ​​​To be recognized and valued as a leader in IT Industry by
              serving customers by utilizing Information Technology to meet
              client expectations and the company's business objectives.
            </p>
          </div>
        </div>

        <div className={Styles.whowearebottomboxone}>
          <div className={Styles.whoweareparagraph}>
            <img src="/about/mission.png" />
            <h1>
              <span>Our</span> Mission
            </h1>
            <p>
              Our primary mission is to serve our business partners by helping
              them build their digital business infrastructure in whatever way
              possible through tested and proven methods efficiently and
              effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
