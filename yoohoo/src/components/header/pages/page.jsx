import React from "react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.pageStyle}>
        <Link to="/Home" className={styles.active}>
          HOME
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/Shop" className={styles.active}>
          SHOP
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/Post" className={styles.active}>
          POST
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/About" className={styles.active}>
          ABOUT
        </Link>
      </li>
    </ul>
  );
};

export default Page;
