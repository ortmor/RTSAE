"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import uuid from "short-uuid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import Styles from "../../styles/home.module.scss";

const Bloglandingpage = () => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ApiPoint + `/en/award/public?fetch=${uuid.generate()}`
        );
        const firstThreeResults = response.data.results.slice(0, 3);
        setData(firstThreeResults);
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
        {data.map((blog) =>
          blog.visibility === "Show" ? (
            <SwiperSlide key={blog.id}>
              <div className={Styles.Bloglandingpageparentcontainer}>
                {/* chlid one */}
                <div className={Styles.Bloglandingpageboxonemain}>
                  <div
                    id={Styles.blogimgone}
                    style={{ backgroundImage: `url(${IMGURL + blog.image})` }}
                    className={Styles.Bloglandingpageboxoneimg}
                  ></div>
                  <div className={Styles.Bloglandingpageoneparagraph}>
                    <div className={Styles.Bloglandingpageoneparagraphcontent}>
                      <h1>{blog.title.trim().substring(0, 40)} ...</h1>
                      <p>{blog.description.trim().substring(0, 400)} ...</p>
                      <Link href={`/awards/${blog.id}`}>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>

      <div className={Styles.blogCustombuttondiv}>
        <button className="Backslide">
          <img src="/blog/btnleft.png" alt="Previous" />
        </button>
        <button className="Nextslide">
          <img src="/blog/btnright.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Bloglandingpage;
