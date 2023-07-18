"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";

const Partners = () => {
  return (
    <div className={Styles.Partnershome}>
      <div className={Styles.Partnershomeparentheading}>
        <div className={Styles.Partnershomecontentheading}>
          <h1>
            <br />
            <span>Our</span> strategic partners
          </h1>
        </div>
      </div>

      {/* slider */}

      <div className={Styles.Partnersclientslidermain}>
        <div className={Styles.PartnersSlideClientHome}>
          <div className={Styles.PartnersSlideClientHeading}>
            <div className={Styles.PartnersSlideSliderparent}>
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
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 02.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 03.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 04.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 05.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 06.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 07.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 08.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 09.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 10.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 11.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 12.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 13.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 14.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 15.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 16.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 17.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 18.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 19.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 20.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 21.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 22.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 23.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 24.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 25.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 26.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 27.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 27.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 28.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 29.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 30.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 31.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 32.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 33.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 34.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 35.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 36.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 37.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 38.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 39.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 40.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 41.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 42.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 43.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 44.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 01.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 45.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 46.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 47.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 48.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 49.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 50.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 51.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 52.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 53.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 54.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 55.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 56.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 57.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 58.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 59.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 60.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 61.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 62.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 63.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 64.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 65.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 66.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 67.png"
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

      {/* slider */}
    </div>
  );
};

export default Partners;
