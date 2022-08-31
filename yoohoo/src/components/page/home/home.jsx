import React from "react";
import styles from "./home.module.css";
import Header from "../../header/header";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className={styles.backGroundIamge}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </>
  );
};

export default Home;
