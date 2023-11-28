"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Link from "next/link";
import Styles from "../../styles/insights.module.scss";

const Landing = () => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiPoint + "/en/award/public");
        const result = response.data;
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={Styles.blogmainlandingcontainer}>
      <Swiper
        loop={true}
        effect="fade"
        navigation={{
          nextEl: ".Nextslide",
          prevEl: ".Backslide",
        }}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className={Styles.mySwiper}
      >
        {data.map((data) =>
          data.visibility === "Show" ? (
            <SwiperSlide key={data.id}>
              <div className={Styles.blogmainlandingcontainerslide}>
                <div className={Styles.blogmainlandingcontainerheading}>
                  <div className={Styles.blogmainlandingcontainerparagraph}>
                    <h5
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof data.title === "string"
                            ? data.title.replace(/\n/g, "<br/>")
                            : data.title,
                      }}
                    />
                  </div>

                  <button className={Styles.buttonmain}>
                    <Link href={`/awards/${data.id}`}>Read Article </Link>
                  </button>

                  <div className={Styles.customarrowcomponent}>
                    <button className="Nextslide">
                      <BsArrowLeftShort color="#ffffff" size="3em" />
                    </button>
                    <button className="Backslide">
                      <BsArrowRightShort color="#ffffff" size="3em" />
                    </button>
                  </div>
                </div>
                <img
                  id={Styles.img}
                  width="100%"
                  poster="/"
                  src={IMGURL + data.image}
                />
              </div>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default Landing;
