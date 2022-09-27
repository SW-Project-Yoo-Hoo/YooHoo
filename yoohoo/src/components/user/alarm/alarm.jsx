import React from "react";
import styles from "./alarm.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import AlarmList from "./alarmList";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Alarm = (props) => {
  // 마이프로필로 이동하기 위한 call 추가
  AlarmList.map((item) => {
    switch (item.title) {
      case "반납 일정":
        item.call = "ProgressStatus";
        break;
      case "반납 요청":
        item.call = "ProgressStatus";
        break;
      case "조기 반납 요청":
        item.call = "ProgressStatus";
        break;
      case "거래 취소":
        item.call = "SentStatus";
        break;
      case "거래 시작":
        item.call = "ProgressStatus";
        break;
      case "거래 요청":
        item.call = "ReceivedStatus";
        break;
      case "거래 완료":
        item.call = "CompletStatus";
        break;
      default:
        item.call = "MyPost";
    }
  });

  return (
    <>
      <Header />
      <div className={styles.background}>
        <div className={styles.container}>
          <img
            className={styles.headerImg}
            src={process.env.PUBLIC_URL + "images/headerBackground.png"}
            alt="Header"
          />
          <div className={styles.alarmList}>
            {AlarmList.map((item, index) => (
              <div className={styles.alarmItems} key={item.id}>
                {index === 0 && (
                  <img
                    className={styles.megaphoneImg}
                    src={process.env.PUBLIC_URL + "images/alarm/megaphone.svg"}
                    alt="Megaphone"
                  />
                )}
                {index === 0 || item.date !== AlarmList[index - 1].date ? (
                  <>
                    <div>
                      <div
                        className={
                          item.title === "반갑습니다!"
                            ? styles.hrFirst
                            : styles.hr
                        }
                      ></div>
                      <div className={styles.circle}></div>
                    </div>
                    <div className={styles.containDate}>
                      <div className={styles.alarm}>
                        <div className={styles.dayContiner}>
                          <img
                            className={styles.timeImg}
                            src={
                              process.env.PUBLIC_URL + "images/alarm/time.svg"
                            }
                            alt="Time"
                          />
                          <p className={styles.day}>{item.date}</p>
                        </div>
                        <Link to="/profile" state={{ call: item.call }}>
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
                              <p className={styles.description}>
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </Link>
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
                        <Link to="/profile" state={{ call: item.call }}>
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
                              <p className={styles.description}>
                                {item.content}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
            <Footer className={styles.footer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alarm;
