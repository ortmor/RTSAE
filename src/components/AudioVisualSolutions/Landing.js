"use client";
import Styles from "../../styles/solution.module.scss";

const Landing = () => {
  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={Styles.icthomelandingcontainer}>
      <div className={Styles.icthomelandingcontainerslide}>
        <div className={Styles.icthomelandingcontainerheading}>
          <div className={Styles.icthomelandingcontanerheadinginner}>
            <h5>Audio Visual <br />Solutions</h5>
          </div>

          <button onClick={scrollToMain}>Discover More</button>
        </div>
        <img id={Styles.img} width="100%" poster="" src="/audiovisualsolutions/hero.webp" />
      </div>
      <div id="main"></div>
    </div>
  );
};

export default Landing;
