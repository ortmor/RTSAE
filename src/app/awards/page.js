"use client";
import Layout from "@/components/Layout";
import Styles from "../../styles/home.module.scss";
const Awards = () => {
  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layout>
      <div className={Styles.homelandingcontainer}>
        <div className={Styles.homelandingcontainerslide}>
          <div className={Styles.homelandingcontainerheading}>
            <div className={Styles.homelandingcontanerheadinginner}>
              <h5>
                RTS Recognized with Coveted Best Partner Awards,
                <br /> Celebrating Unparalleled Excellence
              </h5>
            </div>

            <button onClick={scrollToMain}>Explore more</button>
          </div>
          <img
            id={Styles.img}
            width="100%"
            poster="/"
            src="/blog/awards_hero.webp"
          />
        </div>
        <div id="main"></div>
      </div>

      <div className={Styles.homemainparentdiv}>
        <div className={Styles.homemainboxone}>
          <div className={Styles.homemainboxonepara}>
            <p>
              In a series of resounding triumphs, RTS has garnered multiple
              esteemed Best Partner Awards, solidifying its position as an
              industry leader. This remarkable feat is a reflection of the
              unwavering commitment and exceptional efforts of each and every
              RTS employee.
            </p>
            <p>
              These best partner awards are a testament to the dedication,
              expertise, and tireless endeavours of the entire RTS workforce.
              Their consistently surpassing expectations and delivering
              outstanding results have been duly acknowledged and honoured.
            </p>
          </div>
          <br />
          <br />
        </div>

        <div className={Styles.homemainboxtwo}>
          <img src="/blog/awards_img_1.webp"></img>
          <div className={Styles.homemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.homemainparentdiv}>
        <div className={Styles.homemainboxtwo}>
          <img src="/blog/awards_img_2.webp"></img>
          <div className={Styles.homemainboxtwoimg}></div>
        </div>
        <div className={Styles.homemainboxone}>
          <div className={Styles.homemainboxonepara}>
            <p>
              Renowned for its unwavering pursuit of excellence, RTS has
              distinguished itself through innovative solutions and exemplary
              client collaboration. This recognition reaffirms RTS' unrivalled
              status in the field, serving as a proud reflection of the
              collective accomplishments of the entire team.
            </p>
            <p>
              These esteemed awards not only acknowledge the remarkable
              achievements of RTS but also serve as a motivating reminder of the
              organization's ongoing success. The RTS team takes immense pride
              in these honours, further fueling their drive to exceed
              expectations and set new benchmarks in the industry.
            </p>
          </div>
          <br />
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Awards;
