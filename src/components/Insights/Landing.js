"use client";
import { useEffect, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Link from "next/link";
import Styles from "../../styles/insights.module.scss";

const Landing = () => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiPoint + "/en/award/public");
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
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <div className={Styles.blogmainlandingcontainerslide}>
              <div className={Styles.blogmainlandingcontainerheading}>
                <div className={Styles.blogmainlandingcontainerparagraph}>
                  <h5>{data.title}</h5>
                </div>

                <button className={Styles.buttonmain}>
                  <Link href={`/awards/[slug]`} as={`/awards/${data.id}`}>
                    Read Article
                  </Link>
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
              <img id={Styles.img} width="100%" poster="/" src={data.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Landing;
