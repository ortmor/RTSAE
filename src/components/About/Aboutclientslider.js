"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";

function Aboutclientslider() {
  return (
    <div className={Styles.Aboutclientslidermain}>
      <div className={Styles.AboutHeading}>
        <h1>The team that </h1>
        <h1>leads us forward</h1>
      </div>

      <div className={Styles.AboutSlideClientHome}>
        <div className={Styles.AboutSlideClientHeading}>
          <div className={Styles.AboutSlideSliderparent}>
            <Swiper
              breakpoints={{
                1200: {
                  spaceBetween: 1,
                  slidesPerView: 3,
                  initialSlide: 3,
                },

                900: {
                  spaceBetween: 1,
                  slidesPerView: 1,
                  initialSlide: 1,
                },
              }}
              loop={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              initialSlide={3}
              speed={1000}
              centeredSlides={true}
              modules={[Autoplay, Pagination]}
              className={Styles.mySwiper}
            >
              <SwiperSlide>
                <div className={Styles.AboutSlideSlidermain}>
                  <div className={Styles.AboutSlideSlidermainimage}>
                    <img
                      src="/about/team1.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <div className={Styles.AboutSlideSlidermaincontent}>
                      <h6>
                        AKHTAR SAEED <br />
                        HASHMI
                      </h6>
                      <p>FOUNDER, CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutSlideSlidermain}>
                  <div className={Styles.AboutSlideSlidermainimage}>
                    <img
                      src="/about/team2.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <div className={Styles.AboutSlideSlidermaincontent}>
                      <h6>
                        OMAR AHMED <br />
                        ABDULLAH
                      </h6>
                      <p>FOUNDER, COO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutSlideSlidermain}>
                  <div className={Styles.AboutSlideSlidermainimage}>
                    <img
                      src="/about/team3.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <div className={Styles.AboutSlideSlidermaincontent}>
                      <h6>
                        SOPHIA AVA <br />
                        CHARLOTTE
                      </h6>
                      <p>MANAGEMENT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutSlideSlidermain}>
                  <div className={Styles.AboutSlideSlidermainimage}>
                    <img
                      src="/about/team1.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <div className={Styles.AboutSlideSlidermaincontent}>
                      <h6>
                        AKHTAR SAEED <br />
                        HASHMI
                      </h6>
                      <p>FOUNDER, CEO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutSlideSlidermain}>
                  <div className={Styles.AboutSlideSlidermainimage}>
                    <img
                      src="/about/team2.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <div className={Styles.AboutSlideSlidermaincontent}>
                      <h6>
                        OMAR AHMED <br />
                        ABDULLAH
                      </h6>
                      <p>FOUNDER, COO</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.AboutSlideSlidermain}>
                  <div className={Styles.AboutSlideSlidermainimage}>
                    <img
                      src="/about/team3.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <div className={Styles.AboutSlideSlidermaincontent}>
                      <h6>
                        SOPHIA AVA <br />
                        CHARLOTTE
                      </h6>
                      <p>MANAGEMENT</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutclientslider;
