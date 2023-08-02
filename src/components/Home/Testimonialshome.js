"use client";

import Styles from "../../styles/home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from 'react-avatar';
import { Pagination, Autoplay, Navigation } from "swiper";

function Testimonials() {
  return (
    <div className={Styles.TestimonialsVirtualRealityhome}>
      <div className={Styles.TestimonialsVirtualRealityheading}>
        <h1>
          {" "}
          <span>Find out</span> <br />
          what clients say
        </h1>
      </div>

      <div className={Styles.TestimonialsVirtualRealitysliderparent}>
        <div className={Styles.TestimonialsVirtualRealitysliderparent2}>
          {/* <div className={Styles.Custombuttondiv}>
            <button className="Back-slide">
              <GrPrevious color="white" size="2em" />
            </button>
            <button className="Next-slide">
              <GrNext color="white" size="2em" />
            </button>
          </div> */}
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            // navigation={{
            //   nextEl: ".Next-slide",
            //   prevEl: ".Back-slide",
            // }}
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
            <SwiperSlide>
              <div className={Styles.TestimonialsVirtualRealitysliderbox2}>
                <div
                  className={
                    Styles.TestimonialsVirtualRealitysliderboxparagraph
                  }
                >

<div className={Styles.avatarmain}>
                  <Avatar className={Styles.avatarbg} src="/home/avatars/Asset 42.png" size="100" round={true} />
                  </div>

               


                  <h1>Bunya ERP Implementation Go Live</h1>
                  <h2>Bunya L.L.C</h2>
                  <p className={Styles.blockquote}>
                    RTS has Completed the implementation of the Oracle
                    e-Business suite R12 in Bunya. They are tasked with the
                    responsibility of planning, executing and managing the
                    implementation, infrastructure and operations of the Oracle
                    E-Business suite. Bunya, the local Resident Authority of
                    Reem Island, is responsible for the Infrastructure
                    Development of one of the world's largest
                    single-development's on a natural island.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Styles.TestimonialsVirtualRealitysliderbox2}>
                <div
                  className={
                    Styles.TestimonialsVirtualRealitysliderboxparagraph
                  }
                >
                    <div className={Styles.avatarmain}>
                  <Avatar className={Styles.avatarbg} src="/home/avatars/Asset 43.png" size="100" round={true} />
                  </div>
                  <h1>ICT ERP Implementation Go Live</h1>
                  <h2>ICT - International Capital Trading</h2>
                  <p className={Styles.blockquote}>
                    RTS has completed the implementation of Oracle e-Business
                    suite R12 in ICT, which is A leader in the Abu Dhabi business
                    environment, International Capital Trading (ICT) is a
                    private company that owns and operates substantial assets in
                    real estate, and investments throughout the world.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Styles.TestimonialsVirtualRealitysliderbox2}>
                <div
                  className={
                    Styles.TestimonialsVirtualRealitysliderboxparagraph
                  }
                >
                    <div className={Styles.avatarmain}>
                  <Avatar className={Styles.avatarbg} src="/home/avatars/Asset 44.png" size="100" round={true} />
                  </div>
                  <h1>Sea Palace ERP Implementation Go Live</h1>
                  <h2>Sea Palace</h2>
                  <p className={Styles.blockquote}>
                    RTS has Completed the implementation of Oracle e-Business
                    suite R12 in Sea Palace
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Styles.TestimonialsVirtualRealitysliderbox2}>
                <div
                  className={
                    Styles.TestimonialsVirtualRealitysliderboxparagraph
                  }
                >
                    <div className={Styles.avatarmain}>
                  <Avatar className={Styles.avatarbg} src="/home/avatars/Asset 40.png" size="100" round={true} />
                  </div>
                  <h1>Al-Qudra Service Level Agreement</h1>
                  <h2>Al-Qudra Holding P.J.S.C</h2>
                  <p className={Styles.blockquote}>
                    RTS has Completed the Support agreement with Al Qudra
                    Holding for ERP and The Contract has been renewed for
                    another year.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={Styles.TestimonialsVirtualRealitysliderbox2}>
                <div
                  className={
                    Styles.TestimonialsVirtualRealitysliderboxparagraph
                  }
                >
                    <div className={Styles.avatarmain}>
                  <Avatar className={Styles.avatarbg} src="/home/avatars/Asset 41.png" size="100" round={true} />
                  </div>
                  <h1>Alejandro Fonseca</h1>
                  <h2>ROYAL ARCHITECTS Architecture & Project Management</h2>
                  <p className={Styles.blockquote}>
                    With reference to the above subject, we strongly recommended
                    RTS for ELV projects of any magnitude. The company has been
                    known to us in connection with several projects local and
                    international and by far we have found their staff to be
                    competent, technically sound and  target-oriented management
                    team of professionals, with a broader prospect towards the
                    business. We wish the team all the best for their future and
                    would always be interested in working with them on ELV
                    requirements.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
