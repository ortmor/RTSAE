"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Styles from "../../../styles/insights.module.scss";

const page = ({ params }) => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);
  const SolID = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ApiPoint + "/en/insight-news/public/" + SolID
        );
        const Data = response.data.results;
        setData(Data);
        setDescription(Data.description);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div key={data.id}>
        <div className={Styles.Bloginnerpagemain}>
          <div className={Styles.Bloginnerpageimagebackgroundparagraph}></div>
          <div className={Styles.Bloginnerpageimagebackground}>
            <h1>{data.title}</h1>
            <span>{new Date(data.createdAt).toLocaleString()}</span>

            <img src={IMGURL + data.image} alt="" />
          </div>

          <div className={Styles.Bloginnercommoncontainer}>
            <div className={Styles.Bloginnercommoncontaineraparagraph}>
              <div
                dangerouslySetInnerHTML={{ __html: `${data.description}` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
