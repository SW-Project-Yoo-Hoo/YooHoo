import React from "react";
import styles from "./home.module.css";
import Header from "../../header/header";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className={styles.backGroundIamge}>
        {/* part.1 */}
        <div>1</div>

        {/* part.2 */}
        <div>1</div>

        {/* part.3 */}
        <div>1</div>
      </div>
    </>
  );
};

export default Home;
