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
                RTS Receives Prestigious "2T- Partner of the Year – 2022" <br />{" "}
                Award at Ingram and Cisco Annual Partner Awards
              </h5>
            </div>

            <button onClick={scrollToMain}>Explore more</button>
          </div>
          <img
            id={Styles.img}
            width="100%"
            poster="/"
            src="/blog/Cisco.webp"
          />
        </div>
        <div id="main"></div>
      </div>

      <div className={Styles.homemainparentdiv}>
        <div className={Styles.homemainboxone}>
          <div className={Styles.homemainboxonepara}>
            <p>
              In a momentous celebration of excellence, RTS was bestowed with
              the prestigious "2T- Partner of the Year – 2022" award during the
              highly anticipated Ingram and Cisco Annual Partner awards
              ceremony. The event, held in April 2023, recognized outstanding
              contributions to the UAE business landscape, with a particular
              focus on delivering unwavering support in the realms of digital
              planning, implementation, and operational services through
              cutting-edge Cisco solutions.
            </p>
            <p>
              RTS's exceptional dedication to empowering UAE organizations with
              continuous and critical support on their digital transformation
              journey did not go unnoticed. The company's commitment to
              fostering innovation and leveraging Cisco's advanced technologies
              has set a remarkable standard in the industry, earning them this
              well-deserved accolade.
            </p>
          </div>
          <br />
          <br />
        </div>

        <div className={Styles.homemainboxtwo}>
          <img src="/blog/awards02_img_1.jpg"></img>
          <div className={Styles.homemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.homemainparentdiv}>
        <div className={Styles.homemainboxtwo}>
          <img src="/blog/twoT.webp"></img>
          <div className={Styles.homemainboxtwoimg}></div>
        </div>
        <div className={Styles.homemainboxone}>
          <div className={Styles.homemainboxonepara}>
            <p>
              The Ingram and Cisco Annual Partner Awards ceremony brought
              together industry leaders, innovators, and visionaries, all united
              in celebrating the transformative impact of technology on
              businesses across the region. RTS's recognition as the "2T-
              Partner of the Year – 2022" serves as a testament to its
              unparalleled expertise, customer-centric approach, and unwavering
              commitment to pushing the boundaries of what's possible in the
              digital realm.
            </p>
            <p>
              As RTS continues to pave the way for groundbreaking solutions, its
              dedication to excellence and customer satisfaction remains at the
              forefront of its operations. The "2T- Partner of the Year – 2022"
              award underscores RTS's position as a trailblazer in the UAE's
              tech landscape and solidifies its status as a key player in
              driving innovation and success for organizations seeking digital
              transformation.
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
