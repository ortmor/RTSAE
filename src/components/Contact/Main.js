"use client";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { TbMapPinFilled } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Styles from "../../styles/contact.module.scss";
import { Fragment, useRef, useState } from "react";
import sendContactForm from "@/services/contactService";

const CONTACT_CAPTCHA_SITEKEY = process.env.CONTACT_CAPTCHA_SITEKEY;

const Contactmain = () => {
  const toastId = useRef(null);
  const fnameRef = useRef("");
  const lnameRef = useRef("");
  const typeRef = useRef("SalesEnquiries");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const messageRef = useRef("");
  const [loading, setloading] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaResponse, setCaptchaResponse] = useState("");

  const handleCaptchaVerify = (response) => {
    setIsCaptchaVerified(true);
    setCaptchaResponse(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    if (isCaptchaVerified) {
      const { isSuccess, message } = await sendContactForm({
        fname: fnameRef.current.value,
        lname: lnameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        type: typeRef.current.value,
        message: messageRef.current.value,
        "g-recaptcha-response": captchaResponse,
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
        typeRef.current.value = "SalesEnquiries";
        messageRef.current.value = "";

        setloading(false);
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

        setloading(false);
      }
    } else {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please verify the reCAPTCHA.", {
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

      setloading(false);
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
                defaultValue="SalesEnquiries"
                id="type"
                ref={typeRef}
              >
                <option value="SalesEnquiries">Sales Enquiries</option>
                <option value="SupportServices">Support Services</option>
                {/* <option value="IT Project">IT Project</option>
                <option value="ELV Projects">ELV Projects</option>
                <option value="Solution Enquiry">Solution Enquiry</option> */}
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
                  <input name="phone" type="tel" ref={phoneRef} required />
                </div>
              </div>
              <textarea name="message" ref={messageRef} />
              <br />
              <div>
                <ReCAPTCHA
                  sitekey={CONTACT_CAPTCHA_SITEKEY}
                  onChange={handleCaptchaVerify}
                />
              </div>
              <br />{" "}
              {loading ? (
                <button className={Styles.loadingbutton}>
                  Sending &nbsp;
                  <span className={Styles.sendinganimationdot1}></span>
                  <span className={Styles.sendinganimationdot2}></span>
                  <span className={Styles.sendinganimationdot3}></span>
                  <span className={Styles.sendinganimationdot4}></span>
                </button>
              ) : (
                <button onClick={handleSubmit}>Send Message</button>
              )}
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

            <Link style={{ textDecoration: "none" }} href="tel:+97102-8111333">
              <div className={Styles.contactmainboxlinkspace}>
                <MdPhone
                  className={Styles.contactmainboxlinkpic}
                  color="#fff"
                  size="1em"
                />{" "}
                <span className={Styles.spantext}>+971 02-8111333</span>
                <div className={Styles.hiddenpara}>
                  <p>+971 02-8111333</p>
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
                <img
                  className={Styles.dynamiccontacticon}
                  src="/contact/tw.png"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="https://www.linkedin.com/company/royal-technology-solutions">
                <img
                  className={Styles.dynamiccontacticon}
                  src="/contact/in.png"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="/">
                <img
                  className={Styles.dynamiccontacticon}
                  src="/contact/insta.png"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="https://www.facebook.com/RTSUAE/">
                <img
                  className={Styles.dynamiccontacticon}
                  src="/contact/fb.png"
                />
              </Link>
            </div>

            <div className={Styles.contactmainboxlinkspaceone}>
              <Link href="/">
                <img
                  className={Styles.dynamiccontacticon}
                  src="/contact/yt.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.mapcontainermain}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.6000386098017!2d54.46101457535716!3d24.429958878212783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e43a3385e703b%3A0x1693598d06e6860d!2sRoyal%20Technology%20Solutions%20LLC!5e0!3m2!1sen!2sin!4v1692254598436!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default Contactmain;
