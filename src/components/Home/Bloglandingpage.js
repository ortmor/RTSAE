"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import Styles from "../../styles/home.module.scss";

const Bloglandingpage = () => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiPoint + "/en/award/public");
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={Styles.Bloglandingpageparent}>
      <div className={Styles.Bloglandingpageheadingmain}>
        <h1>Triumphs and Accolades</h1>
      </div>

      <Swiper
        loop={true}
        effect="fade"
        navigation={{
          nextEl: ".Nextslide",
          prevEl: ".Backslide",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className={Styles.mySwiper}
      >
        {data.map((data) => {
          return (
            <SwiperSlide>
              <div className={Styles.Bloglandingpageparentcontainer}>
                {/* chlid one */}

                <div className={Styles.Bloglandingpageboxonemain}>
                  <div
                    id={Styles.blogimgone}
                    className={Styles.Bloglandingpageboxoneimg}
                  ></div>
                  <div className={Styles.Bloglandingpageoneparagraph}>
                    <div className={Styles.Bloglandingpageoneparagraphcontent}>
                      <h1>{data.title}</h1>
                      <p>{data.description}</p>
                      <Link href={`/awards/ ${data.id}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={Styles.blogCustombuttondiv}>
        <button className="Backslide">
          <img src="/blog/btnleft.png" />
        </button>
        <button className="Nextslide">
          <img src="/blog/btnright.png" />
        </button>
      </div>
    </div>
  );
};

export default Bloglandingpage;
