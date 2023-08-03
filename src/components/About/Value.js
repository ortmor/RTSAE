import Styles from "../../styles/about.module.scss";

const Valueabout = () => {
  return (
    <div className={Styles.valuehome}>
      <div className={Styles.valuehomeparentheading}>
        <div className={Styles.valuehomecontentheading}>
          <h1>
            <span>Our</span> core values
          </h1>
          <p>
            Our core values are the foundation of our company, enabling us to
            prioritize inclusivity for both our employees and business partners.
            As we expand our reach globally, we remain committed to promoting
            business practices that support human rights, labor, environmental
            friendliness, and anti-corruption while balancing profitability,
            technological advancements, and maintaining an effective IT
            infrastructure.
          </p>
        </div>
      </div>

      <div className={Styles.valueparent}>
        <div className={Styles.valuebox}>
          <div className={Styles.valuecontentmain}>
            <img src="/about/quality.png" />
            <h2>Quality</h2>
          </div>

          <p>
            We strive to provide our business partners with the highest quality
            services and digital solutions.
          </p>
        </div>

        <div className={Styles.valuebox}>
          <div className={Styles.valuecontentmain}>
            <img src="/about/quality.png" />
            <h2>Harmony</h2>
          </div>

          <p>
            In every project we undertake, we consider the bigger picture:
            creating a robust digital infrastructure that enables our business
            partners to optimize their products and services in the most
            efficient way possible.
          </p>
        </div>

        <div className={Styles.valuebox}>
          <div className={Styles.valuecontentmain}>
            <img src="/about/integrity.png" />
            <h2>Integrity</h2>
          </div>

          <p>
            From entry-level associates to top-level management, we prioritize
            professionalism, honesty, reliability, and fairness not only within
            our company but also in our interactions with individuals outside of
            it.
          </p>
        </div>

        {/*         
        <div className={Styles.valueboxthree}>
          <img src="/about/harmony.png" />
          <h2>Harmony</h2>
          <p>
            In every project we undertake, we always consider the bigger
            picture: to create a massive digital infrastructure that enables our
            business partners to obtain the best out of their products and
            services in the most efficient way possible.
          </p>
        </div>

        <div className={Styles.valueboxthree}>
          <img src="/about/integrity.png" />
          <h2>Integrity</h2>
          <p>
            Day in and day out, from entry-level associates to top-level
            management, we ensure that everyone is professional, honest,
            reliable, and fair not only with each other but also with people
            outside of the company.
          </p>
        </div> */}
      </div>

      <div className={Styles.valueparentone}>
        <div className={Styles.valueboxone}>
          <div className={Styles.valuecontentmainone}>
            <img src="/about/ethics.png" />
            <h2>Ethics</h2>
          </div>

          <p>
            Every action we take is guided by principles of justice and
            fairness. We have no ulterior motives or malicious intentions in any
            of our actions.
          </p>
        </div>

        <div className={Styles.valueboxone}>
          <div className={Styles.valuecontentmainone}>
            <img src="/about/innovation.png" />
            <h2>Innovation</h2>
          </div>

          <p>
            Through our extensive network of business partners, advanced digital
            technology and technical expertise, we aim to stay ahead of our
            competitors to help our business partners do the same.
          </p>
        </div>

        <div
          id={Styles.valueabouthide}
          style={{ visibility: "hidden" }}
          className={Styles.valueboxone}
        >
          <div className={Styles.valuecontentmainone}>
            <img src="/about/integrity.png" />
            <h2>Integrity</h2>
          </div>

          <p>
            From entry-level associates to top-level management, we prioritize
            professionalism, honesty, reliability, and fairness not only within
            our company but also in our interactions with individuals outside of
            it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Valueabout;
