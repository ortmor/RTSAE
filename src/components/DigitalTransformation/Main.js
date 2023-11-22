"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../../styles/solution.module.scss";
import { Fragment } from "react";

const Main = () => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ApiPoint + "/en/solution/public");
        const result = await response.json();

        setData(result.results);
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
      {data.map((sol, index) => {
        if (sol.type === "DIGITAL_TRANSFORMATION") {
          const isEven = index % 2 === 0;

          return (
            <div key={sol.id}>
              {isEven ? (
                <div className={Styles.icthomemainparentdivthree}>
                  <div className={Styles.icthomemainboxthree}>
                    <img src={sol.image} alt={sol.title}></img>
                    <div className={Styles.icthomemainboxthreeimg}></div>
                  </div>

                  <div className={Styles.icthomemainboxthree}>
                    <div className={Styles.icthomemainboxthreeheading}>
                      <h1>{sol.title} </h1>
                    </div>
                    <br />
                    <Link href={`/digitaltransformation/${sol.id}`}>
                      {" "}
                      Readmore{" "}
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={Styles.icthomemainparentdiv}>
                  <div className={Styles.icthomemainboxone}>
                    <div className={Styles.icthomemainboxoneheading}>
                      <h1>{sol.title}</h1>
                    </div>
                    <br />
                    <Link href={`/digitaltransformation/${sol.id}`}>
                      {" "}
                      Readmore{" "}
                    </Link>
                  </div>
                  <div className={Styles.icthomemainboxtwo}>
                    <img src={sol.image} alt={sol.title}></img>
                    <div className={Styles.icthomemainboxtwoimg}></div>
                  </div>
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </Fragment>
  );
};

export default Main;
