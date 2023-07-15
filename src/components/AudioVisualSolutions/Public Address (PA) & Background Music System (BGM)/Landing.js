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
            Public Address (PA) & 

   <br /> Background Music System (BGM)
            </h5>
          </div>

          <button onClick={scrollToMain}>Discover More</button>
        </div>
        <img
          id={Styles.img}
          width="100%"
          poster="/"
          src="/audiovisualsolutions/03/Public Address (PA) & Background Music System (BGM).webp"
        />
      </div>
      <div className={Styles.solutioninnerhomelandingcontainerheading}></div>

      <div id="main"></div>
    </div>
  );
};

export default Landing;
