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
                  <h1>
                  HPE Rising Star of the Year 2023-Middle East and Africa
                  </h1>
                  <p>
                    RTS has accomplished a remarkable feat by being honoured
                    with the prestigious HPE Rising Star of the Year 2023-Middle
                    East and Africa Award, solidifying its position as a
                    prominent force in the industry.
                  </p>
                  <p>
                    {" "}
                    The HPE Rising Star of the Year Awards recognizes
                    exceptional organizations in the Middle East and Africa
                    region that have shown remarkable growth, innovation, and
                    dedication to excellence.
                  </p>
                  <Link href="/awards01">Read more</Link>
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
                  <h1> 2T- Partner of the Year – 2022</h1>
                  <p>
                    In a momentous celebration of excellence, RTS was bestowed
                    with the prestigious "2T- Partner of the Year – 2022" award
                    during the highly anticipated Ingram and Cisco Annual
                    Partner awards ceremony.
                  </p>
                  <p>
                    {" "}
                    The event, held in April 2023, recognized outstanding
                    contributions to the UAE business landscape, with a
                    particular focus on delivering unwavering support in the
                    realms of digital planning, implementation, and operational
                    services through cutting-edge Cisco solutions.
                  </p>
                  <Link href="/awards02">Read more</Link>
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
