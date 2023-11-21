"use client";

import Styles from "../../styles/home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Pagination, Autoplay, Navigation } from "swiper";

function Testimonials() {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiPoint + "/en/testimonial/public");
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
    <div className={Styles.TestimonialsVirtualRealityhome}>
      <div className={Styles.TestimonialsVirtualRealityheading}>
        <h1>
          <span>Find out</span> <br />
          what clients say
        </h1>
      </div>

      <div className={Styles.TestimonialsVirtualRealitysliderparent}>
        <div className={Styles.TestimonialsVirtualRealitysliderparent2}>
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            slidesPerView={1}
            initialSlide={1}
            speed={1000}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={Styles.TestimonialsVirtualRealitysliderbox2}>
                  <div
                    className={
                      Styles.TestimonialsVirtualRealitysliderboxparagraph
                    }
                  >
                    <div className={Styles.avatarmain}>
                      <Avatar
                        className={Styles.avatarbg}
                        src={testimonial.image}
                        size="100"
                        round={true}
                      />
                    </div>

                    <h1>{testimonial.title}</h1>
                    <h2>{testimonial.subTitle}</h2>
                    <p className={Styles.blockquote}>
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

