import React from "react";
import styles from "./login.module.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";

const Post = (props) => {
  return (
    <>
      <Header />
      <div className={styles.backGroundIamge} alt="img" />
      <h1>로그인</h1>
    </>
  );
};

export default Post;
