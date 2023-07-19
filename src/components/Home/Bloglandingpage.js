"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import Styles from "../../styles/home.module.scss";

const Bloglandingpage = () => {
  return (
    <div className={Styles.Bloglandingpageparent}>
      <div className={Styles.Bloglandingpageheadingmain}>
        <h1>Awards</h1>
      </div>

    

      <Swiper
        loop={true}
        effect="fade"
        navigation={{
          nextEl: ".Nextslide",
          prevEl: ".Backslide",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className={Styles.mySwiper}
      >
        <SwiperSlide>
          <div className={Styles.Bloglandingpageparentcontainer}>
            {/* chlid one */}

            <div className={Styles.Bloglandingpageboxonemain}>
              <div className={Styles.Bloglandingpageboxoneimg}></div>
              <div className={Styles.Bloglandingpageoneparagraph}>
                <div className={Styles.Bloglandingpageoneparagraphcontent}>
                  <h1>Coveted Best Partner Awards</h1>
                  <p>
                    In a series of resounding triumphs, RTS has garnered
                    multiple esteemed Best Partner Awards, solidifying its
                    position as an industry leader. This remarkable feat is a
                    testament to the unwavering commitment and exceptional
                    efforts of each and every RTS employee.
                  </p>
                  <p>
                    {" "}
                    These best partner awards are a testament to the dedication,
                    expertise, and tireless endeavors of the entire RTS
                    workforce. Their consistently surpassing expectations and
                    delivering outstanding results have been duly acknowledged
                    and honored.
                  </p>
                  <Link href="/awards">Read more</Link>
                </div>
              </div>
            </div>

            {/* ends */}

            {/* chlid two */}

            {/* ends */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Styles.Bloglandingpageparentcontainer}>
            {/* chlid one */}

            <div className={Styles.Bloglandingpageboxonemain}>
              <div className={Styles.Bloglandingpageboxoneimg}></div>
              <div className={Styles.Bloglandingpageoneparagraph}>
                <div className={Styles.Bloglandingpageoneparagraphcontent}>
                  <h1>Coveted Best Partner Awards</h1>
                  <p>
                    In a series of resounding triumphs, RTS has garnered
                    multiple esteemed Best Partner Awards, solidifying its
                    position as an industry leader. This remarkable feat is a
                    testament to the unwavering commitment and exceptional
                    efforts of each and every RTS employee.
                  </p>
                  <p>
                    {" "}
                    These best partner awards are a testament to the dedication,
                    expertise, and tireless endeavors of the entire RTS
                    workforce. Their consistently surpassing expectations and
                    delivering outstanding results have been duly acknowledged
                    and honored.
                  </p>
                  <Link href="/awards">Read more</Link>
                </div>
              </div>
            </div>

            {/* ends */}

            {/* chlid two */}

            {/* ends */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Styles.Bloglandingpageparentcontainer}>
            {/* chlid one */}

            <div className={Styles.Bloglandingpageboxonemain}>
              <div className={Styles.Bloglandingpageboxoneimg}></div>
              <div className={Styles.Bloglandingpageoneparagraph}>
                <div className={Styles.Bloglandingpageoneparagraphcontent}>
                  <h1>Coveted Best Partner Awards</h1>
                  <p>
                    In a series of resounding triumphs, RTS has garnered
                    multiple esteemed Best Partner Awards, solidifying its
                    position as an industry leader. This remarkable feat is a
                    testament to the unwavering commitment and exceptional
                    efforts of each and every RTS employee.
                  </p>
                  <p>
                    {" "}
                    These best partner awards are a testament to the dedication,
                    expertise, and tireless endeavors of the entire RTS
                    workforce. Their consistently surpassing expectations and
                    delivering outstanding results have been duly acknowledged
                    and honored.
                  </p>
                  <Link href="/awards">Read more</Link>
                </div>
              </div>
            </div>

            {/* ends */}

            {/* chlid two */}

            {/* ends */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Styles.Bloglandingpageparentcontainer}>
            {/* chlid one */}

            <div className={Styles.Bloglandingpageboxonemain}>
              <div className={Styles.Bloglandingpageboxoneimg}></div>
              <div className={Styles.Bloglandingpageoneparagraph}>
                <div className={Styles.Bloglandingpageoneparagraphcontent}>
                  <h1>Coveted Best Partner Awards</h1>
                  <p>
                    In a series of resounding triumphs, RTS has garnered
                    multiple esteemed Best Partner Awards, solidifying its
                    position as an industry leader. This remarkable feat is a
                    testament to the unwavering commitment and exceptional
                    efforts of each and every RTS employee.
                  </p>
                  <p>
                    {" "}
                    These best partner awards are a testament to the dedication,
                    expertise, and tireless endeavors of the entire RTS
                    workforce. Their consistently surpassing expectations and
                    delivering outstanding results have been duly acknowledged
                    and honored.
                  </p>
                  <Link href="/awards">Read more</Link>
                </div>
              </div>
            </div>

            {/* ends */}

            {/* chlid two */}

            {/* ends */}
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={Styles.blogCustombuttondiv}>
        <button className="Backslide">
          <img src="/blog/btnleft.png" />
        </button>
        <button className="Nextslide">
          <img src="/blog/btnright.png" />
        </button>
      </div>
    </div>
  );
};

export default Bloglandingpage;
