"use client";
import Styles from "../../styles/about.module.scss";


const Landing = () => {

  
  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={Styles.aboutlandingcontainer}>
      <div className={Styles.aboutlandingcontainerslide}>
        <div className={Styles.aboutlandingcontainerheading}>
          <div className={Styles.aboutlandingcontanerheadinginner}>
            <h5>
              Improve your agility
              <br />
              with our seamless
              <br />
              integrations
            </h5>
            <p className={Styles.aboutlandingcontainerparagraph}>
              Royal Technology Solutions (RTS) has been committed to continually
              improve end-user satisfaction since the day the company was
              founded over 10 years ago. We are inventive, innovative, and
              futuristic.
            </p>
          </div>

          <button onClick={scrollToMain}>
           Discover More
          </button>
        </div>
        <img
          id={Styles.img}
          width="100%"
          poster="/"
          src="/about/hero_image.webp"
        />
      </div>
      <div id="main"></div>
    </div>
  );
};

export default Landing;
