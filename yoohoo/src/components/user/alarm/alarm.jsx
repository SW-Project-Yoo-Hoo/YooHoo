import React from "react";
import styles from "./alarm.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import AlarmList from "./alarmList";

const Alarm = (props) => {
  return (
    <div className={styles.wrap}>
      <Header />
      <img
        className={styles.headerImg}
        src={process.env.PUBLIC_URL + "images/headerBackground.png"}
        alt="Header"
      />

      <div className={styles.alarmList}>
        <img
          className={styles.megaphoneImg}
          src={process.env.PUBLIC_URL + "images/alarm/megaphone.svg"}
          alt="Megaphone"
        />{" "}
        <img
          className={styles.backImg}
          src={process.env.PUBLIC_URL + "images/alarm/background.png"}
          alt="Background"
        />
        {AlarmList.map((item, index) => (
          <div className={styles.alarmItems} key={item.id}>
            {index === 0 || item.date !== AlarmList[index - 1].date ? (
              <>
                <div>
                  <div
                    className={
                      item.title === "반갑습니다!" ? styles.hrFirst : styles.hr
                    }
                  ></div>
                  <div className={styles.circle}></div>
                </div>
                <div className={styles.containDate}>
                  <div className={styles.alarm}>
                    <div className={styles.dayContiner}>
                      <img
                        className={styles.timeImg}
                        src={process.env.PUBLIC_URL + "images/alarm/time.svg"}
                        alt="Time"
                      />
                      <p className={styles.day}>{item.date}</p>
                    </div>
                    <div className={styles.contents}>
                      <div className={styles.pic}>
                        <img
                          className={styles.productImg}
                          src={item.image}
                          alt="Product"
                        />
                      </div>
                      <div className={styles.P}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.description}>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.noneDate}>
                  <div>
                    <div className={styles.hr2}></div>
                    <div className={styles.circle2}></div>
                  </div>
                  <div className={styles.alarm}>
                    <div className={styles.contents2}>
                      <div className={styles.pic}>
                        <img
                          className={styles.productImg}
                          src={item.image}
                          alt="Product"
                        />
                      </div>
                      <div className={styles.P}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.description}>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        <Footer className={styles.footer} />
      </div>
    </div>
  );
};

export default Alarm;
