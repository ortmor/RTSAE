import React from "react";
import Styles from "../../../styles/solutioninner.module.scss";

const Footerheading = () => {
  return (
    <div className={Styles.innersolutionfooterlandingheadingparent}>
      <div className={Styles.innersolutionfooterlandingparentmain}>
        <div className={Styles.innersolutionfooterlandingparenthead}>
          <h1>
            Building a Strong Network Infrastructure
            <br />
            Wired vs. Wireless Networks
          </h1>
        </div>

        <div className={Styles.innersolutionfooterlandingparentheadparagraph}>
          <p>
            Wired and wireless network infrastructure are two fundamental types
            of computer networks that are essential for businesses to
            communicate and collaborate effectively. Wired networks use cables
            to connect devices to an interface card and a network switch or
            router. This type of network is known for its reliability and speed,
            making it ideal for businesses that require a dedicated connection
            for data transmission.{" "}
          </p>

          <br />
          <p>
            However, it can be more challenging to install and maintain, and it
            lacks the flexibility of wireless networks. Wireless networks, on
            the other hand, use radio waves to transmit data over the air
            between devices. They provide greater flexibility and mobility,
            allowing devices to connect to the network without the need for
            physical cables. However, they can be slower and less reliable,
            especially in areas with poor signal strength.
          </p>
          <br />
          <p>
            At our RTS, we understand the importance of having a strong network
            infrastructure for your business. That's why we offer a range of
            wired and wireless network solutions to meet your specific needs.
            Whether you need a fast and reliable wired network or a flexible and
            mobile wireless network, we have the expertise and experience to
            help you build a network infrastructure that works for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footerheading;
