"use client";
import React, { useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import Link from "next/link";
import Styles from "../../styles/insights.module.scss";

const Landing = () => {
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
        modules={[Autoplay, EffectFade, Navigation]}
        className={Styles.mySwiper}
      >
        <SwiperSlide>
          <div className={Styles.blogmainlandingcontainerslide}>
            <div className={Styles.blogmainlandingcontainerheading}>
              <div className={Styles.blogmainlandingcontainerparagraph}>
                <h5>How to invest your money in newest technologies</h5>
              </div>

              <button className={Styles.buttonmain}>
                <Link href="/awards">Read Article</Link>
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
              src="/blog/insights_hero.webp"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={Styles.blogmainlandingcontainerslide}>
            <div className={Styles.blogmainlandingcontainerheading}>
              <div className={Styles.blogmainlandingcontainerparagraph}>
                <h5>How to invest your money in newest technologies</h5>
              </div>

              <button className={Styles.buttonmain}>
                <Link href="/insights/awards">Read Article</Link>
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
              src="/blog/insights_hero.webp"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Landing;
