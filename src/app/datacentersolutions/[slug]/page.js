"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

export default function Page({ params }) {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);
  const [main, setMain] = useState({});

  const SolID = params.slug;

  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ApiPoint + "/en/solution-body/solution/public/" + SolID
        );
        const allData = response.data.results;
        const filteredData = allData.filter(
          (item) => item.solution.type === "DATA_CENTRE"
        );
        setData(filteredData);
        setMain(filteredData[0]?.solution || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className={Styles.solutioninnerhomelandingcontainer}>
        <div className={Styles.solutioninnerhomelandingcontainerslide}>
          <div className={Styles.solutioninnerhomelandingcontainerheading}>
            <div
              className={Styles.solutioninnerhomelandingcontanerheadinginner}
            >
              <h5
                dangerouslySetInnerHTML={{
                  __html:
                    typeof main.title === "string"
                      ? main.title.replace(/\n/g, "<br/>")
                      : main.title,
                }}
              />
            </div>

            <button onClick={scrollToMain}>Discover More</button>
          </div>
          <img id={Styles.img} width="100%" poster="/" src={IMGURL + main.image} />
        </div>
        <div className={Styles.solutioninnerhomelandingcontainerheading}></div>

        <div id="main"></div>
      </div>

      {/* Title */}

      <div className={Styles.landingheadingparent}>
        <div className={Styles.landingparentmain}>
          <div className={Styles.landingparenthead}>
            <h1
              dangerouslySetInnerHTML={{
                __html:
                  typeof main.headerTitle === "string"
                    ? main.headerTitle.replace(/\n/g, "<br/>")
                    : main.headerTitle,
              }}
            />
          </div>

          <div className={Styles.landingparentheadparagraph}>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  typeof main.headerDescription === "string"
                    ? main.headerDescription.replace(/\n/g, "<br/>")
                    : main.headerDescription,
              }}
            />
          </div>
        </div>
      </div>

      <div>
        {data.map((sol, index) => {
          const isEven = index % 2 === 0;

          if (isEven) {
            return (
              sol.visibility === "Show" ? (
              <div
                key={sol.id}
                className={Styles.innersolutionhomemainparentdivthree}
              >
                <div className={Styles.innersolutionhomemainboxthree}>
                  <img src={IMGURL + sol.image}></img>
                  <div
                    className={Styles.innersolutionhomemainboxthreeimg}
                  ></div>
                </div>

                <div className={Styles.innersolutionhomemainboxthree}>
                  <div className={Styles.innersolutionhomemainboxthreeheading}>
                    <h1>{sol.title}</h1>
                  </div>
                  <div className={Styles.innersolutionpointsmain}>
                  <ul>
  {sol.description
    .split(">")
    .map((sentence, index, array) => (
      <li key={index}>
        {sentence.trim()}
        {index < array.length - 1 && '>'}
      </li>
    ))}
</ul>

                  </div>
                  <br />
                  <Link href="/contact">Let’s Talk</Link>
                </div>
              </div> ) : null
            );
          } else {
            return (
              sol.visibility === "Show" ? (
              <div className={Styles.innersolutionhomemainparentdiv}>
                <div className={Styles.innersolutionhomemainboxone}>
                  <div className={Styles.innersolutionhomemainboxoneheading}>
                    <h1>{sol.title}</h1>
                  </div>
                  <div className={Styles.innersolutionpointsmain}>
                  <ul>
  {sol.description
    .split(">")
    .map((sentence, index, array) => (
      <li key={index}>
        {sentence.trim()}
        {index < array.length - 1 && '>'}
      </li>
    ))}
</ul>

                  </div>
                  <br />
                  <Link href="/contact">Let’s Talk</Link>
                  <br />
                  <br />
                  <br />
                  <br />
                </div>

                <div className={Styles.innersolutionhomemainboxtwo}>
                  <img src={IMGURL + sol.image}></img>
                 
                  <div className={Styles.innersolutionhomemainboxtwoimg}></div>
                </div>
              </div> ) : null
            );
          }
        })}
      </div>

      <div className={Styles.innersolutionfooterlandingheadingparent}>
        <div className={Styles.innersolutionfooterlandingparentmain}>
          <div className={Styles.innersolutionfooterlandingparenthead}>
            <h1
              dangerouslySetInnerHTML={{
                __html:
                  typeof main.footerTitle === "string"
                    ? main.footerTitle.replace(/\n/g, "<br/>")
                    : main.footerTitle,
              }}
            />
          </div>

          <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
            <p>{main.footerDescription}</p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className={Styles.footerslidermainhome}>
        <div className={Styles.footersliderboxmainparent}>
          <div className={Styles.footersliderboxmainparentone}>
            <div className={Styles.footersliderboxmainparentonehead}>
              <h1>
                {" "}
                <span>We offer</span> solutions <br /> that are awesome <br />{" "}
                and reliable
              </h1>
            </div>

            <div className={Styles.footersliderboxmainparentbuttoncontainer}>
              <button className="Backslide">
                <AiOutlineArrowLeft />
              </button>
              <button className="Nextslide">
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>

          <div className={Styles.footersliderboxmainparenttwo}>
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                1200: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                  initialSlide: 1,
                },

                900: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                  initialSlide: 1,
                },

                600: {
                  spaceBetween: 50,
                  slidesPerView: 2,
                  initialSlide: 1,
                },

                500: {
                  spaceBetween: 50,
                  slidesPerView: 1,
                  initialSlide: 1,
                },

                100: {
                  spaceBetween: 50,
                  slidesPerView: 1,
                  initialSlide: 1,
                },
              }}
              navigation={{
                nextEl: ".Nextslide",
                prevEl: ".Backslide",
              }}
              spaceBetween={50}
              initialSlide={1}
              speed={2000}
              centeredSlides={true}
              modules={[Autoplay, Navigation]}
              className={Styles.mySwiper}
            >
              <div className={Styles.footersliderboxmainparenttwoboxslider}>
                <SwiperSlide>
                  <Link style={{ textDecoration: "none" }} href="/ictsolutions">
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 13.png" />
                      <h1>
                        {" "}
                        ICT <br /> Solutions
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/digitaltransformation"
                  >
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 14.png" />
                      <h1>
                        {" "}
                        Digital <br /> Transformation
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link style={{ textDecoration: "none" }} href="/elvsolutions">
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 15.png" />
                      <h1>
                        {" "}
                        ELV <br /> Solutions
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/audiovisualsolutions"
                  >
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 16.png" />
                      <h1>
                        {" "}
                        Audio visual <br /> Solutions
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link
                    style={{ textDecoration: "none" }}
                    href=" /apcturnkeyprojects"
                  >
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 17.png" />
                      <h1>
                        {" "}
                        Apc turnkey <br /> projects
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link style={{ textDecoration: "none" }} href="/ictsolutions">
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 13.png" />
                      <h1>
                        {" "}
                        ICT <br /> Solutions
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/digitaltransformation"
                  >
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 14.png" />
                      <h1>
                        {" "}
                        Digital <br /> Transformation
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link style={{ textDecoration: "none" }} href="/elvsolutions">
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 15.png" />
                      <h1>
                        {" "}
                        ELV <br /> Solutions
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/audiovisualsolutions"
                  >
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 16.png" />
                      <h1>
                        {" "}
                        Audio visual <br /> Solutions
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link
                    style={{ textDecoration: "none" }}
                    href=" /apcturnkeyprojects"
                  >
                    <div className={Styles.footersliderboxmainparenttwobox}>
                      <img src="/ict/Asset 17.png" />
                      <h1>
                        {" "}
                        Apc turnkey <br /> projects
                      </h1>
                      <div className={Styles.navigationarrowcontainer}>
                        <button>
                          <AiOutlineArrowRight
                            className={Styles.navigationarrow}
                          />
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
}
