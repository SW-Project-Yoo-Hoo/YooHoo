import React from "react";
import styles from "./rightComponent.module.css";
import Page from "./pages/page.jsx";
import User from "./user/user.jsx";

const rightComponent = (props) => {
  return (
    <rightComponent className={styles.rightComponent}>
      <div>
        <Page />
      </div>
      <div>
        <User />
      </div>
    </rightComponent>
  );
};

export default rightComponent;
