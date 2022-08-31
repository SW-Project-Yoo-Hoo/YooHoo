import React from "react";
import styles from "./home.module.css";
import Header from "../../header/header";

const Home = (props) => {
  const pageTransform = () => {
    console.log("페이지이동하기!");
    window.location.href = "/About";
  };

  return (
    <div>
      <Header />
      <div className={styles.backGroundIamge}>
        {/* part.1 */}
        <div className={styles.intro}>
          {/* text,button */}
          <div className={styles.introTextButton}>
            {/* text */}
            <div>
              <p>
                {/* mainTitle */}
                <div>
                  <span className={styles.introMainBigText}>Resource</span>
                  <span className={styles.introMainSmallText}>Exchange</span>
                </div>
                <div className={styles.introText}>
                  <span className={styles.introMainSmallTextBottom}>
                    For The
                  </span>
                  <span className={styles.introMainBigText}>Resourceful</span>
                </div>

                {/* subTitle */}
                <span className={styles.introSubText}>
                  Transform how you source, procure, and
                </span>
                <span className={styles.introSubText}>
                  use resources with YooHoo.
                </span>
              </p>
            </div>

            {/* button */}
            <button className={styles.buttonStyle} onClick={pageTransform}>
              Read More
            </button>
          </div>

          {/* img */}
          <div className={styles.mainIllu1}>
            <img
              className={styles.mainIlluImage}
              src="/Images/home/computerWoman.png"
              alt="illu"
            ></img>
          </div>
        </div>

        {/* part.2 */}
        <div className={styles.content}>
          {/* shopNow */}
          <div className={styles.shopNow}>
            {/* leftIllu */}
            <div className={styles.shopNowLeft}>
              <span>img</span>
            </div>

            {/* rightText */}
            <div className={styles.shopNowRight}>
              <span>text</span>
            </div>
          </div>

          {/* postNow */}
          <div className={styles.postNow}>
            {/* leftText */}
            <div className={styles.postNowLeft}>
              <span>text</span>
            </div>
            {/* rightIllu */}
            <div className={styles.postNowRight}>
              <span>img</span>
            </div>
          </div>

          {/* profiletNow */}
          <div className={styles.profileNow}>
            {/* leftIllu */}
            <div className={styles.profileNowLeft}>
              <span>img</span>
            </div>

            {/* rightText */}
            <div className={styles.profileNowRight}>
              <span>text</span>
            </div>
          </div>
        </div>

        {/* part.3 */}
        <div className={styles.wrapUp}>
          {/* topText */}
          <div className={styles.wrapUpText}>
            <span>text</span>
          </div>

          {/* bottomIllu */}
          <div className={styles.wrapUpImg}>
            <span>img</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
