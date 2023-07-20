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
                Collaboration of Excellence: Royal Technology Solutions <br />
                and HPE Unite in a Memorandum of Understanding <br /> Signing at
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
              At the highly acclaimed GITEX 2022 event, global technology leader
              Hewlett Packard Enterprise (HPE) and esteemed innovators RTS
              joined hands to sign a momentous memorandum of understanding
              (MoU). to revolutionize the information technology and security
              landscape.
            </p>
            <p>
              The MoU between HPE and RTS lays the foundation for a new era of
              accelerated technological advancements, wherein businesses and
              enterprises can harness the full potential of cutting-edge
              solutions and services. The strategic partnership aims to leverage
              HPE's expertise as a leading global technology provider and RTS'
              deep understanding of the local market to drive the widespread
              adoption of transformative IT solutions.
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
              Embracing the spirit of innovation and progress, HPE and RTS are
              committed to implementing robust security protocols that ensure
              the utmost protection for businesses and their clientele,
              mitigating risks and fortifying resilience in the face of
              ever-evolving cyber challenges. The union of HPE and RTS signifies
              a new era of empowerment for businesses seeking technological
              excellence, introducing tailored solutions for diverse industry
              needs, such as cloud computing, digital transformation, and data
              management strategies.
            </p>
            <p>
              As the dust settles from the momentous signing at GITEX 2022, the
              MoU between HPE and RTS stands as a beacon of hope for the future
              of information technology and security. Together, they pledge to
              embark on a journey of shared success, pushing the boundaries of
              innovation, and propelling the industry forward.
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
