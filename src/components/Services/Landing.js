"use client";
import Styles from "../../styles/services.module.scss";

const Landing = () => {

  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={Styles.servicelandingcontainer}>
      <div className={Styles.servicelandingcontainerslide}>
        <div className={Styles.servicelandingcontainerheading}>
          <div className={Styles.servicelandingcontanerheadinginner}>
            <h5>
              Get the Best Out of
              <br />
              Our Products: Services
              <br />
              and Support
            </h5>
            <p className={Styles.servicelandingcontainerparagraph}>
              RTS, we understand the value of the network that powers your
              business. We design, deploy and upgrade networks of any bandwidth
              that meets your needs today, tomorrow and in the future.
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
          src="/services/hero_img.webp"
        />
      </div>
      <div id="main"></div>
    </div>
  );
};

export default Landing;
