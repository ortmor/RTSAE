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
              <h2>Our Commitment to Corporate Social Responsibility</h2>
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
            <img src="home/landingblogone.webp" alt="img" />
            <div className={Styles.topnewscardparagraph}>
              <h6>FEB 28, 2023</h6>
              <h2>
                Unleashing Innovation: Creating a Business Idea with Social
                Impact
              </h2>
              <p>
                In today's dynamic business landscape, success isn't solely
                measured by financial gains. More and more, entrepreneurs and
                businesses are recognizing the importance of corporate social
                responsibility (CSR) and the positive impact it can have on
                society.
              </p>
              <Link href="/comingsoon">
                READ <AiOutlineArrowRight className={Styles.topnewscardarrow} />{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className={Styles.childtwo}>
          <div className={Styles.topnewscardcontainer}>
            <img src="/home/landingblogtwo.webp" alt="img" />
            <div className={Styles.topnewscardparagraph}>
              <h6>MAY 22, 2023</h6>
              <h2>The Future of Cloud Computing: Empowering the Digital Age</h2>
              <p>
                In today's rapidly evolving digital landscape, cloud computing
                has emerged as a game-changer, revolutionizing the way
                businesses operate and individuals interact with technology. As
                we look to the future, it is clear that cloud computing will
                continue to play a pivotal role
              </p>
              <Link href="/comingsoon">
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
