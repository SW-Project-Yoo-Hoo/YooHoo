import React from "react";
import styles from "./page.module.css";
import { Link, NavLink } from "react-router-dom";

//pageComponent
const PageComponent = (props) => {
  // const handClick = (e) => {
  //   window.location.href = <Home />;
  // };
  return (
    <ul className={styles.page}>
      <li className={styles.pageStyle}>
        <NavLink to="/Home">Home</NavLink>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/Shop">Shop</Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/Post">Post</Link>
      </li>
      <li className={styles.pageStyle}>
        <Link to="/About">About</Link>
      </li>
    </ul>
  );
};

const Page = () => {
  return <PageComponent />;
};

export default Page;
