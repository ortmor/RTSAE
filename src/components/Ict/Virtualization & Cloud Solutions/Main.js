import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Datacenter </h1>
            <h1>Virtualization</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                By consolidating servers and maximizing resource utilization,
                organizations can reduce hardware costs and improve overall
                efficiency.
              </li>
              <li>
                Datacenter virtualization enables scalability, allowing
                businesses to easily scale their infrastructure as needed
                without significant disruptions.
              </li>
              <li>
                With virtualization, companies can achieve cost savings by
                reducing power consumption, cooling requirements, and physical
                space needed for servers.
              </li>
              <li>
                {" "}
                Application deployment and management become simpler with
                datacenter virtualization, as virtual machines can be easily
                created, replicated, and managed.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/02/Datacenter Virtualization.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/02/Virtual Desktop Infrastructure.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Virtual Desktop </h1>
            <h1>Infrastructure (VDI)</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Implementing VDI streamlines desktop management by centralizing
                control and administration of virtual desktops.
              </li>
              <li>
                VDI empowers remote access, allowing users to securely access
                their desktops from any device and location, enhancing
                flexibility and productivity.
              </li>
              <li>
                By using VDI, organizations can improve software updates and
                data security by centrally managing patches and security
                measures.
              </li>
              <li>
                The user experience is enhanced through VDI, as it provides
                consistent performance regardless of the user's device or
                location.
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
            <h1>Software-Defined</h1>
            <h1> Storage</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Software-defined storage optimizes storage infrastructure by
                using intelligent software control to manage and allocate
                storage resources efficiently.
              </li>
              <li>
                Scalability is achieved with software-defined storage, enabling
                organizations to easily expand their storage capacity as needed.
              </li>
              <li>
                By optimizing storage utilization and reducing reliance on
                physical hardware, organizations can achieve cost reductions
                with software-defined storage.
              </li>
              <li>
                Business requirements and storage needs can be easily adapted to
                with software-defined storage, providing flexibility and
                agility.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/02/Software-Defined Storage.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/02/Software Defined Networking & Security.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>Software Defined </h1>
            <h1>Networking & Security</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Software-defined networking (SDN) transforms network
                infrastructure by centralizing control and management, allowing
                for easier configuration and automation.
              </li>
              <li>
                SDN increases automation and agility, enabling organizations to
                quickly respond to changing network demands and reduce manual
                configuration tasks.
              </li>
              <li>
                Network security is enhanced through SDN, as access control
                policies can be centrally managed and implemented across the
                network.
              </li>

              <li>
                {" "}
                Threat prevention measures can be integrated into the SDN
                architecture, providing proactive protection against network
                attacks and vulnerabilities.
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
            <h1>Disaster </h1>
            <h1> Recovery</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Organizations can safeguard critical data and applications
                through disaster recovery strategies, ensuring that they are
                protected in the event of system failures or disasters.
              </li>
              <li>
                Disaster recovery plans ensure business continuity by minimizing
                downtime and allowing for rapid recovery and restoration of
                essential services.
              </li>
              <li>
                Backup and recovery strategies can be tailored to meet the
                specific needs of an organization, considering factors such as
                recovery time objectives and data retention requirements.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/ict/02/Disaster Recovery.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/ict/02/L4-7 Load Balancing Solution.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1>L4-7 Load </h1>
            <h1>Balancing Solution</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Implementing an L4-7 load balancing solution improves
                application performance by distributing traffic evenly across
                multiple servers, preventing overloading and optimizing resource
                utilization.
              </li>
              <li>
                Availability is enhanced with load balancing, as it ensures that
                traffic is automatically redirected to available servers in the
                event of a server failure.
              </li>
              <li>
                Integrated web application firewalls (WAF) protect against web
                attacks, filtering out malicious traffic and ensuring the
                security of applications.
              </li>
              <li>
                Load balancing allows organizations to scale their
                infrastructure and balance server loads, providing users with an
                optimal experience by avoiding bottlenecks and improving
                response times.
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
