"use client";
import Styles from "../../../styles/solution.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Footerbottomsliderone = () => {
  return (
    <div className={Styles.footerslidermainhome}>
      <div className={Styles.footersliderboxmainparent}>
        <div className={Styles.footersliderboxmainparentone}>
          <div className={Styles.footersliderboxmainparentonehead}>
            <h1>
              {" "}
              <span>We offer</span> solutions <br /> that are awesome <br /> and
              reliable
            </h1>
            {/* <p>
              Curabitur euismod finibus ligula, id molestie purus congue ac. Sed
              ac eros magna.
            </p> */}
          </div>

          <div className={Styles.footersliderboxmainparentbuttoncontainer}>
            <button className="Backslide">
              <AiOutlineArrowLeft />
            </button>
            <button className="Nextslide">
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>

        <div className={Styles.footersliderboxmainparenttwo}>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1200: {
                spaceBetween: 50,
                slidesPerView: 3,
                initialSlide: 1,
              },

              900: {
                spaceBetween: 50,
                slidesPerView: 3,
                initialSlide: 1,
              },

              600: {
                spaceBetween: 50,
                slidesPerView: 2,
                initialSlide: 1,
              },

              500: {
                spaceBetween: 50,
                slidesPerView: 1,
                initialSlide: 1,
              },

              100: {
                spaceBetween: 50,
                slidesPerView: 1,
                initialSlide: 1,
              },
            }}
            navigation={{
              nextEl: ".Nextslide",
              prevEl: ".Backslide",
            }}
            spaceBetween={50}
            initialSlide={1}
            speed={2000}
            centeredSlides={true}
            modules={[Autoplay, Navigation]}
            className={Styles.mySwiper}
          >
            <div className={Styles.footersliderboxmainparenttwoboxslider}>
              <SwiperSlide>
                <Link style={{ textDecoration: "none" }} href="/ictsolutions">
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 13.png" />
                    <h1>
                      {" "}
                      ICT <br /> Solutions
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  style={{ textDecoration: "none" }}
                  href="/digitaltransformation"
                >
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 14.png" />
                    <h1>
                      {" "}
                      Digital <br /> Transformation
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link style={{ textDecoration: "none" }} href="/elvsolutions">
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 15.png" />
                    <h1>
                      {" "}
                      ELV <br /> Solutions
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  style={{ textDecoration: "none" }}
                  href="/audiovisualsolutions"
                >
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 16.png" />
                    <h1>
                      {" "}
                      Audio visual <br /> Solutions
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  style={{ textDecoration: "none" }}
                  href=" /apcturnkeyprojects"
                >
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 17.png" />
                    <h1>
                      {" "}
                      Apc turnkey <br /> projects
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link style={{ textDecoration: "none" }} href="/ictsolutions">
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 13.png" />
                    <h1>
                      {" "}
                      ICT <br /> Solutions
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  style={{ textDecoration: "none" }}
                  href="/digitaltransformation"
                >
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 14.png" />
                    <h1>
                      {" "}
                      Digital <br /> Transformation
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link style={{ textDecoration: "none" }} href="/elvsolutions">
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 15.png" />
                    <h1>
                      {" "}
                      ELV <br /> Solutions
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  style={{ textDecoration: "none" }}
                  href="/audiovisualsolutions"
                >
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 16.png" />
                    <h1>
                      {" "}
                      Audio visual <br /> Solutions
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link
                  style={{ textDecoration: "none" }}
                  href=" /apcturnkeyprojects"
                >
                  <div className={Styles.footersliderboxmainparenttwobox}>
                    <img src="/ict/Asset 17.png" />
                    <h1>
                      {" "}
                      Apc turnkey <br /> projects
                    </h1>
                    <div className={Styles.navigationarrowcontainer}>
                      <button>
                        <AiOutlineArrowRight
                          className={Styles.navigationarrow}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Footerbottomsliderone;
