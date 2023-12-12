"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "../../styles/solution.module.scss";
import { Fragment } from "react";
import uuid from "short-uuid"

const Main = () => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiPoint + `/en/solution/public?fetch=${uuid.generate()}`);
        const allData = response.data.results;
        const filteredData = allData.filter((item) => item.type === "ICT");
        setData(filteredData);
        setMain(filteredData[0]?.solution || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <br />
      <br />
      {data.map((sol, index) =>
        sol.visibility === "Show" ? (
          <div key={sol.id}>
            {index % 2 === 0 ? (
              <div className={Styles.icthomemainparentdivthree}>
                <div className={Styles.icthomemainboxthree}>
                  <img src={IMGURL + sol.image} alt={sol.title}></img>
                  <div className={Styles.icthomemainboxthreeimg}></div>
                </div>

                <div className={Styles.icthomemainboxthree}>
                  <div className={Styles.icthomemainboxthreeheading}>
                    <h1
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof sol.title === "string"
                            ? sol.title.replace(/\n/g, "<br/>")
                            : sol.title,
                      }}
                    />
                  </div>
                  <br />
                  <Link href={`/ictsolutions/${sol.id}`}> Readmore </Link>
                </div>
              </div>
            ) : (
              <div className={Styles.icthomemainparentdiv}>
                <div className={Styles.icthomemainboxone}>
                  <div className={Styles.icthomemainboxoneheading}>
                    <h1
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof sol.title === "string"
                            ? sol.title.replace(/\n/g, "<br/>")
                            : sol.title,
                      }}
                    />
                  </div>
                  <br />
                  <Link href={`/ictsolutions/${sol.id}`}> Readmore </Link>
                </div>
                <div className={Styles.icthomemainboxtwo}>
                  <img src={IMGURL + sol.image} alt={sol.title}></img>
                  <div className={Styles.icthomemainboxtwoimg}></div>
                </div>
              </div>
            )}
          </div>
        ) : null
      )}
    </Fragment>
  );
};

export default Main;
