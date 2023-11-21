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

        // Sort the results based on the createdAt property
        const sortedResults = result.results.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB;
        });

        // Take the first three elements
        const firstThreeResults = sortedResults.slice(0, 3);

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
        {data.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className={Styles.Bloglandingpageparentcontainer}>
              {/* chlid one */}
              <div className={Styles.Bloglandingpageboxonemain}>
                <div
                  id={Styles.blogimgone}
                  className={Styles.Bloglandingpageboxoneimg}
                ></div>
                <div className={Styles.Bloglandingpageoneparagraph}>
                  <div className={Styles.Bloglandingpageoneparagraphcontent}>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <Link href={`/awards/${blog.id}`}>Read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
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
