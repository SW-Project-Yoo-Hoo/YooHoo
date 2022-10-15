import React, { useState, useEffect } from "react";
import styles from "./userInfo.module.css";
import { MdSearch, MdPersonOutline } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";

const UserInfo = (props) => {
  const [page, setPage] = useState("/login");
  const [alarmPage, setAlarmPage] = useState("/login");

  /** 마이프로필 아이콘 */
  useEffect(() => {
    const pageHandling = async () => {
      // let test = false;
      await axios
        .get("/isLogin")
        .then(function (response) {
          //로그인 되어 있음
          if (response.data.data === true) {
            //프로필로 이동
            setPage("/profile");
          } else {
            //로그인 페이지 이동
            setPage("/login");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    pageHandling();
  }, []);

  /** 알림 아이콘 */
  useEffect(() => {
    const alarmPageHandling = async () => {
      await axios
        .get("/isLogin")
        .then(function (response) {
          if (response.data.data === true) {
            //알림 페이지 이동
            setAlarmPage("/alarm");
          } else {
            //로그인 페이지 이동
            setAlarmPage("/login");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    alarmPageHandling();
  }, []);

  return (
    <ul className={styles.userInfo}>
      {/* searchIcon */}
      <li className={styles.liStyle}>
        <MdSearch className={styles.icon} />
      </li>

      {/* alarmIcon */}
      <li className={styles.liStyle}>
        <Link to={alarmPage}>
          <TbBell className={styles.icon} />
        </Link>
      </li>

      {/* profileIcon */}
      <li className={styles.liStyle}>
        <Link to={page}>
          <MdPersonOutline className={styles.icon} />
        </Link>
      </li>
    </ul>
  );
};

export default UserInfo;
