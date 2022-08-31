import React from "react";
import styles from "./page.module.css";
import Home from "../../page/home/home";
import { BrowserRouter } from "react-router-dom";

//pageComponent
const PageComponent = (props) => {
  // const handClick = (e) => {
  //   window.location.href = <Home />;
  // };
  return (
    <page className={styles.page}>
      <div className={styles.pageStyle} /*onClick={handClick()}*/>HOME</div>
      <div className={styles.pageStyle}>SHOP</div>
      <div className={styles.pageStyle}>POST</div>
      <div className={styles.pageStyle}>ABOT</div>
    </page>
  );
};

const Page = () => {
  return <PageComponent />;
};

export default Page;
