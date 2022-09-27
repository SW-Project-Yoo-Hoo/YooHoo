import React from "react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.pageStyle}>
        <Link to="/home" className={styles.active}>
          HOME
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/shop" className={styles.active}>
          SHOP
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/post" className={styles.active}>
          POST
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/about" className={styles.active}>
          ABOUT
        </Link>
      </li>
    </ul>
  );
};

export default Page;
