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
                RTS Shines Bright as HPE Rising Star of the Year 2023-
                <br />
                Middle East and Africa: A Journey Fueled by Excellence
              </h5>
            </div>

            <button onClick={scrollToMain}>Explore more</button>
          </div>
          <img
            id={Styles.img}
            width="100%"
            poster="/"
            src="/blog/rts-shines.webp"
          />
        </div>
        <div id="main"></div>
      </div>

      <div className={Styles.homemainparentdiv}>
        <div className={Styles.homemainboxone}>
          <div className={Styles.homemainboxonepara}>
            <p>
              RTS has accomplished a remarkable feat by being honoured with the
              prestigious HPE Rising Star of the Year 2023-Middle East and
              Africa Award, solidifying its position as a prominent force in the
              industry.
            </p>
            <p>
              The HPE Rising Star of the Year Awards recognizes exceptional
              organizations in the Middle East and Africa region that have shown
              remarkable growth, innovation, and dedication to excellence. These
              awards celebrate organizations that have exhibited outstanding
              performance and made significant contributions to their respective
              industries.
            </p>
          </div>
          <br />
          <br />
        </div>

        <div className={Styles.homemainboxtwo}>
          <img src="/blog/awards01_img_1.jpg"></img>
          <div className={Styles.homemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.homemainparentdiv}>
        <div className={Styles.homemainboxtwo}>
          <img src="/blog/hpone.webp"></img>
          <div className={Styles.homemainboxtwoimg}></div>
        </div>
        <div className={Styles.homemainboxone}>
          <div className={Styles.homemainboxonepara}>
            <p>
              Receiving the HPE Rising Star of the Year award exemplifies RTS'
              unwavering commitment to excellence and relentless pursuit of
              innovation. Through their tireless efforts and strategic
              partnerships, RTS has emerged as a leading figure, making
              significant strides in the Middle East and African market. This
              recognition reaffirms RTS' unparalleled status and represents the
              collective achievements of the entire team.
            </p>
            <p>
              Renowned for its exceptional collaboration with clients and
              groundbreaking solutions, RTS has set itself apart in the
              industry. The organization's receipt of the HPE Rising Star of the
              Year award highlights its exceptional performance, growth, and
              unwavering dedication to excellence.
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
