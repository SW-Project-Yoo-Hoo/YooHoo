import React from "react";
import styles from "./user.module.css";
import { MdSearch, MdPersonOutline } from "react-icons/md";
import { TbBell } from "react-icons/tb";

const User = (props) => {
  return (
    <user>
      <MdSearch className={styles.icon} />
      <TbBell className={styles.icon} />
      <MdPersonOutline className={styles.icon} />
    </user>
  );
};

export default User;
