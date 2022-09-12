import React from "react";
import styles from "./profile.module.css";
import { Link, NavLink } from "react-router-dom";
import Header from "../../header/header";

const Profile = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backGroundIamge} />
    </div>
  );
};

export default Profile;
