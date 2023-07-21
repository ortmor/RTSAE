import Link from "next/link";
import Styles from "../../styles/insights.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const Topnews = () => {
  return (
    <div className={Styles.Topnewsmainconatiner}>
      <div className={Styles.Topnewsparentcontainer}>
        <div className={Styles.childone}>
          <h1>
            TOP <br /> News
          </h1>
        </div>

        <div className={Styles.childtwo}>
          <div className={Styles.topnewscardcontainer}>
            <img src="/blog/blog_inner.webp" alt="img" />

            <div className={Styles.topnewscardparagraph}>
              <h6>JAN 02, 2023</h6>
              <h2>Our Commitment to Corporate Social Responsibility...</h2>
              <p>
                At RTS, we believe that success extends beyond financial
                achievements. As responsible corporate citizen, we are committed
                to making a positive impact on society and contributing to the
                sustainable development of the United Arab Emirates (UAE).
              </p>
              <Link href="/section1">
                READ <AiOutlineArrowRight className={Styles.topnewscardarrow} />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className={Styles.childtwo}>
          <div className={Styles.topnewscardcontainer}>
            <img src="/blog/gitex 2.webp" alt="img" />
            <div className={Styles.topnewscardparagraph}>
              <h6>FEB 28, 2023</h6>
              <h2>
                Royal Technology Solutions and Dell Join Forces through...
              </h2>
              <p>
                At the prestigious GITEX 2022 event, a significant moment in the
                world of information technology and security occurred as Dell
                and Royal Technology Solutions joined hands through the signing
                of a momentous memorandum of understanding (MoU).
              </p>
              <Link href="/section2">
                READ <AiOutlineArrowRight className={Styles.topnewscardarrow} />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className={Styles.childtwo}>
          <div className={Styles.topnewscardcontainer}>
            <img src="/blog/gitex 1.webp" alt="img" />
            <div className={Styles.topnewscardparagraph}>
              <h6>MAY 22, 2023</h6>
              <h2>
                Royal Technology Solutions and HPE Unite in a Memorandum...
              </h2>
              <p>
                At the highly acclaimed GITEX 2022 event, a momentous
                collaboration took centre stage as global technology leader
                Hewlett Packard Enterprise (HPE) and esteemed innovators Royal
                Technology Solutions joined hands to sign a momentous memorandum
                of understanding (MoU).
              </p>
              <Link href="/section3">
                READ <AiOutlineArrowRight className={Styles.topnewscardarrow} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnews;
