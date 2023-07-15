"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";

const Ourclients = () => {
  return (
    <div className={Styles.Aboutourclientslidermain}>
      <div className={Styles.AboutourHeading}>
        <h1>
          {" "}
          <span>Our</span> clients{" "}
        </h1>
      </div>

      <div className={Styles.AboutourSlideClientHome}>
        <div className={Styles.AboutourSlideClientHeading}>
          <div className={Styles.AboutourSlideSliderparent}>
            <Swiper
              breakpoints={{
                1200: {
                  spaceBetween: 20,
                  slidesPerView: 7,
                  initialSlide: 1,
                },

                900: {
                  spaceBetween: 20,
                  slidesPerView: 6,
                  initialSlide: 1,
                },

                600: {
                  spaceBetween: 20,
                  slidesPerView: 4,
                  initialSlide: 1,
                },

                500: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                  initialSlide: 1,
                },

                100: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                  initialSlide: 1,
                },
              }}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={20}
              initialSlide={1}
              speed={2000}
              centeredSlides={true}
          
              modules={[Autoplay]}
              className={Styles.mySwiper}
            >
              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/1.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/2.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/3.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/4.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/5.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/6.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/7.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/8.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/9.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/10.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/11.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/12.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/13.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/14.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/15.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/16.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/17.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/18.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/19.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/20.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/21.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/22.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/23.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/24.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/25.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/26.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/27.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/28.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/29.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/30.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/31.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/32.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/33.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/34.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/35.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/36.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/37.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/38.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/39.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/40.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/41.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/42.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/43.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/44.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutourSlideSlidermain}>
                  <img
                    src="/about/client/45.png"
                    loading="lazy"
                    alt="client.png"
                  />
                </div>
              </SwiperSlide>
           
           
           
           
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
