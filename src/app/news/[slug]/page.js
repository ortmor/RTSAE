"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Styles from "../../../styles/insights.module.scss";

const page = ({ params }) => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);
  const [description, setDescription] = useState("");
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

            <img src={data.image} alt="" />
          </div>

          <div className={Styles.Bloginnercommoncontainer}>
            <div className={Styles.Bloginnercommoncontaineraparagraph}>
              {description.split(",").map((sentence, index, array) => (
                <p key={index}>
                  {sentence.trim()}
                  {index < array.length - 1 && ","}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
