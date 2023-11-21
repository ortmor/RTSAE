"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../../styles/insights.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const Latestposts = () => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiPoint + "/en/insight-news/latest");
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
    <div className={Styles.Topnewsmainconatiner}>
      <div className={Styles.Topnewsparentcontainer}>
        <div className={Styles.childone}>
          <h1>
            Latest <br /> News
          </h1>
        </div>

        {data.map((posts) => {
          return (
            <div className={Styles.childtwo}>
              <div className={Styles.topnewscardcontainer}>
                <img src="/blog/blog_inner.webp" alt="img" />

                <div className={Styles.topnewscardparagraph}>
                  <h6>JAN 02, 2023</h6>
                  <h2>Our Commitment to Corporate Social Responsibility...</h2>
                  <p>
                    At RTS, we believe that success extends beyond financial
                    achievements. As responsible corporate citizen, we are
                    committed to making a positive impact on society and
                    contributing to the sustainable development of the United
                    Arab Emirates (UAE).
                  </p>
                  <Link href="/section1">
                    READ{" "}
                    <AiOutlineArrowRight className={Styles.topnewscardarrow} />{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={Styles.latestpostloadmorebtn}>
        <Link href="/comingsoon">
          Load more articles{" "}
          <AiOutlineArrowRight className={Styles.Latestcardarrow} />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Latestposts;
