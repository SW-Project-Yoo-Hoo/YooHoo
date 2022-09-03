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
      <div className={styles.backGroundImage}>
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

                  <div className={styles.introText}>
                    <span className={styles.introMainSmallTextBottom}>
                      For The
                    </span>
                    <span className={styles.introMainBigText}>Resourceful</span>
                  </div>
                </div>

                {/* subTitle */}
                <div>
                  <span className={styles.introSubText}>
                    Transform how you source, procure, and
                  </span>
                  <span className={styles.introSubText}>
                    use resources with YooHoo.
                  </span>
                </div>
              </div>

              {/* button */}
              <div>
                <button className={styles.buttonStyle} onClick={pageTransform}>
                  Read More
                </button>
              </div>
            </div>

            {/* img */}
            <div>
              <img
                className={styles.introImage}
                src="/Images/home/computerWoman.svg"
                alt="illu"
              />
            </div>
          </div>

          {/* part.2 */}
          <div className={styles.partTwo}>
            {/* shopNow */}
            <div className={styles.shopNow}>
              {/* Img */}
              <div>
                <img
                  className={styles.shopNowImg}
                  src="/Images/home/resourceVisibility.svg"
                  alt="illu"
                ></img>
              </div>

              {/* Text */}
              <div className={styles.shopNowText}>
                <span>2text</span>
              </div>
            </div>

            {/* postNow */}
            <div className={styles.postNow}>
              {/* Text */}
              <div className={styles.postNowText}>
                <span>2text</span>
              </div>
              {/* Img */}
              <div>
                <img
                  className={styles.postNowImg}
                  src="/Images/home/resourceShare.svg"
                  alt="illu"
                ></img>
              </div>
            </div>

            {/* profiletNow */}
            <div className={styles.profileNow}>
              {/* img */}
              <div>
                <img
                  className={styles.profileNowImg}
                  src="/Images/home/profile.svg"
                  alt="illu"
                ></img>
              </div>

              {/* Text */}
              <div className={styles.profileNowText}>
                <span>2text</span>
              </div>
            </div>
          </div>

          {/* part.3 */}
          <div className={styles.partThree}>
            {/* topText */}
            <div className={styles.partThreeText}>
              <span>text</span>
              <br />
              <span>text</span>
            </div>

            {/* bottomIllu */}
            <div>
              <img
                className={styles.partThreeImg}
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
