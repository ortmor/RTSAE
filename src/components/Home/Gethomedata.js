"use client";

import React, { useState, useEffect, useRef } from "react";
import Styles from "../../styles/home.module.scss";

const Gethomedata = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const containerRef = useRef(null);
  const hasEnteredViewport = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver((entries) => {
      const [firstEntry] = entries;
      if (firstEntry.isIntersecting) {
        if (!hasEnteredViewport.current) {
          hasEnteredViewport.current = true;
        }
        const interval = setInterval(() => {
          setCount((prevCount) => {
            if (prevCount >= 12) {
              clearInterval(interval);
              return 12;
            } else {
              return prevCount + 2;
            }
          });
        }, 80);

        const interval2 = setInterval(() => {
          setCount2((prevCount) => {
            if (prevCount >= 250) {
              clearInterval(interval2);
              return 250;
            } else {
              return prevCount + 40;
            }
          });
        }, 80);

        const interval3 = setInterval(() => {
          setCount3((prevCount) => {
            if (prevCount >= 1000) {
              clearInterval(interval3);
              return 1000;
            } else {
              return prevCount + 100;
            }
          });
        }, 80);

        const interval4 = setInterval(() => {
          setCount4((prevCount) => {
            if (prevCount >= 1000) {
              clearInterval(interval4);
              return 1000;
            } else {
              return prevCount + 100;
            }
          });
        }, 80);

        return () => {
          clearInterval(interval);
          clearInterval(interval2);
          clearInterval(interval3);
          clearInterval(interval4);
        };
      } else {
        hasEnteredViewport.current = false;
        setCount(0);
        setCount2(0);
        setCount3(0);
        setCount4(0);
      }
    });

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  return (
    <div ref={containerRef} className={Styles.Gethomedata}>
      <div className={Styles.Gethomedataparent}>
        <div className={Styles.boxone}>
          <div className={Styles.dataparagraph}>
            <h1 className={Styles.count}>{count}</h1>
            <p>
              Years of <br />
              Experience
            </p>
          </div>
        </div>

        <div className={Styles.boxone}>
          <div className={Styles.dataparagraph}>
            <h1 className={Styles.count}>{count2}+</h1>
            <p>
              Professional <br />
              Experts
            </p>
          </div>
        </div>

        <div className={Styles.boxone}>
          <div className={Styles.dataparagraph}>
            <h1 className={Styles.count}>{count3}+</h1>
            <p>
              Successful <br />
              Projects
            </p>
          </div>
        </div>

        <div className={Styles.boxone}>
          <div className={Styles.dataparagraph}>
            <h1 className={Styles.count}>{count4}+</h1>
            <p>
              Satisfied <br />
              Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gethomedata;
