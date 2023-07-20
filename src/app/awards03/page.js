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
                PIONEERING PARTNERSHIP: Royal Technology Solutions <br />
                and Dell Join Forces through MoU Signing at <br />
                GITEX 2022
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
              At the prestigious GITEX 2022 event, a significant moment in the
              world of information technology and security occurred as Dell and
              Royal Technology Solutions (RTS) joined hands through the signing
              of a momentous memorandum of understanding (MoU). This synergistic
              alliance marks the beginning of a promising era, where customers
              can expect top-tier products and services that cater to their
              evolving needs and challenges.
            </p>
            <p>
              With the MoU in place, Dell and RTS are poised to foster a culture
              of innovation and creativity, encouraging their teams to push the
              boundaries of what's possible. By pooling their expertise and
              experience, these industry-leading companies are set to develop
              and deliver pioneering solutions that address the complex demands
              of today's IT and cybersecurity landscapes.
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
              In an increasingly interconnected world, safeguarding sensitive
              data and ensuring robust cybersecurity measures are imperative.
              The collaboration between Dell and RTS reaffirms their collective
              dedication to staying at the forefront of security best practices.
              By sharing knowledge and adopting a proactive approach, the
              companies are committed to raising the bar for information
              security and protecting their clients from potential threats and
              vulnerabilities.
            </p>
            <p>
              This strategic alliance between RTS and DELL represents a fusion
              of values, goals, and expertise, all directed towards providing
              the highest quality of service and support. Together, the
              companies will shape the future of information technology and
              security, charting new paths for growth and success, and ensuring
              a resilient and secure digital landscape for their customers.
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
