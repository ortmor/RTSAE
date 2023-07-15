"use client";
import Styles from "../../styles/insights.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const Values = () => {
  return (
    <div className={Styles.valuesmaincontainer}>
      <div className={Styles.valuesvideocontainer}>
        <div className={Styles.Custombuttondiv}>
          <button className="Back-slide">
            {/* <BsFillArrowLeftCircleFill color="#999999"  /> */}
            <img src="/blog/btnleft.png" />
          </button>
          <button className="Next-slide">
            {/* <BsFillArrowRightCircleFill color="#999999"  /> */}
            <img src="/blog/btnright.png" />
          </button>
        </div>
        <div className={Styles.valuesvideoslidermain}>
          <div className={Styles.valuesvideoslidercontent}>
            <Swiper
              breakpoints={{
                2000: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                  initialSlide: 1,
                },

                1600: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                  initialSlide: 1,
                },

                1100: {
                  spaceBetween: 50,
                  slidesPerView: 2,
                  initialSlide: 1,
                },

                500: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                  initialSlide: 1,
                },
              }}
              loop={true}
              autoplay={false}
              navigation={{
                nextEl: ".Next-slide",
                prevEl: ".Back-slide",
              }}
              speed={1000}
              centeredSlides={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              
              
              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>



              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={Styles.iframebox}>
                  <iframe
                    className={Styles.youtubeclass}
                    src="https://www.youtube.com/embed/PVC0BQqfIOs?rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>



            </Swiper>
          </div>
        </div>
      </div>

      <div className={Styles.valuesmainheading}>
        <h1>
          <span>Our</span> professional values
        </h1>
        <h1>
          <span>and what they mean to us</span>
        </h1>
      </div>

      <div className={Styles.valuesfootercontainermain}>
        <div className={Styles.valuefooterimgboxone}>
          <img src="/blog/pro_values.png" alt="" />
        </div>

        <div className={Styles.valuefooterboxtwo}>
          <div className={Styles.valuefooterboxsectionone}>
            <img src="/blog/quality_service.png" alt="Quality" />
            <h1>Quality Service</h1>
            <p>
              Quality service is at the core of everything we do. We strive to
              exceed expectations by consistently delivering superior solutions
              that meet our clients' needs. We prioritize attention to detail,
              accuracy, and excellence in every aspect of our work. By
              maintaining high standards and a customer-centric approach, we aim
              to build long-lasting relationships and become trusted partners to
              our clients.
            </p>
          </div>

          <div className={Styles.valuefooterboxsectiontwo}>
            <img src="/blog/planning.png" alt="Quality" />
            <h1>Planning & Strategy</h1>
            <p>
              Planning and strategy form the backbone of our approach. By
              thoroughly analyzing client objectives, industry trends, and
              market dynamics, we develop comprehensive plans that align with
              their vision and drive tangible results. Our strategic thinking
              and meticulous planning enable us to navigate complex challenges,
              optimize resources, and achieve desired outcomes for our clients.
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.valuesfootercontainermainsecond}>
        <div className={Styles.valuefooterboxsecondboxone}>
          <img src="/blog/client_satisfaction.png" alt="Quality" />
          <h1>Clients Satisfaction</h1>
          <p>
            We understand that our success is directly linked to the success of
            our clients. We take the time to listen and understand their unique
            requirements, challenges, and goals. By tailoring our services to
            their specific needs that not only meet but exceed our client's
            expectations, fostering enduring partnerships based on mutual trust
            and satisfaction.
          </p>
        </div>

        <div className={Styles.valuefooterboxsecondboxtwo}>
          <img src="/blog/teamwork.png" alt="Quality" />
          <h1>Teamwork</h1>
          <p>
            At RTS, we firmly believe in the power of teamwork. We foster a
            collaborative environment where each team member's skills,
            expertise, and perspectives are valued. By working together
            seamlessly, we maximize efficiency, creativity, and problem-solving
            capabilities, ultimately delivering innovative solutions that
            surpass client expectations.
          </p>
        </div>
      </div>

      {/* <div className={Styles.valuesfootercontainermain}>
        <div className={Styles.valuesfirstsection}>
          <div className={Styles.valuefirstboxone}>
            <img src="/blog/quality_service.png" alt="Quality" />
            <h1>Quality Service</h1>
            <p>
              Quality service is at the core of everything we do. We strive to
              exceed expectations by consistently delivering superior solutions
              that meet our clients' needs. We prioritize attention to detail,
              accuracy, and excellence in every aspect of our work. By
              maintaining high standards and a customer-centric approach, we aim
              to build long-lasting relationships and become trusted partners to
              our clients.
            </p>
          </div>
          <div className={Styles.valuefirstboxtwo}>
            <img src="/blog/planning.png" alt="Quality" />
            <h1>Planning & Strategy</h1>
            <p>
              Planning and strategy form the backbone of our approach. By
              thoroughly analyzing client objectives, industry trends, and
              market dynamics, we develop comprehensive plans that align with
              their vision and drive tangible results. Our strategic thinking
              and meticulous planning enable us to navigate complex challenges,
              optimize resources, and achieve desired outcomes for our clients.
            </p>
          </div>
        </div>

        <div className={Styles.valuessecondsection}>
          <img src="/blog/pro_values.png" alt="" />
        </div>

        <div className={Styles.valuesthirdsection}>
          <div className={Styles.valuefirstboxone}>
            <img src="/blog/client_satisfaction.png" alt="Quality" />
            <h1>Clients Satisfaction</h1>
            <p>
              We understand that our success is directly linked to the success
              of our clients. We take the time to listen and understand their
              unique requirements, challenges, and goals. By tailoring our
              services to their specific needs that not only meet but exceed our
              client's expectations, fostering enduring partnerships based on
              mutual trust and satisfaction.


           
            </p>
          </div>
          <div className={Styles.valuefirstboxtwo}>
            <img src="/blog/teamwork.png" alt="Quality" />
            <h1>Teamwork</h1>
            <p>
              At RTS, we firmly believe in the power of teamwork. We foster a
              collaborative environment where each team member's skills,
              expertise, and perspectives are valued. By working together
              seamlessly, we maximize efficiency, creativity, and
              problem-solving capabilities, ultimately delivering innovative
              solutions that surpass client expectations.




            
              
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Values;
