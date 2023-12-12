"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";
import axios from "axios";
import uuid from "short-uuid"

const Ourclients = () => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);

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
              {data.map((client) =>
                client.visibility === "Show" ? (
                  <SwiperSlide key={client.id}>
                    <div className={Styles.AboutourSlideSlidermain}>
                      <img
                        src={IMGURL + client.image}
                        loading="lazy"
                        alt="client.png"
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
  );
};

export default Ourclients;
