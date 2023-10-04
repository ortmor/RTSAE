"use client";
import React, { useState, useEffect } from "react";
// import { MdLanguage } from "react-icons/md";
import Link from "next/link";
function Nav() {
  const [Navbackground, setNavbackground] = useState(false);
  const [Navtoggle, setNavtoggle] = useState("nav-links1");
  const [display1, setdisplay1] = useState(true);
  const [display2, setdisplay2] = useState(true);

  const Adding = () => {
    setNavtoggle("nav-links1");
    setdisplay1(true);
    setdisplay2(false);
  };

  const Removing = () => {
    setNavtoggle("nav-links2");
    setdisplay1(false);
    setdisplay2(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const changeNavbackground = () => {
        if (window.scrollY >= 80) {
          setNavbackground(true);
        } else {
          setNavbackground(false);
        }
      };
      window.addEventListener("scroll", changeNavbackground);
    }
  }, []);

  return (
    <div className="navcontainer">
      <nav className={Navbackground ? "navcolor" : "navbar"}>
        <div className="wrapper" id={Navbackground ? "line" : "line1"}>
          <div className={Navbackground ? "logo1" : "logo"}>
            <Link href="/">
              <img
                src={Navbackground ? "/logo.png" : "/logo.png"}
                alt="logo.png"
              />
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className={Navtoggle}>
            <label htmlFor="close-btn" className="btn close-btn">
              {display1 ? (
                <i onClick={Removing} className="fas fa-times"></i>
              ) : (
                ""
              )}
            </label>
            <li>
              <Link className="link-show-grad" onClick={Removing} href="/about">
                ABOUT US
              </Link>
            </li>

            <li>
              <Link href="#" className="desktop-item link-show-grad">
                SOLUTIONS <i className="fas fa-caret-down"></i>
              </Link>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item link-show-grad">
                SOLUTIONS <i className="fas fa-caret-down"></i>
              </label>

              <div className="mega-box">
                <div
                  className={Navbackground ? "content" : "content  margin-box1"}
                >
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <Link onClick={Removing} href="/ictsolutions">
                          ICT SOLUTIONS
                        </Link>
                      </li>

                      <li>
                        <Link onClick={Removing} href="/digitaltransformation">
                          DIGITAL TRANSFORMATION
                        </Link>
                      </li>

                      <li>
                        <Link onClick={Removing} href="/elvsolutions">
                          ELV SOLUTIONS
                        </Link>
                      </li>

                      <li>
                        <Link onClick={Removing} href="/audiovisualsolutions">
                          AUDIO VISUAL SOLUTIONS
                        </Link>
                      </li>

                      <li>
                        <Link onClick={Removing} href="/datacentersolutions">
                          DATA CENTRE SOLUTIONS
                        </Link>
                      </li>

                      <li>
                        <Link onClick={Removing} href="/apcturnkeyprojects">
                          APC TURNKEY PROJECTS
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                className="link-show-grad"
                onClick={Removing}
                href="/services&support"
              >
                SERVICES & SUPPORT
              </Link>
            </li>

            <li>
              <Link
                className="link-show-grad"
                onClick={Removing}
                href="/insights"
              >
                INSIGHT
              </Link>
            </li>

            <li>
              <Link
                className="link-show-grad"
                onClick={Removing}
                href="/career"
              >
                CAREERS
              </Link>
            </li>

            <li>
              <Link
                id="contactbox"
                className="link-show-grad"
                onClick={Removing}
                href="/contact"
              >
                CONTACT
              </Link>
            </li>
            {/* lang */}
            {/* <li>
              <Link
                className="link-show-grad"
                onClick={Removing}
                href="https://rtsaearabic.netlify.app/"
              >
                <MdLanguage style={{transform: 'translateY(0.3rem)'}}  size={"1em"} />{" "}
                <span style={{ fontSize: "1.5em" }}>عربي</span>
              </Link>
            </li> */}
          </ul>

          <label htmlFor="menu-btn" className="btn menu-btn">
            {display2 ? <i onClick={Adding} className="fas fa-bars"></i> : ""}
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

// import React, { useState, useEffect } from "react";
// import Link from "next/link";

// function Nav() {
//   const [Navbackground, setNavbackground] = useState(false);
//   const [Navtoggle, setNavtoggle] = useState("nav-links1");
//   const [display1, setdisplay1] = useState(true);
//   const [display2, setdisplay2] = useState(true);

//   const Adding = () => {
//     setNavtoggle("nav-links1");
//     setdisplay1(true);
//     setdisplay2(false);
//   };

//   const Removing = () => {
//     setNavtoggle("nav-links2");
//     setdisplay1(false);
//     setdisplay2(true);
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const changeNavbackground = () => {
//         if (window.scrollY >= 80) {
//           setNavbackground(true);
//         } else {
//           setNavbackground(false);
//         }
//       };
//       window.addEventListener("scroll", changeNavbackground);
//     }
//   }, []);

//   useEffect(() => {
//     const handleLinkClick = (e) => {
//       // Change the color of the clicked link to red
//       const links = document.querySelectorAll(".link-show-grad");
//       links.forEach((link) => {
//         link.classList.remove("active");
//       });
//       e.target.classList.add("active");

//       // Store the active link in localStorage
//       localStorage.setItem("activeLink", e.target.href);
//     };

//     const activeLink = localStorage.getItem("activeLink");
//     if (activeLink) {
//       const links = document.querySelectorAll(".link-show-grad");
//       links.forEach((link) => {
//         if (link.href === activeLink) {
//           link.classList.add("active");
//         }
//       });
//     }

//     const links = document.querySelectorAll(".link-show-grad");
//     links.forEach((link) => {
//       link.addEventListener("click", handleLinkClick);
//     });

//     return () => {
//       // Clean up the event listeners on component unmount
//       links.forEach((link) => {
//         link.removeEventListener("click", handleLinkClick);
//       });
//     };
//   }, []);

//   return (
//     <div className="navcontainer">
//       <nav className={Navbackground ? "navcolor" : "navbar"}>
//         <div className="wrapper" id={Navbackground ? "line" : "line1"}>
//           <div className={Navbackground ? "logo1" : "logo"}>
//             <Link className="link-show-grad" onClick={Removing} href="/">
//               <img
//                 src={Navbackground ? "/logo.png" : "/logo.png"}
//                 alt="logo.png"
//               />
//             </Link>
//           </div>
//           <input type="radio" name="slider" id="menu-btn" />
//           <input type="radio" name="slider" id="close-btn" />
//           <ul className={Navtoggle}>
//             <label htmlFor="close-btn" className="btn close-btn">
//               {display1 ? (
//                 <i onClick={Removing} className="fas fa-times"></i>
//               ) : (
//                 ""
//               )}
//             </label>
//             <li>
//               <Link className="link-show-grad" onClick={Removing} href="/about">
//                 ABOUT US
//               </Link>
//             </li>

//             <li>
//               <Link className="link-show-grad" onClick={Removing} href="#">
//                 SOLUTIONS <i className="fas fa-caret-down"></i>
//               </Link>
//               <input type="checkbox" id="showMega" />
//               <label htmlFor="showMega" className="mobile-item link-show-grad">
//                 SOLUTIONS <i className="fas fa-caret-down"></i>
//               </label>

//               <div className="mega-box">
//                 <div
//                   className={Navbackground ? "content" : "content  margin-box1"}
//                 >
//                   <div className="row">
//                     <ul className="mega-links">
//                       <li>
//                         <Link onClick={Removing} href="/comingsoon">
//                           ICT SOLUTIONS
//                         </Link>
//                       </li>
//                       <li>
//                         <Link onClick={Removing} href="/comingsoon">
//                           DIGITAL TRANSFORMATION
//                         </Link>
//                       </li>
//                       <li>
//                         <Link onClick={Removing} href="/comingsoon">
//                           ELV SOLUTIONS
//                         </Link>
//                       </li>
//                       <li>
//                         <Link onClick={Removing} href="/comingsoon">
//                           AUDION VISUAL SOLUTIONS
//                         </Link>
//                       </li>
//                       <li>
//                         <Link onClick={Removing} href="/comingsoon">
//                           DATA CENTRE SOLUTIONS
//                         </Link>
//                       </li>
//                       <li>
//                         <Link onClick={Removing} href="/comingsoon">
//                           EPC TURNKEY PROJECTS
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </li>

//             <li>
//               <Link
//                 className="link-show-grad"
//                 onClick={Removing}
//                 href="/services&support"
//               >
//                 SERVICES & SUPPORT
//               </Link>
//             </li>

//             <li>
//               <Link
//                 className="link-show-grad"
//                 onClick={Removing}
//                 href="/insights"
//               >
//                 INSIGHT
//               </Link>
//             </li>

//             <li>
//               <Link
//                 className="link-show-grad"
//                 onClick={Removing}
//                 href="/careers"
//               >
//                 CAREERS
//               </Link>
//             </li>

//             <li>
//               <Link className="link-show-grad" id="contactbox" onClick={Removing} href="/contact">
//                 CONTACT
//               </Link>
//             </li>
//           </ul>

//           <label htmlFor="menu-btn" className="btn menu-btn">
//             {display2 ? <i onClick={Adding} className="fas fa-bars"></i> : ""}
//           </label>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Nav;
