"use client";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { TbMapPinFilled } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Styles from "../../styles/contact.module.scss";
import { Fragment, useRef } from "react";
import sendContactForm from "@/services/contactService";

const Contactmain = () => {
  const toastId = useRef(null);
  const fnameRef = useRef("");
  const lnameRef = useRef("");
  const typeRef = useRef("General");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isSuccess, message } = await sendContactForm({
      fname: fnameRef.current.value,
      lname: lnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      type: typeRef.current.value,
      message: messageRef.current.value,
    });
    if (isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      fnameRef.current.value = "";
      lnameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      typeRef.current.value = "General";
      messageRef.current.value = "";
    } else {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <Fragment>
      <ToastContainer />
      <div className={Styles.contactmainparentdiv}>
        <div className={Styles.contactmainboxtwo}>
          <div className={Styles.contactformparent}>
            <div className={Styles.contactformhead}>
              <h3>Form</h3>
            </div>

            <div className={Styles.contactform}>
              <label>Inquiry Type</label>
              <br />
              <select
                name="type"
                defaultValue="General"
                id="type"
                ref={typeRef}
              >
                <option value="General">General</option>
                <option value="Support">Support</option>
                <option value="IT Project">IT Project</option>
                <option value="ELV Projects">ELV Projects</option>
                <option value="Solution Enquiry">Solution Enquiry</option>
              </select>

              <div className={Styles.contactformfirstcontainer}>
                <div className={Styles.contactformboxone}>
                  <label>First Name</label>
                  <br />
                  <input name="fname" type="text" ref={fnameRef} required />
                </div>

                <div className={Styles.contactformboxone}>
                  <label>Last Name</label>
                  <br />
                  <input name="lname" type="text" ref={lnameRef} required />
                </div>
              </div>

              <div className={Styles.contactformfirstcontainer}>
                <div className={Styles.contactformboxone}>
                  <label>Email Address</label>
                  <br />
                  <input name="email" type="email" ref={emailRef} required />
                </div>

                <div className={Styles.contactformboxone}>
                  <label>Phone</label>
                  <br />
                  <input name="phone" defaultValue="+971"   type="tel" ref={phoneRef} required />
                </div>
              </div>

              <textarea name="message" ref={messageRef} />
              <br />
              <button onClick={handleSubmit}>Send Message</button>
            </div>
          </div>
        </div>

        <div className={Styles.contactmainboxone}>
          <div className={Styles.contactmainboxoneheading}>
            <h1>Get in touch with us</h1>
            <p>Still up in the air? Give us a call!</p>
          </div>

          <div className={Styles.contactmainboxlinkcontainer}>
            <Link style={{ textDecoration: "none" }} href="mailto:info@rts.ae">
              <div className={Styles.contactmainboxlinkspace}>
                <MdEmail
                  className={Styles.contactmainboxlinkpic}
                  color="#fff"
                  size="1em"
                />{" "}
                <span className={Styles.spantext}>info@rts.ae</span>
                <div className={Styles.hiddenpara}>
                  <p>info@rts.ae</p>
                </div>
              </div>
            </Link>

            <Link style={{ textDecoration: "none" }} href="tel:+02-8111333">
              <div className={Styles.contactmainboxlinkspace}>
                <MdPhone
                  className={Styles.contactmainboxlinkpic}
                  color="#fff"
                  size="1em"
                />{" "}
                <span className={Styles.spantext}>02-8111333</span>
                <div className={Styles.hiddenpara}>
                  <p>02-8111333</p>
                </div>
              </div>
            </Link>

            <div className={Styles.contactmainboxlinkspace}>
              <TbMapPinFilled
                className={Styles.contactmainboxlinkpic}
                color="#fff"
                size="1em"
              />{" "}
              <span className={Styles.spantext}>
                Royal Group Building, P.O 112847,Abu Dhabi, UAE
              </span>
              <div className={Styles.hiddenpara}>
                <p>Royal Group Building,</p>
                <p> P.O 112847,Abu Dhabi, UAE</p>
              </div>
            </div>
          </div>

          <div className={Styles.contactmainboxlinkcontainerone}>
            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Frts_ae">
                <FaTwitter
                  className={Styles.contactmainboxlinkpicone}
                  color="#999999"
                  size="2em"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="https://www.linkedin.com/company/royal-technology-solutions">
                <FaLinkedinIn
                  className={Styles.contactmainboxlinkpicone}
                  color="#999999"
                  size="2em"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="/">
                <FaInstagram
                  className={Styles.contactmainboxlinkpicone}
                  color="#999999"
                  size="2em"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="https://www.facebook.com/RTSUAE/">
                <FaFacebookF
                  className={Styles.contactmainboxlinkpicone}
                  color="#999999"
                  size="2em"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="/">
                <FaYoutube
                  className={Styles.contactmainboxlinkpicone}
                  color="#999999"
                  size="2em"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.mapcontainermain}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.5973658025514!2d54.46135621499433!3d24.430051684258682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4244f796919b%3A0x55796374d17aa3d4!2sRoyal%20Group!5e0!3m2!1sen!2sin!4v1687456295987!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Contactmain;
