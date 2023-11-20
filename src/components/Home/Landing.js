"use client";
import Styles from "../../styles/home.module.scss";

const Landing = () => {

  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={Styles.homelandingcontainer}>
      <div className={Styles.homelandingcontainerslide}>
        <div className={Styles.homelandingcontainerheading}>
          <div className={Styles.homelandingcontanerheadinginner}>
            <h5>
              Leading innovative
              <br />
              future product
            </h5>
            <p className={Styles.homelandingcontainerparagraph}>
              With cutting-edge technology as our passion, and a business model
              based on a client-first approach - RTS has rapidly grown in the last
              few years.
            </p>
          </div>

          <button  onClick={scrollToMain}>
            
            Explore more
                 
          </button>
        </div>
        <img id={Styles.img} width="100%" poster="/" src="/home/home_banner.webp" />

      
      </div>
      <div id="main"></div>
    </div>
  );
};

export default Landing;
