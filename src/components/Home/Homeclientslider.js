"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper";
import Styles from "../../styles/home.module.scss";

function Homeclientslider() {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiPoint + "/en/client/public");
        const result = response.data;
  
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className={Styles.clientslidermain}>
      <div className={Styles.SlideClientHome}>
        <div className={Styles.SlideClientHeading}>
          <div className={Styles.SlideSliderparent}>
            <Swiper
              breakpoints={{
                1200: {
                  spaceBetween: 10,
                  slidesPerView: 7,
                  initialSlide: 1,
                },

                900: {
                  spaceBetween: 10,
                  slidesPerView: 7,
                  initialSlide: 1,
                },

                600: {
                  spaceBetween: 10,
                  slidesPerView: 5,
                  initialSlide: 1,
                },

                500: {
                  spaceBetween: 1,
                  slidesPerView: 1,
                  initialSlide: 1,
                },

                100: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                  initialSlide: 1,
                },
              }}
              loop={true}
              autoplay={{
                delay: 500,
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
              {data.map((client) => (
                <SwiperSlide key={client.id}>
                  <div className={Styles.SlideSlidermain}>
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
}

export default Homeclientslider;
