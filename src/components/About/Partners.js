"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";

const Partners = () => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiPoint + "/en/client/public");
        const result = await response.json();

        // Sort the results based on the createdAt property
        const sortedResults = result.results.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB;
        });

        setData(sortedResults);
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
                {data.map((partner, index) => (
                  <SwiperSlide key={partner.id}>
                    <div className={Styles.PartnersSlideSlidermain}>
                      <img
                        src={partner.image}
                        loading="lazy"
                        alt={`partner${index + 1}.png`}
                      />
                    </div>

                    <div className={Styles.PartnersSlideSlidermain}>
                      <img
                        src={partner.image}
                        loading="lazy"
                        alt={`partner${index + 2}.png`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
