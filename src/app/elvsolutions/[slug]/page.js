"use client";
import { useEffect, useState, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

export default function Page({ params }) {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);

  const SolID = params.slug;

  console.log(SolID)

  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          ApiPoint + "/en/solution-body/public/" + SolID
        );
        const result = await response.json();

        const sortedResults = result.results.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB;
        });

        setData(sortedResults);
        console.log(sortedResults)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <div className={Styles.solutioninnerhomelandingcontainer}>
        <div className={Styles.solutioninnerhomelandingcontainerslide}>
          <div className={Styles.solutioninnerhomelandingcontainerheading}>
            <div
              className={Styles.solutioninnerhomelandingcontanerheadinginner}
            >
              <h5>
                Data Center <br /> Infrastructure
              </h5>
            </div>

            <button onClick={scrollToMain}>Discover More</button>
          </div>
          <img
            id={Styles.img}
            width="100%"
            poster="/"
            src="/ict/01/hero.webp"
          />
        </div>
        <div className={Styles.solutioninnerhomelandingcontainerheading}></div>

        <div id="main"></div>
      </div>
      <div className={Styles.landingheadingparent}>
        <div className={Styles.landingparentmain}>
          <div className={Styles.landingparenthead}>
            <h1>Empowering Your Digital Journey With</h1>
            <h1>Data Center Infrastructure</h1>
          </div>

          <div className={Styles.landingparentheadparagraph}>
            <p>
              In the ever-expanding realm of our digital landscape, the Data
              Center Infrastructure has emerged as the backbone, weaving
              together the sway of computing and networking components.{" "}
            </p>
            <br />
            <p>
              With its formidable expertise in handling colossal volumes of
              data, the Data Center Infrastructure empowers organizations to
              unlock the treasures of knowledge and embark upon the path of
              informed decision-making.{" "}
            </p>
            <br />
            <p>
              Now, let us delve into the array of services we proudly offer as a
              comprehensive technology solution provider, harmonizing technology
              and people in this digital realm.
            </p>
          </div>
        </div>
      </div>
{console.log(data.results)}
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Data & Cyber Security </h1>
            <h1>Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                The Security Operations Centre (SOC) ensures round-the-clock
                monitoring and management of security incidents.
              </li>
              <li>
                Security Information & Event Management (SIEM) collects and
                analyzes security event data to detect and respond to threats.
              </li>
              <li>
                Endpoint & Network Security safeguards devices and networks from
                unauthorized access and malicious activities.
              </li>
              <li>
                Email Security & Data Leakage Prevention (DLP) protects
                sensitive information from being leaked or compromised.
              </li>
              <li>
                Privileged Access Management (PAM) controls and monitors
                privileged accounts and their access to critical systems.
              </li>
              <li>
                {" "}
                An Information Security Awareness Training Program educates
                employees about best practices and potential risks to enhance
                security awareness.
              </li>
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
          <img src="/ict/01/img 1.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/01/img 2.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Email & Collaboration </h1>
            <h1>Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                A robust secure email solution ensures the confidentiality and
                integrity of email communications.
              </li>
              <li>
                Mobile device management enables secure access and management of
                devices used for email and collaboration.{" "}
              </li>
              <li>
                Spam and Phishing prevention services protect users from
                unwanted or malicious emails.
              </li>
              <li>
                {" "}
                Digital Signature Management ensures the authenticity and
                integrity of digital documents and communications.
              </li>
              <li>
                Video-enabled collaboration services facilitate real-time
                communication and collaboration among users.
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Data Centre </h1>
            <h1>Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                The Software Defined Data Centre (SDDC) offers a virtualized and
                software-defined infrastructure for increased agility and
                flexibility.
              </li>
              <li>
                Virtualization & Consolidation of infrastructure optimizes
                resource utilization and reduces hardware requirements.
              </li>
              <li>
                {" "}
                Hosting & Migration Services for systems and data ensure a
                smooth transition and availability of critical applications.
              </li>
              <li>
                Vulnerability & Patch Management ensures that systems are up to
                date and protected against known vulnerabilities.
              </li>
              <li>
                The Network Operations Centre (NOC) monitors and manages network
                infrastructure for optimal performance and security.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/01/img 3.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/01/img 4.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Concerning End User </h1>
            <h1>Computing Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Virtual desktops allow users to access their desktop environment
                from anywhere and at any time securely.
              </li>
              <li>
                End-point security solutions protect user devices from malware,
                unauthorized access, and data breaches.
              </li>
              <li>
                Unified communication and collaboration services integrate
                various communication channels for seamless collaboration.
              </li>
              <li>
                {" "}
                IT Support Services with an online ticketing system enable
                efficient and timely resolution of user issues.
              </li>
              <li>
                Integration with ITIL process and SLA ensures adherence to
                industry best practices and service level agreements.{" "}
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>

      <div className={Styles.innersolutionfooterlandingheadingparent}>
        <div className={Styles.innersolutionfooterlandingparentmain}>
          <div className={Styles.innersolutionfooterlandingparenthead}>
            <h1>IT Service Management (ITSM)</h1>
          </div>

          <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
            <p>
              Our ITSM processes align strictly with ITIL best practices and ISO
              27001:2013 recommendations for Information Security Management
              Systems. Our team consists of specialized units qualified to
              ensure IT services continuity around the clock.
            </p>
            <br />
            <p>
              We strive to provide a technological ecosystem with zero
              interruptions, perfectly catering to each IT requirement that
              supports business productivity. We deliver 95% resolution within
              record time where 76% of tickets are closed as first call
              resolution (FCR).
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.footerslidermainhome}>
        <div className={Styles.footersliderboxmainparent}>
          <div className={Styles.footersliderboxmainparentone}>
            <div className={Styles.footersliderboxmainparentonehead}>
              <h1>
                {" "}
                <span>We offer</span> solutions <br /> that are awesome <br />{" "}
                and reliable
              </h1>
              {/* <p>
            Curabitur euismod finibus ligula, id molestie purus congue ac. Sed
            ac eros magna.
          </p> */}
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
    </Fragment>
  );
}
