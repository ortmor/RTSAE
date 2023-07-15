import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Phishing </h1>
            <h1>Attacks</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Attackers employ fraudulent emails, messages, or fake websites
                to trick individuals into divulging sensitive information.
              </li>
              <li>
                These attacks imitate trusted entities like banks or popular
                online services, leveraging social engineering techniques to
                deceive victims.
              </li>

              <li>
                Phishing emails aim to deceive recipients into providing
                personal information, such as login credentials or financial
                details.
              </li>

              <li>
                Attackers create counterfeit websites that closely resemble
                legitimate ones to trick users into sharing sensitive data or
                performing malicious actions.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/04/Phishing Attacks.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/04/Malware Infections.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Malware</h1>
            <h1>Infections</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Malware is malicious software designed to disrupt, damage, or
                gain unauthorized access to computer systems.
              </li>
              <li>
                Common types of malware include viruses, worms, Trojans,
                ransomware, and spyware.
              </li>
              <li>
                Malware can be spread through infected email attachments,
                malicious downloads, compromised websites, or removable media.
              </li>

              <li>
                Once installed, it can steal data, encrypt files, or enable
                unauthorized remote control of the affected system.
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
            <h1> Distributed Denial of Service</h1>
            <h1> (DDoS) Attacks</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                DDoS attacks aim to overwhelm a target system or network with an
                enormous volume of traffic, rendering it inaccessible to
                legitimate users.
              </li>
              <li>
                Attackers achieve this by utilizing a network of compromised
                computers (botnets) to flood the target with traffic or by
                exploiting vulnerabilities in network infrastructure.
              </li>
              <li>
                DDoS attacks can disrupt online services, leading to financial
                losses and reputational damage for organizations.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/04/Distributed Denial of Service.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/04/Data Breaches.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Data</h1>
            <h1> Breaches</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Data breaches occur when unauthorized individuals gain access to
                sensitive or confidential information.
              </li>
              <li>
                This can happen through various means, such as exploiting
                vulnerabilities in systems or applications, hacking into
                networks, or stealing physical devices like laptops or storage
                devices.
              </li>
              <li>
                Data breaches can result in the exposure of personal
                information, financial loss, legal repercussions, and damage to
                an organization's reputation.
              </li>
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
