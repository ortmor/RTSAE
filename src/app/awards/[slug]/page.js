"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Styles from "../../../styles/home.module.scss";

export default function Page({ params }) {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");

  const SolID = params.slug;

  const scrollToMain = () => {
    const element = document.getElementById("main");
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ApiPoint + "/en/award-body/award/public/" + SolID
        );
        setTitle(response.data.results[0].award.subTitle);
        setImage(response.data.results[0].image);

        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className={Styles.homelandingcontainer}>
        <div className={Styles.homelandingcontainerslide}>
          <div className={Styles.homelandingcontainerheading}>
            <div className={Styles.homelandingcontanerheadinginner}>
              <h5
                dangerouslySetInnerHTML={{
                  __html:
                    typeof Title === "string"
                      ? Title.replace(/\n/g, "<br/>")
                      : Title,
                }}
              />
            </div>
            {console.log(Image)}
            <button onClick={scrollToMain}>Explore more</button>
          </div>
          <img id={Styles.img} width="100%" poster="/" src={Image} />
        </div>
        <div id="main"></div>
      </div>

      {data.map((award, index) => {
        const isEven = index % 2 === 0;

        if (isEven) {
          return (
            <div key={award.id} className={Styles.homemainparentdiv}>
              <div className={Styles.homemainboxone}>
                <div className={Styles.homemainboxonepara}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof award.description === "string"
                          ? award.description.replace(/\n/g, "<br/>")
                          : award.description,
                    }}
                  />
                </div>
                <br />
                <br />
              </div>

              <div className={Styles.homemainboxtwo}>
              
                <img src={award.image}></img>
                <div className={Styles.homemainboxtwoimg}></div>
              </div>
            </div>
          );
        } else {
          return (
            <div className={Styles.homemainparentdiv}>
              <div className={Styles.homemainboxtwo}>
                <img src={award.image}></img>
                <div className={Styles.homemainboxtwoimg}></div>
              </div>
              <div className={Styles.homemainboxone}>
                <div className={Styles.homemainboxonepara}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        typeof award.description === "string"
                          ? award.description.replace(/\n/g, "<br/>")
                          : award.description,
                    }}
                  />
                </div>
                <br />
                <br />
              </div>
            </div>
          );
        }
      })}
    </Layout>
  );
}
