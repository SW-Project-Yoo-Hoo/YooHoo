import React from "react";
import styles from "./userInfo.module.css";
import { MdSearch, MdPersonOutline } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserInfo = (props) => {
  return (
    <ul className={styles.userInfo}>
      {/* searchIcon */}
      <li className={styles.liStyle}>
        <MdSearch className={styles.iconStyle} />
      </li>

      {/* alarmIcon */}
      <li className={styles.liStyle}>
        <Link to="/Alarm">
          <TbBell className={styles.iconStyle} />
        </Link>
      </li>

      {/* profileIcon */}
      <li className={styles.liStyle}>
        <Link to="/Login">
          <MdPersonOutline className={styles.iconStyle} />
        </Link>
      </li>
    </ul>
  );
};

export default UserInfo;
