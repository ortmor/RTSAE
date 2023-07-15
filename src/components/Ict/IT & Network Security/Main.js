import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Network Design </h1>
            <h1>and Implementation</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Our team of expert network engineers collaborates closely with
                you to design and implement a customized network infrastructure
                tailored to your specific requirements.
              </li>
              <li>
                We analyze your business needs and assess your current network
                setup to create a scalable and future-proof solution that
                ensures seamless connectivity and high performance.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/03/Network Design and Implementation.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/03/Network Optimization and Wireless Networking.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Network </h1>
            <h1>Security</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Protecting your data and network from cyber threats is our top
                priority.
              </li>
              <li>
                Our comprehensive network security solutions include firewalls,
                intrusion detection systems, secure remote access, and robust
                encryption protocols.
              </li>
              <li>
                We proactively monitor your network for vulnerabilities, detect
                and mitigate potential risks, and implement robust security
                measures to safeguard your sensitive information.
              </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Network Optimization</h1>
            <h1> and Wireless Networking</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                If your network is experiencing performance issues, our network
                optimization services can help.
              </li>
              <li>
                We conduct thorough network assessments, analyze traffic
                patterns, and optimize your network infrastructure to deliver
                faster speeds, reduced latency, and improved reliability.
              </li>
              <li>
                In the era of mobile devices and remote work, we specialize in
                designing and implementing secure and high-performance wireless
                networks.
              </li>

              <li>
                Our solutions provide seamless connectivity, robust coverage,
                and scalability, supporting the latest wireless standards and
                technologies.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/03/Network Security.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

    
    </Fragment>
  );
};

export default Main;
