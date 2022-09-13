import React from "react";
import styles from "./alarm.module.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";

const Post = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backGroundIamge} />
      <h1>알람</h1>
    </div>
  );
};

export default Post;
