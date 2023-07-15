"use client";
import Styles from "../../../styles/solutioninner.module.scss";

const Landing = () => {
  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={Styles.solutioninnerhomelandingcontainer}>
      <div className={Styles.solutioninnerhomelandingcontainerslide}>
        <div className={Styles.solutioninnerhomelandingcontainerheading}>
          <div className={Styles.solutioninnerhomelandingcontanerheadinginner}>
            <h5>
            Unified Communication  <br /> & Collaboration
            </h5>
          </div>

          <button onClick={scrollToMain}>Discover More</button>
        </div>
        <img
          id={Styles.img}
          width="100%"
          poster="/"
          src="/ict/06/Unified Communication & Collaboration.webp"
        />
      </div>
      <div className={Styles.solutioninnerhomelandingcontainerheading}></div>

      <div id="main"></div>
    </div>
  );
};

export default Landing;
