import { Fragment } from "react";
import Styles from "../../../styles/solutioninner.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.innersolutionhomemainparentdiv}>
        <div className={Styles.innersolutionhomemainboxone}>
          <div className={Styles.innersolutionhomemainboxoneheading}>
            <h1>Business</h1>
            <h1> Solutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                {" "}
                Financial & Asset Management: Streamline financial processes,
                track assets, and optimize resource allocation for improved
                financial performance.
              </li>
              <li>
                Human Capital Management: Efficiently manage workforce-related
                processes, such as recruitment, employee development, payroll,
                and performance evaluation.
              </li>
              <li>
                Supply Chain Management: Optimize supply chain operations,
                including procurement, inventory management, logistics, and
                demand planning, to ensure efficient and cost-effective delivery
                of goods and services.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/01/Financial & Asset Management.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/digitaltransformation/01/03.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Stakeholder </h1>
            <h1> Management System</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Customer Relationship Management (CRM): Centralize customer
                data, track interactions, and improve customer engagement and
                satisfaction.
              </li>
              <li>
                Data Analytics & Reporting: Gain insights from data to enhance
                decision-making, identify trends, and improve customer
                experiences and business strategies.
              </li>
              <li>
                Vendor Management System: Streamline vendor relationships,
                manage contracts, track performance, and ensure compliance for
                efficient supplier management.
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
            <h1> Operational</h1>
            <h1> Solutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Procurement & Inventory: Automate procurement processes,
                optimize inventory levels, and ensure timely availability of
                goods and materials.
              </li>
              <li>
                {" "}
                Projects Management: Plan, monitor, and control projects to
                ensure successful delivery within timelines and budgets.
              </li>
              <li>
                Enterprise Performance Management: Align business goals, monitor
                performance metrics, and implement strategies to improve overall
                organizational performance.
              </li>
            </ul>
          </div>
          <br />
          <Link href="/contact">Let’s Talk</Link>
        </div>

        <div className={Styles.innersolutionhomemainboxtwo}>
          <img src="/digitaltransformation/01/01.webp"></img>
          <div className={Styles.innersolutionhomemainboxtwoimg}></div>
        </div>
      </div>

      <div className={Styles.innersolutionhomemainparentdivthree}>
        <div className={Styles.innersolutionhomemainboxthree}>
          <img src="/digitaltransformation/01/02.webp"></img>
          <div className={Styles.innersolutionhomemainboxthreeimg}></div>
        </div>

        <div className={Styles.innersolutionhomemainboxthree}>
          <div className={Styles.innersolutionhomemainboxthreeheading}>
            <h1> Specialised </h1>
            <h1>Solutions</h1>
          </div>

          <div className={Styles.innersolutionpointsmain}>
            <ul>
              <li>
                Business Intelligence Solution: Utilize data visualization,
                reporting tools, and analytics to gain actionable insights and
                make informed business decisions.
              </li>
              <li>
                Retail and POS Solution: Streamline retail operations, manage
                point-of-sale transactions, inventory, and customer data for
                enhanced customer experiences.
              </li>
              <li>
                Legal Case Management: Digitize and streamline legal processes,
                manage cases, and track legal documents for improved efficiency
                and compliance.
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
