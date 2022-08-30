import React from "react";
import Footer from "../../footer/footer";
import styles from "./about.module.css";

const About = (props) => {
  return (
    <>
      <div className={styles.wrapHeader}></div>

      <div className={styles.title}>
        <span className={styles.content}>LET'S TALK ABOUT US</span>
      </div>

      <div className={styles.background}>
        <img
          className={styles.shoppingPNG}
          src={process.env.PUBLIC_URL + "images/about/shopping.png"}
          alt="Shopping"
        ></img>
        <div className={styles.wrapfooter}>
          <footer className={styles.footer}>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default About;
