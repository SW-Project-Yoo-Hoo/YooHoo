import React from "react";
import styles from "./post.module.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";

const Post = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backGroundIamge} />
    </div>
  );
};

export default Post;
