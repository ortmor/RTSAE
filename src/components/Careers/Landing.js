"use client";
import Styles from "../../styles/careers.module.scss";
const Landing = () => {
  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={Styles.careerslandingcontainer}>
      <div className={Styles.careerslandingcontainerslide}>
        <div className={Styles.careerslandingcontainerheading}>
          <div className={Styles.careerslandingcontanerheadinginner}>
            <h5>
              Discover your
              <br />
              potential and unleash
              <br />
              your creativity
            </h5>
            <p className={Styles.careerslandingcontainerparagraph}>
              Finding work that matters to you and makes you happy can be hard.
              We want to ease that journey for you and create a work environment
              that’s rewarding - work that you’ll love doing every day.
            </p>
          </div>

          <button onClick={scrollToMain}>View Openings</button>
        </div>
        <img id={Styles.img} width="100%" poster="/" src="/careers_hero.webp" />
      </div>
      <div id="main"></div>
    </div>
  );
};

export default Landing;
