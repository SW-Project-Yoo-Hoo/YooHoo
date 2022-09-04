import React from "react";
import styles from "./alarm.module.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";

const Post = (props) => {
  return (
    <>
      <Header />
      <div className={styles.backGroundIamge} />
      <h1>알람</h1>
    </>
  );
};

export default Post;
