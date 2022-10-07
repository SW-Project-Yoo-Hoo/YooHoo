import React, { useState, useEffect } from "react";
import styles from "./alarm.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import AlarmList from "./alarmList";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Alarm = (props) => {
  const REACT_PUBLIC_URL = "http://localhost:3000/";

  const [alarmList, setAlarmList] = useState([]);

  // 마이프로필로 이동하기 위한 call 추가
  function setCall(title) {
    switch (title) {
      case "반납 일정":
        return "ProgressStatus";
      case "반납 요청":
        return "ProgressStatus";
      case "조기 반납 요청":
        return "ProgressStatus";
      case "요청 취소":
        return "SentStatus";
      case "거래 시작":
        return "ProgressStatus";
      case "거래 요청":
        return "ReceivedStatus";
      case "거래 완료":
        return "CompletStatus";
      default:
        return "MyPost";
    }
  }

  /* 백엔드에서 알람 리스트 가져오기 */
  useEffect(() => {
    const getList = () => {
      axios
        .get("/alarms")
        .then((res) => {
          setAlarmList(
            res.data.data.map((item, index) => ({
              title: item.title,
              content: item.content,
              dateMonth: new Date(item.alarmDate).getMonth() + 1,
              dateDate: new Date(item.alarmDate).getDate(),
              photo: item.photo_dir,
              call: setCall(item.title),
            }))
          );
        })
        .catch((error) => console.log(error));
    };

    getList();
  }, []);

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
            {alarmList &&
              alarmList.reverse().map((item, index) => (
                <div className={styles.alarmItems} key={item.id}>
                  {index === 0 && (
                    <img
                      className={styles.megaphoneImg}
                      src={
                        process.env.PUBLIC_URL + "images/alarm/megaphone.svg"
                      }
                      alt="Megaphone"
                    />
                  )}

                  {index === 0 ||
                  (item.dateMonth === alarmList[index - 1].dateMonth &&
                    item.dateDate !== alarmList[index - 1].dateDate) ? (
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

                            <p className={styles.day}>
                              {item.dateMonth}월 {item.dateDate}일
                            </p>
                          </div>
                          <Link to="/profile" state={{ call: item.call }}>
                            <div className={styles.contents}>
                              <div className={styles.pic}>
                                {item.title === "반갑습니다!" ? (
                                  <img
                                    className={styles.productImg}
                                    src={
                                      REACT_PUBLIC_URL +
                                      "images/header/logo.png"
                                    }
                                    alt="logo"
                                  />
                                ) : (
                                  <img
                                    className={styles.productImg}
                                    src={
                                      REACT_PUBLIC_URL +
                                      "productList/" +
                                      item.photo
                                    }
                                    alt="Product"
                                  />
                                )}
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
                          <div
                            className={
                              item.title === "반갑습니다!"
                                ? styles.hr2First
                                : styles.hr2
                            }
                          ></div>
                          <div className={styles.circle2}></div>
                        </div>
                        <div className={styles.alarm}>
                          <Link to="/profile" state={{ call: item.call }}>
                            <div className={styles.contents2}>
                              <div className={styles.pic}>
                                {item.title === "반갑습니다!" ? (
                                  <img
                                    className={styles.productImg}
                                    src={
                                      REACT_PUBLIC_URL +
                                      "images/header/logo.png"
                                    }
                                    alt="logo"
                                  />
                                ) : (
                                  <img
                                    className={styles.productImg}
                                    src={
                                      REACT_PUBLIC_URL +
                                      "productList/" +
                                      item.photo
                                    }
                                    alt="Product"
                                  />
                                )}
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
