import Link from "next/link";
import Styles from "../../styles/home.module.scss";


const Homemain = () => {
  
  return (
    <div className={Styles.homemainparentdiv}>
      <div className={Styles.homemainboxone}>
        <div className={Styles.homemainboxoneheading}>
          <h1>
            <span>Turn your</span> business
          </h1>
          <h1>vision into reality</h1>
        </div>

        <div className={Styles.homemainboxonepara}>
          <p>
            Royal Technology Solutions has been providing comprehensive
            technology solutions for businesses across the world. The evolution
            of technology and business over the past few years has increased the
            demand for efficient and highly integrated business solutions.
          </p>
          <p>
            Our team of professionals working on the client-first model strives
            to deliver creative, custom, comprehensive and cutting-edge
            solutions as per the needs and expectations of our clients.
          </p>
        </div>
        <br />
        <br />
       
          <Link href="/contact">Explore more</Link>
   
      </div>

      <div className={Styles.homemainboxtwo}>
        <img src="/home/building.webp"></img>
        <div className={Styles.homemainboxtwoimg}></div>
      </div>
    </div>
  );
};

export default Homemain;
