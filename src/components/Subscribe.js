"use client";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Styles from "../styles/footer.module.scss";
import { doSubscribe, doUnsubscribe } from "@/services/subscriptionService";


const Subscribe = () => {
  const emailRef = useRef("");


  const toastId = useRef(null);

  const handleSubmitForSubscribe = async (e) => {
    e.preventDefault();
    const { isSuccess, message } = await doSubscribe(emailRef.current.value);
    if (isSuccess) {
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
  };

  const handleSubmitForUnsubscribe = async (e) => {
    e.preventDefault();
    const { isSuccess, message } = await doUnsubscribe(emailRef.current.value);
    if (isSuccess) {
      alert(message);
      localStorage.removeItem("subscribedEmail");
      emailRef.current.value = "";
    } else {
      alert(message);
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
              onClick={() => window.location.assign("/comingsoon")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
