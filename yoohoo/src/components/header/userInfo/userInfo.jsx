import React from "react";
import styles from "./userInfo.module.css";
import { MdSearch, MdPersonOutline } from "react-icons/md";
import { TbBell } from "react-icons/tb";

const UserInfo = (props) => {
  return (
    <ul className={styles.userInfo}>
      {/* searchIcon */}
      <li className={styles.liStyle}>
        <MdSearch className={styles.icon} />
      </li>

      {/* alarmIcon */}
      <li className={styles.liStyle}>
        <TbBell className={styles.icon} />
      </li>

      {/* profileIcon */}
      <li className={styles.liStyle}>
        <MdPersonOutline className={styles.icon} />
      </li>
    </ul>
  );
};

export default UserInfo;
