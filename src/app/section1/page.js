import Layout from "@/components/Layout";
import Styles from "../../styles/insights.module.scss";

const page = () => {
  return (
    <Layout>
      <div key="">
        <div className={Styles.Bloginnerpagemain}>
          <div className={Styles.Bloginnerpageimagebackgroundparagraph}></div>
          <div className={Styles.Bloginnerpageimagebackground}>
            <h1>Our Commitment to Corporate Social Responsibility</h1>
            <span>June 19, 2023</span>
            <img src="/blog/blog_inner.webp" alt="" />
          </div>

          <div className={Styles.Bloginnercommoncontainer}>
            <div className={Styles.Bloginnercommoncontainertext}>
              <h2>Introduction :</h2>
            </div>

            <div className={Styles.Bloginnercommoncontaineraparagraph}>
              <p>
                At RTS, we believe that success extends beyond financial
                achievements. As responsible corporate citizen, we are committed
                to making a positive impact on society and contributing to the
                sustainable development of the United Arab Emirates (UAE).
                <br />
                <br />
                Our Corporate Social Responsibility (CSR) initiatives are
                aligned with the country's vision and mission, aiming to empower
                communities, foster innovation, and drive social change.
                <br />
                <br />
                We are proud to present our top three CSR activities that
                reflect our dedication to creating a better future for the UAE.
              </p>
            </div>

            <div className={Styles.Bloginnercommoncontainertext}>
              <h2>(A) Tech Education for All:</h2>
            </div>

            <div className={Styles.Bloginnercommoncontaineraparagraph}>
              <p>
                Recognizing the importance of technological literacy in today's
                digital age, we aim to bridge the digital divide and provide
                equal opportunities for education to all members of society. Our
                Tech Education for All program focuses on delivering computer
                literacy training, coding workshops, and technology-related
                resources to underserved communities across the UAE. By
                equipping individuals with essential digital skills, we empower
                them to participate fully in the digital economy, enhancing
                their employability and overall quality of life.
              </p>
            </div>

            {/* <div className={Styles.Bloginnercommoncontainerimgdivdent}>
              <div className={Styles.Bloginnercommoncontainerboxone}>
                <img src="/blog/blog_inner.webp" />
              </div>

              <div className={Styles.Bloginnercommoncontainerboxtwo}>
                <img src="/blog/blog_inner.webp" />
              </div>
            </div> */}

            <div className={Styles.Bloginnercommoncontainertext}>
              <h2>(B) Sustainable Innovation Challenge:</h2>
            </div>

            <div className={Styles.Bloginnercommoncontaineraparagraph}>
              <p>
                In line with the UAE's commitment to becoming a global hub for
                innovation and sustainability, we are proud to launch our
                Sustainable Innovation Challenge. This initiative invites
                aspiring entrepreneurs, inventors, and innovators to develop
                sustainable solutions addressing pressing societal and
                environmental challenges. By providing mentorship, financial
                support, and access to our network of experts, we aim to nurture
                the next generation of change-makers who will contribute to the
                UAE's vision of a sustainable future. Through this challenge, we
                aim to inspire creativity, foster collaboration, and drive
                positive environmental and social impact.
              </p>
            </div>

            <div className={Styles.Bloginnercommoncontainertext}>
              <h2>(C) Diversity and Inclusion in the Tech Industry:</h2>
            </div>

            <div className={Styles.Bloginnercommoncontaineraparagraph}>
              <p>
                We firmly believe in creating a diverse and inclusive workplace
                that reflects the richness and diversity of the UAE. Our
                Diversity and Inclusion in the Tech Industry initiative is
                designed to address the gender and diversity gap prevalent in
                the technology sector. We actively promote equal opportunities
                for all individuals, regardless of their gender, ethnicity, or
                background, to pursue careers in technology. Through
                partnerships with educational institutions, mentorship programs,
                and scholarships, we strive to empower and encourage
                underrepresented groups to join the tech industry, fostering
                innovation and driving positive change.
                <br />
                <br />
                At RTS, our commitment to corporate social responsibility goes
                hand in hand with our business objectives. Through our CSR
                initiatives, we aim to align with the UAE's vision and mission,
                actively contributing to the betterment of society and the
                nation as a whole. Our Tech Education for All program,
                Sustainable Innovation Challenge, and Diversity and Inclusion in
                the Tech Industry initiative exemplify our dedication to
                empowering communities, fostering innovation, and promoting
                social change. Together, let's shape a brighter future for the
                UAE, one where technology is harnessed for the benefit of all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
