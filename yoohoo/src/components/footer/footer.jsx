import React from "react";
import styles from "./footer.module.css";
import AboutUs from "./aboutUs/aboutUs";
import Notice from "./notice/notice";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.notice}>
        <span className={styles.noticeTitle}>Notice</span>
        <Notice />
        <span className={styles.logo}>ⓒ Yoohoo</span>
      </div>

      <div>
        <p className={styles.infoTitle}>DONG-A UNIVERSITY</p>
        <p className={styles.dept}>Department of Computer Engineering</p>
      </div>

      <div>
        <span className={styles.aboutTitle}>About Us</span>
        <AboutUs />
      </div>
    </footer>
  );
};

export default Footer;
