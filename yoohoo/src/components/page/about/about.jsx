import React from "react";
import Footer from "../../footer/footer";
import styles from "./about.module.css";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";

const About = (props) => {
  const moveArea = document.querySelector("#topic2");

  const onClick = () => {
    moveArea.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className={styles.wrapHeader}></div>
      <div className={styles.background}>
        {/* Title */}
        <div className={styles.title}>
          <span className={styles.content}>LET'S TALK ABOUT US</span>
        </div>

        {/* Topic1 */}
        <div className={styles.topic1}>
          <div className={styles.topic1_span}>
            <span className={styles.topic1_Title}>Digital Commerce</span>
            <p className={styles.topic1_Content}>
              Put your resources to reuse !
            </p>
            <p className={styles.topic1_Content2}>
              Transform how you source, procure, and use resources with Yoohoo.
            </p>
            <button className={styles.topic1_Btn} onClick={onClick}>
              Read More
            </button>
          </div>

          <img
            className={styles.shoppingPNG}
            src={process.env.PUBLIC_URL + "images/about/shopping.png"}
            alt="Shopping"
          />
        </div>

        {/* Topic2 */}
        <div className={styles.topic2} id="topic2">
          <img
            className={styles.earthPNG}
            src={process.env.PUBLIC_URL + "images/about/earth.png"}
            alt="Earth"
          />

          <div className={styles.topic2_span}>
            <span className={styles.topic2_Title}>Our story</span>
            <p className={styles.topic2_Content}>~~</p>
          </div>
        </div>

        {/* Topic3 */}
        <div className={styles.topic3}>
          <span className={styles.topic3_Title}>Profile</span>
          <div className={styles.memberGroup}>
            <div className={styles.member}>
              <img
                className={styles.memberImg}
                src={process.env.PUBLIC_URL + "images/about/hj.png"}
                alt="HJ"
              />
              <p className={styles.memberName}>Oh Hyeon-ju</p>
              <p className={styles.memberRole}>Front-end Developer</p>
              <a href="https://github.com/OhHyeonJu0415" target="_blank">
                <VscGithub className={styles.githubIcon} />
              </a>
              <a href="https://www.instagram.com/oh.___.hj/" target="_blank">
                <FaInstagram className={styles.instaIcon} />
              </a>
            </div>

            <div className={styles.member}>
              <img
                className={styles.memberImg}
                src={process.env.PUBLIC_URL + "images/about/ys.png"}
                alt="YS"
              />
              <p className={styles.memberName}>Yoo Yeong-seo</p>
              <p className={styles.memberRole}>Front-end Developer</p>
              <a href="https://github.com/hanb613" target="_blank">
                <VscGithub className={styles.githubIcon} />
              </a>
              <a href="https://www.instagram.com/_yeong__s2/" target="_blank">
                <FaInstagram className={styles.instaIcon} />
              </a>
            </div>

            <div className={styles.member}>
              <img
                className={styles.memberImg}
                src={process.env.PUBLIC_URL + "images/about/ys.png"}
                alt="HY"
              />
              <p className={styles.memberName}>Ju Hyer-yeon</p>
              <p className={styles.memberRole}>Back-end Developer</p>
              <a href="https://github.com/object1997428" target="_blank">
                <VscGithub className={styles.githubIcon} />
              </a>
              <a href="https://www.instagram.com/_yeong__s2/" target="_blank">
                <FaInstagram className={styles.instaIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className={styles.wrapfooter}>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default About;
