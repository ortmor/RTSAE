"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import Styles from "../../styles/about.module.scss";

const Industriesabout = () => {
  return (
    <div className={Styles.Industrieshome}>
      <div className={Styles.Industrieshomeparentheading}>
        <div className={Styles.Industrieshomecontentheading}>
          <h1>Industries we serve</h1>
          <br />
        </div>
      </div>

      {/* slider */}

      <div className={Styles.Industriesclientslidermain}>
        <div className={Styles.IndustriesSlideClientHome}>
          <div className={Styles.IndustriesSlideClientHeading}>
            <div className={Styles.IndustriesSlideSliderparent}>
              <Swiper
                breakpoints={{
                  1200: {
                    spaceBetween: 10,
                    slidesPerView: 5,
                    initialSlide: 1,
                  },

                  900: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                    initialSlide: 1,
                  },

                  600: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                    initialSlide: 1,
                  },

                  500: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                    initialSlide: 1,
                  },

                  400: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                    initialSlide: 1,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                spaceBetween={20}
                initialSlide={1}
                speed={1000}
                centeredSlides={true}
                modules={[Autoplay, Pagination]}
                className={Styles.mySwiper}
              >
                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/education.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Education</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/healthcare.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Healthcare</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/manufacturing.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Manufacturing</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/media.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Media</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/transport.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Transport</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/hospitality.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Hospitality</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/banks.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Financials</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/oil.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Oil & Gas</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/com.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Safe City</h2>
                  </div>
                </SwiperSlide>
            
            
            
                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/education.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Education</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/healthcare.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Healthcare</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/manufacturing.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Manufacturing</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/media.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Media</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/transport.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Transport</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/hospitality.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Hospitality</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/banks.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Financials</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/oil.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Oil & Gas</h2>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.IndustriesSlideSlidermain}>
                    <img
                      src="/about/ind/com.png"
                      loading="lazy"
                      alt="client.png"
                    />

                    <h2>Safe City</h2>
                  </div>
                </SwiperSlide>
            
            
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
    </div>
  );
};

export default Industriesabout;
