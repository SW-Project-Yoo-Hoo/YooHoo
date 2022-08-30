import React from "react";
import styles from "./header.module.css";
import Logo from "./leftLogo/leftLogo.jsx";
import RightComponent from "./rightComponent/rightComponent.jsx";

const Header = (props) => {
  return (
    <header className={styles.header}>
      {/* left component */}
      <div className={styles.logo}>
        <Logo />
      </div>

      {/* rigth component */}
      <div className={styles.rightComponent}>
        <RightComponent />
      </div>
    </header>
  );
};

export default Header;
