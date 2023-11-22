"use client";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Styles from "../../styles/services.module.scss";
import axios from "axios";

const Managedservice = () => {
  const ApiPoint = process.env.API_KEY;
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiPoint + "/en/service/public");
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
       <br />
       <img width="50px" height="50px" src=${data.image} />
      <br />
      <br />
       <p style="color:#999999">
        ${data.description}
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  return (
    <div className={Styles.managedserviceshome}>
      <div className={Styles.managedserviceshomeparentheading}>
        <div className={Styles.managedserviceshomecontentheading}>
          <h1>Managed services</h1>
          <p>
            At our company, we prioritize delivering the best possible
            experience to our business partners, regardless of their location or
            bandwidth limitations. We have a clear vision of what IT Services
            Management should entail, and we leverage our expertise to create a
            platform that is easy to use, maintain, manage, and operate.
            Business entities face mounting pressure to operate efficiently,
            which requires finding alternate delivery models that reduce costs,
            enhance customer satisfaction, and deliver higher quality while
            accommodating ongoing growth. RTS Managed Services offers a unique
            and flexible delivery model for managing the digital operations of
            your organization. Our highly skilled team can scale up or down
            based on your business progress, optimizing your operational
            expenses.
          </p>

          <p>
            To ensure the security and compliance of all systems, we adhere to
            ISO 27001 standards for Information Security Management Systems. By
            partnering with RTS Managed Technology Services, you gain access to
            customizable processes, tools, systems, and highly skilled Subject
            Matter Experts, along with 24x7x365 support services.
          </p>
        </div>
      </div>

      <div className={Styles.managedservicesparent}>
        {data.map((service) => (
          <div className={Styles.managedservicesbox} key={service.id}>
            <div className={Styles.managedservicescontentmain}>
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
            </div>

            <p>{service.shortDescription}</p>

            <div className={Styles.managedserviceboxlink}>
              <button onClick={() => Box(service)}>View more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Managedservice;
