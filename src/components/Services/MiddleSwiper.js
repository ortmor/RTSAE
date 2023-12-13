"use client";

import React, { Fragment, useState } from "react";
import Styles from "../../styles/services.module.scss";

const MiddleSwiper = () => {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [thrid, setthird] = useState(false);
  const [four, setfour] = useState(false);
  const [five, setfive] = useState(false);
  const [six, setsix] = useState(false);

  const One = () => {
    setfirst(true);
    setsecond(false);
    setthird(false);
    setfour(false);
    setfive(false);
    setsix(false);
  };

  const Two = () => {
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfour(false);
    setfive(false);
    setsix(false);
  };

  const Three = () => {
    setfirst(false);
    setsecond(false);
    setthird(true);
    setfour(false);
    setfive(false);
    setsix(false);
  };

  const Four = () => {
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfour(true);
    setfive(false);
    setsix(false);
  };

  const Five = () => {
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfour(false);
    setfive(true);
    setsix(false);
  };

  const Six = () => {
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfour(false);
    setfive(false);
    setsix(true);
  };

  return (
    <Fragment>
      <div className={Styles.mainswipermiddlecontainer}>
        <div className={Styles.mainswipermiddleheading}>
          <h1>
            Data Center Management Support <br /> and Services
          </h1>

          <div className={Styles.mainswipermiddlepara}>
            <p>
              At RTS, we specialize in a wide range of solutions designed to
              enhance the efficiency and reliability of your data center
              operations. Our dedicated team of experts is committed to
              delivering tailored support and services to meet your unique
              requirements. Here is an overview of the key areas we address:
            </p>
          </div>
        </div>
      </div>

      {/* Button container */}

      <div className={Styles.mainmiddlebtnmaincontainer}>
        <div className={Styles.mainswipermiddlebuttoncontainer}>
          <div
            onClick={One}
            className={Styles.mainswipermiddlebuttoncontainerbox}
          >
            <p>Data Center Monitoring and Maintenance</p>
          </div>
          <div
            onClick={Two}
            className={Styles.mainswipermiddlebuttoncontainerbox}
          >
            <p>Data Center Security</p>
          </div>
          <div
            onClick={Three}
            className={Styles.mainswipermiddlebuttoncontainerbox}
          >
            <p>Data Center Infrastructure Management (DCIM)</p>
          </div>

          <div
            onClick={Four}
            className={Styles.mainswipermiddlebuttoncontainerbox}
          >
            <p> Data Center Energy Efficiency</p>
          </div>
          <div
            onClick={Five}
            className={Styles.mainswipermiddlebuttoncontainerbox}
          >
            <p> Disaster Recovery and Business Continuity</p>
          </div>
          <div
            onClick={Six}
            className={Styles.mainswipermiddlebuttoncontainerbox}
          >
            <p> Consultancy and Advisory Services</p>
          </div>
        </div>
      </div>

      {/* Boxs */}

      {first ? (
        <div className={Styles.mainmiddlebtncardcontainermain}>
          <div className={Styles.mainmiddlebtncardcontainer}>
            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/24 7 Remote Monitoring.png" />
              </div>

              <h3> 24/7 Remote Monitoring</h3>
              <p>
                Our continuous monitoring ensures the prompt identification and
                resolution of potential issues within your data center
                infrastructure.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Proactive Maintenance.png" />
              </div>
              <h3>Proactive Maintenance</h3>
              <p>
                We perform regular inspections, testing, and preventive
                maintenance to keep your equipment in optimal condition.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Environmental Monitoring.png" />
              </div>
              <h3>Environmental Monitoring</h3>
              <p>
                We oversee critical environmental factors such as temperature,
                humidity, and power usage to maintain ideal operational
                conditions.
              </p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}

      {second ? (
        <div className={Styles.mainmiddlebtncardcontainermain}>
          <div className={Styles.mainmiddlebtncardcontainer}>
            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Physical Security.png" />
              </div>
              <h3> Physical Security</h3>
              <p>
                We employ robust security measures to safeguard your data center
                against unauthorized access, theft, and vandalism.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Access Control.png" />
              </div>
              <h3>Access Control</h3>
              <p>
                Our solutions include access control systems, biometric
                authentication, video surveillance, and visitor management to
                bolster security.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Threat Detection.png" />
              </div>
              <h3>Threat Detection</h3>
              <p>
                Advanced security tools are deployed to identify and mitigate
                potential threats, such as malware, DDoS attacks, and intrusion
                attempts.
              </p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}

      {thrid ? (
        <div className={Styles.mainmiddlebtncardcontainermain}>
          <div className={Styles.mainmiddlebtncardcontainer}>
            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Asset and Inventory Management.png" />
              </div>
              <h3>Asset and Inventory Management</h3>
              <p>
                We offer comprehensive tracking of data center assets, including
                servers, networking equipment, and power distribution units.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Capacity Planning.png" />
              </div>
              <h3>Capacity Planning</h3>
              <p>
                Our DCIM solutions optimize resource allocation, ensuring
                efficient utilization of space, power, and cooling.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Change Management.png" />
              </div>
              <h3>Change Management</h3>
              <p>
                We facilitate change requests, track modifications, and maintain
                precise documentation of your data center infrastructure.
              </p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}

      {four ? (
        <div className={Styles.mainmiddlebtncardcontainermain}>
          <div className={Styles.mainmiddlebtncardcontainer}>
            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Power Usage Effectiveness (PUE) Optimization.png" />
              </div>
              <h3>Power Usage Effectiveness (PUE) Optimization</h3>
              <p>
                We analyze power consumption to identify areas for improvement
                and implement energy-saving measures.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Cooling Efficiency.png" />
              </div>
              <h3>Cooling Efficiency</h3>
              <p>
                Our experts assess cooling systems and recommend strategies to
                optimize airflow and reduce energy consumption.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Renewable Energy Integration.png" />
              </div>
              <h3>Renewable Energy Integration</h3>
              <p>
                We explore opportunities to incorporate renewable energy
                sources, minimizing your environmental footprint.
              </p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}

      {five ? (
        <div className={Styles.mainmiddlebtncardcontainermain}>
          <div className={Styles.mainmiddlebtncardcontainer}>
            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Backup and Replication.png" />
              </div>
              <h3>Backup and Replication</h3>
              <p>
                We develop robust strategies to ensure the availability and
                integrity of your critical data.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Disaster Recovery Planning.png" />
              </div>
              <h3>Disaster Recovery Planning</h3>
              <p>
                Our team assists in creating comprehensive disaster recovery
                plans and conducts regular testing to validate their
                effectiveness.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/High Availability Solutions.png" />
              </div>
              <h3>High Availability Solutions</h3>
              <p>
                We design and implement redundant systems and failover
                mechanisms to minimize downtime and maintain uninterrupted
                operations.
              </p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}

      {six ? (
        <div className={Styles.mainmiddlebtncardcontainermain}>
          <div className={Styles.mainmiddlebtncardcontainer}>
            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Data Center Design and Planning.png" />
              </div>
              <h3>Data Center Design and Planning</h3>
              <p>
                Our expert guidance includes designing new data centers and
                optimizing existing ones, considering scalability, efficiency,
                and future growth.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Technology Evaluation.png" />
              </div>
              <h3>Technology Evaluation</h3>
              <p>
                We help you assess and select the most suitable hardware,
                software, and network infrastructure for your data center.
              </p>
            </div>

            <div className={Styles.mainmiddlebtncardbox}>
              <div className={Styles.mainmiddleimgcard}>
                <img src="/services/box/Compliance and Regulatory Support.png" />
              </div>
              <h3>Compliance and Regulatory Support</h3>
              <p>
                We ensure your data center operations align with industry
                standards and regulatory requirements, providing compliance
                audits and support.
              </p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}

      <div className={Styles.MiddleSwiperbottomheadparent}>
        <div className={Styles.MiddleSwiperbottomhead}>
          <p>
            Our commitment is to provide exceptional data center management
            support and services. Contact us today to discuss your specific
            requirements and let our team assist you in optimizing your data
            center operations for maximum efficiency and reliability.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default MiddleSwiper;
