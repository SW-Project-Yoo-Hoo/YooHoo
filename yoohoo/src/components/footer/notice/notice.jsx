import React from "react";
import { Link } from "react-router-dom";
import FAQ from "./faq";
import styles from "./notice.module.css";

const Notice = (props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <Link to="/faq">
          <li className={styles.item}>FAQ</li>
        </Link>

        <li className={styles.item}>
          <a href="https://github.com/SW-Project-Yoo-Hoo" target="_blank">
            Connect Us - Notion
          </a>
        </li>

        <li className={styles.item}>
          <a href="https://github.com/SW-Project-Yoo-Hoo" target="_blank">
            Connect Us - GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Notice;
