import React from "react";
import styles from "./home.module.css";
import Header from "../../header/header";
import { Link } from "react-router-dom";

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
          <div className={styles.partOne}>
            {/* text,button */}
            <div className={styles.partOneTextButton}>
              {/* text */}
              <div>
                {/* mainTitle */}
                <div>
                  <span className={styles.partOneMainBigText}>Resource</span>
                  <span className={styles.partOneMainSmallText}>Exchange</span>

                  <div className={styles.partOneText}>
                    <span className={styles.partOneMainSmallTextBottom}>
                      For The
                    </span>
                    <span className={styles.partOneMainBigText}>
                      Resourceful
                    </span>
                  </div>
                </div>
                {/* subTitle */}
                <div>
                  <span className={styles.partOneSubText}>
                    Transform how you source, procure, and
                  </span>
                  <span className={styles.partOneSubText}>
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
            <img
              className={styles.partOneImage}
              src="/Images/home/computerWoman.svg"
              alt="illu"
            />
          </div>

          {/* part.2 */}
          <div className={styles.partTwo}>
            {/* shopNow */}
            <div className={styles.shopNow}>
              {/* Img */}
              <img
                className={styles.shopNowImg}
                src="/Images/home/resourceVisibility.svg"
                alt="illu"
              ></img>

              {/* Text */}
              <div>
                <span className={styles.shopNowMainText}>물품 가시성 확보</span>
                <span className={styles.shopNowSubText}>
                  유후를 이용해 하나의 플랫폼에서 빠르고 효율적으로
                </span>
                <span className={styles.shopNowSubText}>
                  게시물 업로드, 물품 확인 및 거래를 할 수 있습니다.
                </span>
                <Link to="/Shop">
                  <div>
                    <span className={styles.shopNowbutton}>shopNow</span>
                    <span>img</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* postNow */}
            <div className={styles.postNow}>
              {/* Text */}
              <div className={styles.postNowText}>
                <span>2text</span>
              </div>
              {/* Img */}

              <img
                className={styles.postNowImg}
                src="/Images/home/resourceShare.svg"
                alt="illu"
              ></img>
            </div>

            {/* profiletNow */}
            <div className={styles.profileNow}>
              {/* img */}
              <img
                className={styles.profileNowImg}
                src="/Images/home/profile.svg"
                alt="illu"
              ></img>

              {/* Text */}
              <div className={styles.profileNowText}>
                <span>2text</span>
              </div>
            </div>
          </div>

          {/* part.3 */}
          <div className={styles.partThree}>
            {/* Text */}
            <div className={styles.partThreeText}>
              <h1 className={styles.partThreemainTitle}>
                Connect to a larger world of resources
              </h1>

              <div>
                <span>
                  재사용 및 유휴 자원 공유를 통해 자원의 지속적인 순환을
                  촉진합니다.
                </span>
                <span>
                  방치 혹은 폐기되는 유휴 자원이 없는 미래를 만들어갑니다.
                </span>
              </div>
            </div>

            {/* Img */}
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
