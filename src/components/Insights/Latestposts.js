"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "../../styles/insights.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import uuid from "short-uuid";

const Latestposts = () => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ApiPoint + `/en/insight-news/latest/public?fetch=${uuid.generate()}`
        );
        const result = response.data;

        const firstThreeResults = result.results;

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
          return posts.visibility === "Show" ? (
            <div key={posts.id} className={Styles.childtwo}>
              <div className={Styles.topnewscardcontainer}>
                <img src={IMGURL + posts.image} alt="img" />
                <div className={Styles.topnewscardparagraph}>
                  <h6>{new Date(posts.createdAt).toLocaleString()}</h6>
                  <h2>{posts.title.trim().substring(0, 50)} ...</h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<p>${posts.description
                        .trim()
                        .substring(0, 300)}</p>`,
                    }}
                  />
                  <br />
                  <br />
                  <Link href={`/news/${posts.id}`}>
                    READ{" "}
                    <AiOutlineArrowRight className={Styles.topnewscardarrow} />{" "}
                  </Link>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>

      {/* <div className={Styles.latestpostloadmorebtn}>
        <Link href="/comingsoon">
          Load more articles{" "}
          <AiOutlineArrowRight className={Styles.Latestcardarrow} />{" "}
        </Link>
      </div> */}
    </div>
  );
};

export default Latestposts;
