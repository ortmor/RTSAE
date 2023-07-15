import Link from "next/link";
import Styles from "../../styles/home.module.scss";

const Getthesupport = () => {
  return (
    <div className={Styles.getsupporthome}>
      <div className={Styles.getsupportparent}>
        <div className={Styles.getsupportboxone}>
          <img src="/home/support.png" />
        </div>

        <div className={Styles.getsupportboxtwo}>
          <p>
            <span>Get the</span> support you need with our expert team
          </p>
        </div>

        <div className={Styles.getsupportboxthree}>
          <div>
            <Link href="/services&support#main">
              <img src="/home/solutiondesign.png" />
              <h2>Solution Design & Professional Services</h2>
              <p>
                At RTS, we prioritize understanding your business and keeping a
                pulse on your direct competitors. Our commitment is to fulfill
                your management's requests and deliver top-notch IT solutions
                and expertise throughout the project duration…
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className={Styles.getsupportspace}></div>

      <div className={Styles.getsupportparent}>
        <div className={Styles.getsupportboxthree}>
          <Link href="/services&support#supportandmaintenance">
            <div>
              <img src="/home/support_1.png" />
              <h2>Support & Maintenance</h2>
              <p>Still up in the air on our technology and solution?…</p>
            </div>
          </Link>
        </div>

        <div className={Styles.getsupportboxthree}>
          <div>
            <Link href="/services&support#managedservices">
              <img src="/home/managed.png" />
              <h2>Managed Services</h2>
              <p>
                At our company, we prioritize delivering the best possible
                experience to our business partners, regardless of their
                location or bandwidth limitations. We have a clear vision of
                what IT Services Management should entail, and we leverage our
                expertise to create a platform that is easy to use, maintain,
                manage, and operate…
              </p>
            </Link>
          </div>
        </div>

        <div className={Styles.getsupportboxthree}>
          <div>
            <Link href="/services&support#projectmanagement">
              <img src="/home/project.png" />
              <h2>Project Management</h2>
              <p>
                At Royal Technology Solutions, our mission is to empower our
                clients in achieving their strategic business goals by
                harnessing the power of infrastructure technologies. We are
                dedicated to delivering exceptional value by understanding and
                surpassing customer expectations. As part of our commitment, we
                employ the discipline of Applied Project Management to ensure
                optimal outcomes…
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getthesupport;
