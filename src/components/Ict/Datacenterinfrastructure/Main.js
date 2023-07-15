import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Data & Cyber Security </h1>
            <h1>Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                The Security Operations Centre (SOC) ensures round-the-clock
                monitoring and management of security incidents.
              </li>
              <li>
                Security Information & Event Management (SIEM) collects and
                analyzes security event data to detect and respond to threats.
              </li>
              <li>
                Endpoint & Network Security safeguards devices and networks from
                unauthorized access and malicious activities.
              </li>
              <li>
                Email Security & Data Leakage Prevention (DLP) protects
                sensitive information from being leaked or compromised.
              </li>
              <li>
                Privileged Access Management (PAM) controls and monitors
                privileged accounts and their access to critical systems.
              </li>
              <li>
                {" "}
                An Information Security Awareness Training Program educates
                employees about best practices and potential risks to enhance
                security awareness.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/01/img 1.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/01/img 2.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Email & Collaboration </h1>
            <h1>Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                A robust secure email solution ensures the confidentiality and
                integrity of email communications.
              </li>
              <li>
                Mobile device management enables secure access and management of
                devices used for email and collaboration.{" "}
              </li>
              <li>
                Spam and Phishing prevention services protect users from
                unwanted or malicious emails.
              </li>
              <li>
                {" "}
                Digital Signature Management ensures the authenticity and
                integrity of digital documents and communications.
              </li>
              <li>
                Video-enabled collaboration services facilitate real-time
                communication and collaboration among users.
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
            <h1>Data Centre </h1>
            <h1>Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>The Software Defined Data Centre (SDDC) offers a virtualized and software-defined infrastructure for increased agility and flexibility.
</li>
              <li>Virtualization & Consolidation of infrastructure optimizes resource utilization and reduces hardware requirements.
</li>
              <li> Hosting & Migration Services for systems and data ensure a smooth transition and availability of critical applications.
</li>
              <li>Vulnerability & Patch Management ensures that systems are up to date and protected against known vulnerabilities.
 </li>
              <li>The Network Operations Centre (NOC) monitors and manages network infrastructure for optimal performance and security.
 </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/01/img 3.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/01/img 4.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Concerning End User </h1>
            <h1>Computing Services</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>Virtual desktops allow users to access their desktop environment from anywhere and at any time securely.</li>
              <li>End-point security solutions protect user devices from malware, unauthorized access, and data breaches.
</li>
              <li>Unified communication and collaboration services integrate various communication channels for seamless collaboration.
</li>
              <li> IT Support Services with an online ticketing system enable efficient and timely resolution of user issues.
</li>
              <li>Integration with ITIL process and SLA ensures adherence to industry best practices and service level agreements. </li>
            </ul>
          </div>

          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
