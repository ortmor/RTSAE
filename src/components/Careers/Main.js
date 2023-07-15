import { Fragment } from "react";
import Styles from "../../styles/careers.module.scss";

const Main = () => {
  return (
    <Fragment>
      <div className={Styles.careersvaluehome}>
        <div className={Styles.careersvalueparent}>
          <div className={Styles.careersvaluebox}>
            <div className={Styles.careersvaluecontentmain}>
              <img src="/careers/Asset 1.png" />

              <div>
                <h5>A Culture </h5>
                <h5>of Innovation</h5>
              </div>
            </div>

            <p>
              At RTS, innovation is at the core of everything we do. We believe
              in pushing boundaries, embracing new technologies, and finding
              creative solutions to complex problems. Our work environment
              encourages curiosity and provides ample opportunities to
              experiment and grow. You'll have access to cutting-edge tools and
              resources, enabling you to thrive and contribute to the company's
              growth.
            </p>
          </div>

          <div className={Styles.careersvaluebox}>
            <div className={Styles.careersvaluecontentmain}>
              <img src="/careers/Asset 2.png" />

              <div>
                <h5>Collaboration and</h5>
                <h5> Teamwork </h5>
              </div>
            </div>

            <p>
              We foster a culture of collaboration, where teamwork is highly
              valued. Our employees come from diverse backgrounds and possess a
              wide range of skills and expertise. By working together, we
              leverage our collective knowledge and ideas to drive meaningful
              change and deliver exceptional results. As a member of our team,
              you'll have the chance to collaborate with talented professionals
              across various departments, expanding your network and learning
              from the best.
            </p>
          </div>

          <div className={Styles.careersvaluebox}>
            <div className={Styles.careersvaluecontentmain}>
              <img src="/careers/Asset 3.png" />

              <div>
                <h5>Professional Growth </h5>
                <h5>and Development</h5>
              </div>
            </div>

            <p>
              We are dedicated to nurturing the professional growth and
              development of our employees. Through continuous learning
              initiatives, mentorship programs, and skill-building workshops, we
              provide a supportive framework that enables you to excel in your
              career. Whether you want to enhance your technical skills, explore
              leadership opportunities, or broaden your industry knowledge, we
              offer numerous avenues for growth and encourage employees to take
              ownership of their development.
            </p>
          </div>
        </div>

        <div className={Styles.careersvalueparentone}>
          <div className={Styles.careersvalueboxone}>
            <div className={Styles.careersvaluecontentmainone}>
              <img src="/careers/Asset 4.png" />
              <div>
                <h5>Impactful </h5>
                <h5>Work</h5>
              </div>
            </div>

            <p>
              RTS operates at the forefront of the IT revolution, delivering
              innovative solutions that have a profound impact on businesses and
              individuals worldwide. You'll have the opportunity to contribute
              to projects that shape the future of technology. You'll work with
              leading clients, tackle complex challenges, and witness the direct
              results of your efforts. We believe that meaningful work is
              essential for professional satisfaction, and we strive to provide
              an environment where you can make a difference.
            </p>
          </div>

          <div className={Styles.careersvalueboxone}>
            <div className={Styles.careersvaluecontentmainone}>
              <img src="/careers/Asset 5.png" />
              <div>
                <h5>Diversity and</h5>
                <h5> Inclusion </h5>
              </div>
            </div>

            <p>
              We celebrate diversity and believe that an inclusive workforce
              drives innovation and fosters creativity. We are committed to
              providing equal opportunities for all employees, irrespective of
              their gender, race, ethnicity, or background. By embracing
              diversity, we create an environment that encourages different
              perspectives and promotes a culture of respect, collaboration, and
              mutual understanding.
            </p>
          </div>

          <div
            style={{ visibility: "hidden" }}
            className={Styles.careersvalueboxone}
            id={Styles.careersvaluehidden}
          >
            <div className={Styles.careersvaluecontentmainone}>
              <img src="/careers/Asset 5.png" />
              <div>
                <h5>A Culture </h5>
                <h5>of Innovation</h5>
              </div>
            </div>

            <p>
              At RTS, innovation is at the core of everything we do. We believe
              in pushing boundaries, embracing new technologies, and finding
              creative solutions to complex problems. Our work environment
              encourages curiosity and provides ample opportunities to
              experiment and grow. You'll have access to cutting-edge tools and
              resources, enabling you to thrive and contribute to the company's
              growth.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
