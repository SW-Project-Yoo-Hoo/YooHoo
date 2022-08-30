import React from "react";
import styles from "./header.module.css";
import RightComponent from "./rightComponent/rightComponent.jsx";

const Header = (props) => {
  return (
    <header className={styles.header}>
      {/* left component : logo */}
      <div className={styles.logo}>
        <img
          src="/Images/header/logo.png"
          style={{ width: 100, height: 30 }}
        ></img>
      </div>

      {/* rigth component : pages, search, alram, profile */}
      <div className={styles.rightComponent}>
        <RightComponent />
      </div>
    </header>
  );
};

export default Header;
