import React from "react";
import styles from "./alarm.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const Alarm = (props) => {
  return (
    <>
      <Header />
      <div className={styles.background}>
        <img
          className={styles.headerImg}
          src={process.env.PUBLIC_URL + "images/headerBackground.png"}
          alt="Header"
        />

        <div className={styles.container}>
          <img
            className={styles.megaphoneImg}
            src={process.env.PUBLIC_URL + "images/alarm/megaphone.svg"}
            alt="Megaphone"
          />
          <div className={styles.line}>
            <div className={styles.hr}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.alarm}>
            <div className={styles.dayContiner}>
              <img
                className={styles.timeImg}
                src={process.env.PUBLIC_URL + "images/alarm/time.svg"}
                alt="Time"
              />

              <p className={styles.day}>8월 19일</p>
            </div>

            <div className={styles.contents}>
              <div className={styles.pic}>
                <img
                  className={styles.productImg}
                  src={process.env.PUBLIC_URL + "images/shop/a.jpg"}
                  alt="Product"
                />
              </div>
              <div className={styles.P}>
                <p className={styles.title}>반갑습니다!</p>
                <p className={styles.description}>
                  회원님의 다양한 자원을 공유해보세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Alarm;
