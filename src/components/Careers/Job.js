"use client";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Link from "next/link";
import Styles from "../../styles/careers.module.scss";
import axios from "axios";
import uuid from "short-uuid"

const Job = () => {
  const ApiPoint = process.env.API_KEY;
  const IMGURL = process.env.SERVER_URL + "/image/";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiPoint + `/en/career/public?fetch=${uuid.generate()}`);
        const result = response.data;

        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const Box = (data) => {
    Swal.fire({
      html: `
      <div>
      <img
      style="object-fit: contain;"
        width='100%'
        height='500px'
        src=${IMGURL + data.image}
      ></img>
      <a style="display: inline-block;
          background-color: #d33;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;"
   href=${IMGURL + data.image}
   target="_blank">view</a>
    </div>
       
       `,
      width: 800,
      background: "transparent",
      showCloseButton: true,
      cancelButtonColor: "#d33",
      showConfirmButton: false,
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  return (
    <div className={Styles.careersmanagedserviceshome}>
      <div className={Styles.careersmanagedservicesparent}>
        {data.map((job) =>
          job.visibility === "Show" ? (
            <div
              key={job.id}
              onClick={() => Box(job)}
              className={Styles.careersmanagedservicesbox}
            >
              <div className={Styles.careersmanagedservicescontentmain}>
                <div
                  className={Styles.careersmanagedservicescontentmainboxmain}
                >
                  <div
                    className={
                      Styles.careersmanagedservicescontentmainboxmainparagraph
                    }
                  >
                    <h2>{job.title}</h2>
                  </div>

                  <button>{job.type}</button>
                </div>

                <p>{job.description}</p>
              </div>

              <h5 className={Styles.linka}>View & Apply</h5>
            </div>
          ) : null
        )}
      </div>

      {/* <div className={Styles.viewmorecontainer}>
        <Link href="/comingsoon">View more</Link>
      </div> */}
    </div>
  );
};

export default Job;
