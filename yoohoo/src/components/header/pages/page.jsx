import React from "react";
import styles from "./page.module.css";
import { Link, NavLink } from "react-router-dom";

//pageComponent
const PageComponent = (props) => {
  return (
    <ul className={styles.page}>
      <li className={styles.pageStyle}>
        <NavLink
          to="/Home"
          // className={({ isActive }) =>
          //   isActive ? styles.active : styles.inactive
          // }
          className={styles.inactive}
        >
          HOME
        </NavLink>
      </li>
      <li className={styles.pageStyle}>
        <Link
          to="/Shop"
          // className={({ isActive }) =>
          //   isActive ? styles.active : styles.inactive
          // }
          className={styles.inactive}
        >
          SHOP
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link
          to="/Post"
          // className={({ isActive }) =>
          //   isActive ? styles.active : styles.inactive
          // }
          className={styles.inactive}
        >
          POST
        </Link>
      </li>
      <li className={styles.pageStyle}>
        <Link
          to="/About"
          // className={({ isActive }) =>
          //   isActive ? styles.active : styles.inactive
          // }
          className={styles.inactive}
        >
          ABOUT
        </Link>
      </li>
    </ul>
  );
};

const Page = () => {
  return <PageComponent />;
};

export default Page;
