import React from "react";
import styles from "./home.module.css";
import Header from "../../header/header";

const Home = (props) => {
  const pageTransform = () => {
    console.log("페이지이동하기!");
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    window.location.href = "/About";
  };

  return (
    <div>
      <Header />
      <div className={styles.backGroundIamge}>
        <div className={styles.container}>
          {/* part.1 */}
          <div className={styles.intro}>
            {/* text,button */}
            <div className={styles.introTextButton}>
              {/* text */}
              <div>
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
                src="/Images/home/computerWoman.svg"
                alt="illu"
              ></img>
            </div>
          </div>

          {/* part.2 */}
          <div className={styles.content}>
            {/* shopNow */}
            <div className={styles.shopNow}>
              {/* leftIllu */}
              <div>
                <img
                  className={styles.shopNowLeft}
                  src="/Images/home/resourceVisibility.svg"
                  alt="illu"
                ></img>
              </div>

              {/* rightText */}
              <div className={styles.shopNowRight}>
                <span>2text</span>
              </div>
            </div>

            {/* postNow */}
            <div className={styles.postNow}>
              {/* leftText */}
              <div className={styles.postNowLeft}>
                <span>2text</span>
              </div>
              {/* rightIllu */}
              <div>
                <img
                  className={styles.postNowRight}
                  src="/Images/home/resourceShare.svg"
                  alt="illu"
                ></img>
              </div>
            </div>

            {/* profiletNow */}
            <div className={styles.profileNow}>
              {/* leftIllu */}
              <div>
                <img
                  className={styles.profileNowLeft}
                  src="/Images/home/profile.svg"
                  alt="illu"
                ></img>
              </div>

              {/* rightText */}
              <div className={styles.profileNowRight}>
                <span>2text</span>
              </div>
            </div>
          </div>

          {/* part.3 */}
          <div className={styles.wrapUp}>
            {/* topText */}
            <div className={styles.wrapUpText}>
              <span>text</span>
              <br />
              <span>text</span>
            </div>

            {/* bottomIllu */}
            <div>
              <img
                className={styles.wrapUpImg}
                src="/Images/home/earth.svg"
                alt="illu"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
