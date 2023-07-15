import Styles from "../../styles/contact.module.scss";

const Landing = () => {
  return (
    <div className={Styles.contactlandingcontainer}>
      <div className={Styles.contactlandingcontainerslide}>
        <img
          id={Styles.img}
          width="100%"
          src="/contact/bg.jpg"
        />
      </div>
    </div>
  );
};

export default Landing;
