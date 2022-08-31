import React from "react";
import styles from "./userInfo.module.css";
import { MdSearch, MdPersonOutline } from "react-icons/md";
import { TbBell } from "react-icons/tb";

const UserInfo = (props) => {
  return (
    <userInfo>
      <MdSearch className={styles.icon} />
      <TbBell className={styles.icon} />
      <MdPersonOutline className={styles.icon} />
    </userInfo>
  );
};

export default UserInfo;
