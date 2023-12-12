"use client";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Styles from "../styles/footer.module.scss";

const Subscribe = () => {
  const ApiPoint = process.env.API_KEY;
  const emailRef = useRef("");

  const toastId = useRef(null);

  const handleSubmitForSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(ApiPoint + "/subscriber", {
        email: emailRef.current.value,
        source: "English",
      });

      const { success, message } = response.data;

      if (success) {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.success(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        localStorage.setItem("subscribedEmail", emailRef.current.value);
        emailRef.current.value = "";
      } else {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error(message, {
            position: "bottom-right",
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
    } catch (error) {
      console.error("Error submitting subscription:", error.message);
    }
  };

  return (
    <div className={Styles.subscribemaincontainer}>
      <ToastContainer />
      <div className={Styles.subscribeparent}>
        <div className={Styles.subchildone}>
          <h1>Don't miss </h1>
          <h1>our hottest news!</h1>
          <p>
            Enter your email to receive a round-up of the most
            <br /> hottest news
          </p>
        </div>

        <div className={Styles.subchildtwo}>
          <form autoComplete="off">
            <input
              id={Styles.inputbutton1}
              type="email"
              placeholder="Your email goes here"
              ref={emailRef}
              required
            />
            <input
              id={Styles.inputbutton2}
              type="button"
              value="Subscribe"
              onClick={handleSubmitForSubscribe}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
