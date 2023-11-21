"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";

const Ourclients = () => {
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
              {data.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className={Styles.AboutourSlideSlidermain}>
                    <img src={client.image} loading="lazy" alt="client.png" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
