"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";
import uuid from "short-uuid"


const Partners = () => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);
  const IMGURL = process.env.SERVER_URL + "/image/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiPoint + `/en/client/public?fetch=${uuid.generate()}`);
        const result = response.data;

        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
                {data.map((partner, index) =>
                  partner.visibility === "Show" ? (
                    <SwiperSlide key={partner.id}>
                      <div className={Styles.PartnersSlideSlidermain}>
                        <img
                          src={IMGURL + partner.image}
                          loading="lazy"
                          alt={`partner${index + 1}.png`}
                        />
                      </div>
                    </SwiperSlide>
                  ) : null
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
