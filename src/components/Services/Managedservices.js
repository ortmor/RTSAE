"use client";
import Swal from "sweetalert2";
import Styles from "../../styles/services.module.scss";

const Managedservice = () => {
  const Boxone = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/service_desk.png" />
      <br />
      <br />
       <p style="color:#999999">At our RTS, we offer a comprehensive Service Desk that ensures your organization receives unwavering support for all your IT requirements, available 24/7.  Our dedicated team is committed to providing round-the-clock assistance, so you can rely on us at any time, day or night. With our Service Desk 24/7, you can rest assured that your business will never face an IT hurdle alone. Our experts are equipped with the knowledge and experience to handle a wide range of technical challenges, ensuring minimal disruption to your operations. 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
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
       <br />
       <img src="/services/service/it_strategy.png" />
       <br />
       <br />
       <p style="color:#999999">
       Unlock the full potential of your workforce and stay ahead of the competition with our Digital Workspace solutions. With years of experience and a passion for innovation, Royal Technology Solutions is your go-to partner for embracing the future of work. Our expert team will guide you through the seamless integration of Digital Workspace solutions, ensuring a smooth transition and maximum ROI.

       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
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
       <br />
       <img src="/services/service/security.png" />
       <br />
       <br />
       <p style="color:#999999">
       Elevate your brand's security posture to new heights with our advanced and comprehensive security solutions. Our state-of-the-art system incorporates multiple layers of robust and cutting-edge security features, designed to shield your organization from ever-evolving threats. With our built-in defenses, you can confidently safeguard your valuable assets, customer data, and intellectual property, establishing a resilient fortress of protection around your brand. 

 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
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
       <br />
       <img src="/services/service/business_continuity.png" />
       <br />
       <br />
       <p style="color:#999999">
    

       Ensure the resilience and uninterrupted functioning of your mission-critical systems with our unwavering commitment to business continuity. Our dedicated support is always available to safeguard the continuity of your essential operations, providing you with peace of mind and a solid foundation for success. With our robust business continuity solutions, you can confidently navigate unforeseen challenges and maintain seamless operations even in the face of disruptions, empowering your organization to thrive in any circumstance.

 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
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
       <br />
       <img src="/services/service/cloud_based_solutions.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      
Experience the power of seamless cloud-based solutions tailored to meet your specific needs. Our cutting-edge technology enables effortless storage, computing, and software access, revolutionizing the way you manage your business operations. Embrace the scalability, flexibility, and cost-effectiveness of our cloud-based solutions, empowering your organization to thrive in today's rapidly evolving digital landscape.


 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
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
       <br />
       <img src="/services/service/on_site_server_support.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Our expert team specializes in providing reliable and high-performance solutions to ensure seamless connectivity. From network design and implementation to maintenance and security, we've got you covered. Experience enhanced efficiency, reduced downtime, and superior user experiences with our top-notch network services.
 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxseven = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/single_point_of_contact.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      
Experience the convenience of a Single Point of Contact for all your communication and support requirements. Our streamlined approach ensures that you have a dedicated and reliable liaison who will efficiently manage your interactions, providing prompt resolutions and exceptional customer service. Say goodbye to the hassle of multiple touchpoints and embrace a seamless and hassle-free communication experience with our dedicated support team.




 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxeight = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/backup_&_disaster_recovery_services.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      
       Protect your valuable data and ensure uninterrupted business operations with our robust Backup & Disaster Recovery solutions. With our state-of-the-art technology and streamlined processes, you can trust us to safeguard your critical information and swiftly restore your systems in the event of a crisis. Stay ahead of potential disruptions and confidently navigate unforeseen challenges with our reliable and efficient business continuity solutions.



 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxnine = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/flexibility.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Flexibility is at the core of our approach, allowing us to adapt our solutions to your specific needs and desires. We understand that every business is unique, and we take pride in crafting tailor-made strategies that align perfectly with your objectives. Experience the power of a truly customized IT management solution that caters to your organization's requirements and aspirations.


 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxten = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/mobility_enabled_services.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Experience the power of Mobility enabled Services that seamlessly adapt to diverse work patterns and activities. Our comprehensive assistance ensures uninterrupted support, empowering your team to stay connected and productive, wherever they go. Embrace the freedom of mobility while maintaining efficiency and effectiveness in every aspect of your business operations.



 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxeleven = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/data_center_services.png" />
       <br />
       <br />
       <p style="color:#999999">
    
 
      

       Unlock the full potential of your data centers with our reliable and cutting-edge Data Center Services. Our expert team specializes in efficient management and optimization techniques, ensuring seamless operations and maximizing the performance of your critical infrastructure. Experience enhanced reliability, scalability, and security as we streamline your data center operations to meet your evolving business needs.





 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxtwelve = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/third_party_utilization.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Maximize the potential of third-party resources by seamlessly integrating them into your operations. Our IT Strategy empowers your organization to effectively collaborate with external partners, ensuring a streamlined approach to handling administrative tasks. By leveraging the expertise and capabilities of trusted third parties, you can optimize efficiency and focus on core business objectives, while leaving the administrative burdens in capable hands. 




 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxthirteen = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/procurement_&_licencing.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       
       At RTS, we are proud to offer top-notch ERP services that streamline and optimize your business processes. Our experienced team of ERP experts is dedicated to understanding your unique business requirements and tailoring solutions that align perfectly with your goals. Whether you're a small startup or a large enterprise, our scalable ERP services will optimize your operations, saving you time, effort, and resources. 




 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxfourteen = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/software_management_&_maitenance.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Streamline your procurement and licensing processes effortlessly with our expert guidance. Unlock the best deals on licensing packages and applications, ensuring cost-effective solutions that meet your organization's unique requirements. Trust our specialized expertise to optimize your procurement strategies and maximize the value of your IT investments.




 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxfiften = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/software_management_&_maitenance.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Ensure the optimal performance of your software systems with our top-notch Software Management & Maintenance services. Our team of experts is dedicated to delivering regular updates, necessary fixes, and seamless integration of new applications, guaranteeing peak performance for your business operations. Experience worry-free software management as we take care of every aspect to keep your systems running smoothly and efficiently.




 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxsixteen = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/automation.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Embrace the power of automation in your workplace to streamline processes, eliminate repetitive tasks, and enhance overall productivity. By automating routine workflows and leveraging advanced technologies, you can unlock new levels of efficiency and focus on strategic initiatives that drive your organization forward.





 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  const Boxseventeen = () => {
    Swal.fire({
      html: `
       <div>
       <br />
       <img src="/services/service/it.png" />
       <br />
       <br />
       <p style="color:#999999">
    

      

       Unlock the power of top-tier IT talent with RTS Managed IT Talent Services. Our comprehensive solution connects businesses with highly skilled and experienced professionals who can seamlessly integrate into your team and deliver exceptional results. From short-term projects to long-term engagements, our Managed IT Talent Services provide the expertise you need to drive innovation, enhance productivity, and achieve your business goals.






 
       </p>
       </div>
       
       `,
      showCloseButton: false,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Close",
      backdrop: `
                    rgba(0,0,0,0.8)
                    left top
                    no-repeat
                  `,
    });
  };

  return (
    <div className={Styles.managedserviceshome}>
      <div className={Styles.managedserviceshomeparentheading}>
        <div className={Styles.managedserviceshomecontentheading}>
          <h1>Managed services</h1>
          <p>
            At our company, we prioritize delivering the best possible
            experience to our business partners, regardless of their location or
            bandwidth limitations. We have a clear vision of what IT Services
            Management should entail, and we leverage our expertise to create a
            platform that is easy to use, maintain, manage, and operate.
            Business entities face mounting pressure to operate efficiently,
            which requires finding alternate delivery models that reduce costs,
            enhance customer satisfaction, and deliver higher quality while
            accommodating ongoing growth. RTS Managed Services offers a unique
            and flexible delivery model for managing the digital operations of
            your organization. Our highly skilled team can scale up or down
            based on your business progress, optimizing your operational
            expenses.
          </p>

          <p>
            To ensure the security and compliance of all systems, we adhere to
            ISO 27001 standards for Information Security Management Systems. By
            partnering with RTS Managed Technology Services, you gain access to
            customizable processes, tools, systems, and highly skilled Subject
            Matter Experts, along with 24x7x365 support services.
          </p>
        </div>
      </div>

      <div className={Styles.managedservicesparent}>
        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/service_desk.png" />
            <h2>
              Service desk <br /> 24/7
            </h2>
          </div>

          <p>Get round-the-clock support for all your IT needs 24/7.</p>

          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxone}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/cloud_based_solutions.png" />
            <h2>
              Cloud <br /> Services
            </h2>
          </div>

          <p>
            Seamless cloud-based solutions for storage, computing, and software
            access.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxfive}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/data_center_services.png" />
            <h2>
              Data Center <br /> Services
            </h2>
          </div>

          <p>Reliable management and optimization for data centers.</p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxeleven}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/security.png" />
            <h2>
              Security <br /> Services
            </h2>
          </div>

          <p>Protect your brand with Multiple layers of built-in security.</p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxthree}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/on_site_server_support.png" />
            <h2>
              Network
              <br /> Services
            </h2>
          </div>

          <p>Expert assistance for seamless connectivity and communication</p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxsix}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/backup_&_disaster_recovery_services.png" />
            <h2>
              Business continuity
              <br />& Backup and Recovery
            </h2>
          </div>

          <p>
            Restore business continuity with reliable and efficient solutions.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxeight}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/procurement_&_licencing.png" />
            <h2>
              ERP
              <br /> Services
            </h2>
          </div>

          <p>Streamline Your Business with Cutting-Edge ERP Solutions</p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxthirteen}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/it_strategy.png" />
            <h2>
              Digital
              <br />
              Workplace
            </h2>
          </div>

          <p>
            Revolutionize the way you work and collaborate with Digital
            Workspace
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxtwo}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/it.png" />
            <h2>
              Managed IT
              <br />
              Talent Services
            </h2>
          </div>

          <p>
            Unlock top-tier IT tailored to your organization's unique needs and
            objectives.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxseventeen}>View more</button>
          </div>
        </div>

        {/* <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/business_continuity.png" />
            <h2>
              Business <br />
              Continuity
            </h2>
          </div>

          <p>
            Our unwavering commitment is available for all mission-critical
            systems.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxfour}>View more</button>
          </div>
        </div> */}

        {/* <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/single_point_of_contact.png" />
            <h2>
              Single Point of <br /> Contact
            </h2>
          </div>

          <p>Streamlining your communication and support needs</p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxseven}>View more</button>
          </div>
        </div> */}

        {/* <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/flexibility.png" />
            <h2>Flexibility</h2>
          </div>

          <p>Solutions tailored to your needs and desires.</p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxnine}>View more</button>
          </div>
        </div> */}

        {/* <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/mobility_enabled_services.png" />
            <h2>
              Mobility enabled <br /> services
            </h2>
          </div>
          <p>
            Support for all work patterns and activities with comprehensive
            assistance.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxten}>View more</button>
          </div>
        </div> */}

        {/* <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/third_party_utilization.png" />
            <h2>
              Third-party <br />
              utilization
            </h2>
          </div>

          <p>
            Collaborates with third parties to streamline administrative tasks.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxtwelve}>View more</button>
          </div>
        </div> */}

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/software_management_&_maitenance.png" />
            <h2>
              Software Management & <br /> Maintenance
            </h2>
          </div>

          <p>
            System updates, fixes, and applications for peak performance -
            guaranteed.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxfourteen}>View more</button>
          </div>
        </div>

        <div className={Styles.managedservicesbox}>
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/automation.png" />
            <h2>
              Automation
              <br />
              <span style={{ visibility: "hidden" }}>jkhjkdh</span>
            </h2>
          </div>

          <p>
            Streamline processes and maximize productivity with workplace
            automation.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxsixteen}>View more</button>
          </div>
        </div>

        <div
          id={Styles.managedservicesvis}
          className={Styles.managedservicesbox}
        >
          <div className={Styles.managedservicescontentmain}>
            <img src="/services/service/software_management_&_maitenance.png" />
            <h2>
              Software Management & <br /> Maintenance
            </h2>
          </div>

          <p>
            System updates, fixes, and applications for peak performance -
            guaranteed.
          </p>
          <div className={Styles.managedserviceboxlink}>
            <button onClick={Boxfiften}>View more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managedservice;
