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
                      src="/about/partners/Asset 2.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 3.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 4.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 5.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 6.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 7.png"
                      loading="lazy"
                      alt="client.png"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={Styles.PartnersSlideSlidermain}>
                    <img
                      src="/about/partners/Asset 8.png"
                      loading="lazy"
                      alt="client.png"
                    />
                    <img
                      src="/about/partners/Asset 9.png"
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
