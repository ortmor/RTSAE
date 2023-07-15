import Link from "next/link";
import Styles from "../../styles/home.module.scss";

const Bloglandingpage = () => {
  return (
    <div className={Styles.Bloglandingpageparent}>
      <div className={Styles.Bloglandingpageheadingmain}>
        <h1>Awards</h1>
      </div>

      <div className={Styles.Bloglandingpageparentcontainer}>
        {/* chlid one */}

        <div className={Styles.Bloglandingpageboxonemain}>
          <div className={Styles.Bloglandingpageboxoneimg}></div>
          <div className={Styles.Bloglandingpageoneparagraph}>
            <div className={Styles.Bloglandingpageoneparagraphcontent}>
              <h1>Coveted Best Partner Awards</h1>
              <p>
                In a series of resounding triumphs, RTS has garnered multiple
                esteemed Best Partner Awards, solidifying its position as an
                industry leader. This remarkable feat is a testament to the
                unwavering commitment and exceptional efforts of each and every
                RTS employee.
              </p>
              <p>
                {" "}
                These best partner awards are a testament to the dedication,
                expertise, and tireless endeavors of the entire RTS workforce.
                Their consistently surpassing expectations and delivering
                outstanding results have been duly acknowledged and honored.
              </p>
              <Link href="/awards">Read more</Link>
            </div>
          </div>
        </div>

        {/* ends */}

        {/* chlid two */}

        {/* ends */}
      </div>

      {/* 
      <div className={Styles.Bloglandingpageparentcontainer}>
  

        <div className={Styles.Bloglandingpageboxtwomain}>
          <img src="/home/landingblogtwo.jpg" />

          <div className={Styles.Bloglandingpagetwoparagraph}>
            <h1>Lorem ipsum dolor sit amet</h1>

            <Link href="/">Read more</Link>
          </div>
        </div>

        <div className={Styles.Bloglandingpageboxtwomain}>
          <img src="/home/landingblogthree.jpg" />

          <div className={Styles.Bloglandingpagetwoparagraph}>
            <h1>Lorem ipsum dolor sit amet</h1>

            <Link href="/">Read more</Link>
          </div>
        </div>

        <div className={Styles.Bloglandingpageboxtwomain}>
          <img src="/home/landingblogfour.jpg" />

          <div className={Styles.Bloglandingpagetwoparagraph}>
            <h1>Lorem ipsum dolor sit amet</h1>

            <Link href="/">Read more</Link>
          </div>
        </div>

   
      </div>
     */}
    </div>
  );
};

export default Bloglandingpage;
