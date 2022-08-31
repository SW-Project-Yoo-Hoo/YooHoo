import React from "react";
import styles from "./header.module.css";
import Page from "./pages/page";
import User from "./user/user";

const Header = (props) => {
  return (
    <header className={styles.header}>
      {/* left component : logo */}
      <div className={styles.logo}>
        <img className={styles.logoStyle} src="/Images/header/logo.png"></img>
      </div>

      {/* rigth component : pages, search, alram, profile */}
      <div className={styles.rightComponent}>
        <div>
          <Page />
        </div>
        <div>
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
