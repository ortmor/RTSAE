"use client";
import React from "react";
import Subscribe from "./Subscribe";
import Styles from "../styles/footer.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpShort } from "react-icons/bs";

import Link from "next/link";

function Footer() {
  const Handlescroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={Styles.mainfootercontainer}>
      <div className={Styles.bottomscrollarrowcontainer}>
        <button onClick={Handlescroll}>
          <BsArrowUpShort size="30px" />
        </button>
      </div>
      <Subscribe />

      <div className={Styles.main_footer}>
        <div className={Styles.top_container}>
          <h1 className={Styles.tophead}>
            Enhance your <br />
            digital business
          </h1>

          <div className={Styles.buttondown}>
            <span className={Styles.buttonletstalk}>
              <Link href="/contact">LET’S TALK </Link>
            </span>

            <span className={Styles.buttonletstalkor}>or</span>
            <span className={Styles.buttonletstalklink}>
              <Link href="mailto:info@rts.ae">info@rts.ae</Link>
            </span>
          </div>
          <br />
        </div>

        <div className={Styles.middle_container}>
          <h1>Head Office</h1>

          <div>
            <p>
              Ministries Complex, <br />
              Royal Group Building, 1st Floor
              <br />
              P.O.Box 112847, Abu Dhabi, UAE
              <br />
              Tel: <span>02-8111333</span> / <span> 02-8111345</span>
            </p>
          </div>

          <div className={Styles.linkiconcontainer}>
            <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Frts_ae">
              <FaTwitter size="1em" />
            </Link>

            <Link href="https://www.linkedin.com/company/royal-technology-solutions">
              <FaLinkedinIn size="1em" />
            </Link>

            <Link href="/">
              <FaInstagram size="1em" />
            </Link>

            <Link href="https://www.facebook.com/RTSUAE/">
              <FaFacebookF size="1em" />
            </Link>

            <Link href="/">
              <FaYoutube size="1em" />
            </Link>
          </div>
        </div>

        <div className={Styles.last_container}>
          <h1>Quick Link</h1>
          <div className={Styles.linkcontainer}>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/career">CAREER</Link>
            <Link href="/services&support">SERVICES</Link>
            <Link href="/insights"> INSIGHTS</Link>
          </div>
          <p className={Styles.footercredit}>
            © 2023. All rights reserved @ Royal Technology Solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
