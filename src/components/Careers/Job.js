"use client";
import Swal from "sweetalert2";
import Link from "next/link";
import Styles from "../../styles/careers.module.scss";

const Job = () => {
  const Boxone = () => {
    Swal.fire({
      html: `
      <div>
      <img
      style="object-fit: contain;"
        width='100%'
        height='500px'
        src="/jobs/AM.jpg"
      ></img>
      <a style="display: inline-block;
          background-color: #d33;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;"
   href="/jobs/AM.jpg"
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

  const Boxtwo = () => {
    Swal.fire({
      html: `
      <div>
      <img
      style="object-fit: contain;"
        width='100%'
        height='500px'
        src="/jobs/RTSJob0723.png"
      ></img>
      <a style="display: inline-block;
          background-color: #d33;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;"
   href="/jobs/RTSJob0723.png"
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

  const Boxthree = () => {
    Swal.fire({
      html: `
      <div>
      <img
      style="object-fit: contain;"
        width='100%'
        height='500px'
        src="/jobs/PS.jpg"
      ></img>
      <a style="display: inline-block;
          background-color: #d33;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;"
   href="/jobs/PS.jpg"
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

  const Boxfour = () => {
    Swal.fire({
      html: `
      <div>
      <img
      style="object-fit: contain;"
        width='100%'
        height='500px'
        src="/jobs/RTSJob0723a.png"
      ></img>
      <a style="display: inline-block;
          background-color: #d33;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;"
   href="/jobs/RTSJob0723a.png"
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

  const Boxfive = () => {
    Swal.fire({
      html: `
      <div>
      <img
      style="object-fit: contain;"
        width='100%'
        height='500px'
        src="/jobs/NSE.png"
      ></img>
      <a style="display: inline-block;
          background-color: #d33;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;"
   href="/jobs/NSE.png"
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

  const Boxsix = () => {
    Swal.fire({
      html: `
      <div>
      <img
      style="object-fit: contain;"
        width='100%'
        height='500px'
        src="/jobs/AVE.png"
      ></img>
      <a style="display: inline-block;
          background-color: #d33;
          color: #fff;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;"
   href="/jobs/AVE.png"
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
        <div onClick={Boxone} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Sales Account Manager -IT</h2>
              </div>

              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>

          <h5 className={Styles.linka}>View & Apply</h5>
        </div>

        <div onClick={Boxtwo} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Security Operation Manager</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxtwo} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Network  Architect</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxtwo} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Sr Governance Consultant (BCP/Risk/ISO)</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>

          <h5 className={Styles.linka}>View & Apply</h5>
        </div>

        <div onClick={Boxtwo} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Service Delivery Manager</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxthree} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Sr Presales/Solution Architects- Cyber Security</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxthree} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Sr Presales/Solution Architects- Server & Storage</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxthree} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Sr Presales/Solution Architects- Network & Security</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxfour} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Data Center Supervisior</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxfive} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Network Security Engineer</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxfive} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>Pre-Sales Engineer (Network and Security)</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>

        <div onClick={Boxsix} className={Styles.careersmanagedservicesbox}>
          <div className={Styles.careersmanagedservicescontentmain}>
            <div className={Styles.careersmanagedservicescontentmainboxmain}>
              <div
                className={
                  Styles.careersmanagedservicescontentmainboxmainparagraph
                }
              >
                <h2>AV Engineer</h2>
              </div>
              <button>FULL TIME </button>
            </div>

            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
          <h5 className={Styles.linka}>View & Apply</h5>{" "}
        </div>
      </div>

      <div className={Styles.viewmorecontainer}>
        <Link href="/comingsoon">View more</Link>
      </div>
    </div>
  );
};

export default Job;
