"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper";
import Styles from "../../styles/about.module.scss";

const Industriesabout = () => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiPoint + "/en/industry/public");
        const result = response.data;
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
                {data.map((industry) =>
                  industry.visibility === "Show" ? (
                    <SwiperSlide key={industry.id}>
                      <div className={Styles.IndustriesSlideSlidermain}>
                        <img
                          src={IMGURL + industry.image}
                          loading="lazy"
                          alt="client.png"
                        />
                        <h2>{industry.name}</h2>
                      </div>
                    </SwiperSlide>
                  ) : null
                )}
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
