import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import EditProfile from "./editProfile/editProfile";
import MyPost from "./myPost/mypost";
import useLocalStorage from "./useLocalStorage";
import BookMark from "./myPost/bookMarkPost";
import WaitStatus from "./tansStatus/waitStatus";
import ProgressStatus from "./tansStatus/progressStatus";
import CompletStatus from "./tansStatus/completStatus";
import SentStatus from "./requestStatus/sentStatus";
import ReceivedStatus from "./requestStatus/receivedStatus";
import { MdLocationOn, MdPhone } from "react-icons/md";

const Profile = (props) => {
  const userInfo = {
    name: "testName",
    adress: "testAdress",
    phone: "testPhone",
    photoSrc: "",
  };

  //웹 스토리지 저장 커스텀 훅 호출
  const [call, setCall] = useLocalStorage("call", "MyPost");

  //컴포넌트 호출
  const callComponent = (props) => {
    switch (props) {
      // 게시물 보기-> 내 게시물
      case "MyPost":
        return <MyPost />;

      //게시물 보기 -> 찜한 게시물
      case "BookMark":
        return <BookMark />;

      //거래현황 -> 거래 대기 중
      case "WaitStatus":
        return <WaitStatus />;

      //거래현황 -> 거래 진행 중
      case "ProgressStatus":
        return <ProgressStatus />;

      //거래현황 -> 거래 완료
      case "CompletStatus":
        return <CompletStatus />;

      //요청현황 -> 대기 요청
      case "SentStatus":
        return <SentStatus />;

      //요청현황 -> 받은 요청
      case "ReceivedStatus":
        return <ReceivedStatus />;

      //프로필 수정
      case "EditProfile":
        return <EditProfile />;

      default:
        return <MyPost />;
    }
  };

  useEffect(() => {
    //첫 렌더링 할때만 회원정보 불러오기
  }, []);

  return (
    <div className={styles.container}>
      {/* header */}
      <Header />
      <div className={styles.backGroundIamgeHeader} />

      {/* contents */}
      <div className={styles.displayFlex}>
        {/* 회원정보 + 메뉴 */}
        <div className={styles.userKategorie}>
          {/* 회원정보 */}
          <div className={styles.userInfo}>
            {/* 사진,이름 */}
            <div className={styles.userInfoTop}>
              <img
                className={styles.userPhoto}
                src="/Images/header/logo.png"
                alt="logo"
              ></img>
              <span className={styles.userName}>{userInfo.name}</span>
            </div>

            {/* 주소, 전화번호 */}

            <div
              className={[
                styles.userInfoBottom,
                styles.userInfoBottomMargin,
              ].join(" ")}
            >
              <MdLocationOn className={styles.userInfoIcon} />
              <sapn className={styles.userInfoText}>{userInfo.adress}</sapn>
            </div>
            <div className={styles.userInfoBottom}>
              <MdPhone className={styles.userInfoIcon} />
              <sapn className={styles.userInfoText}>{userInfo.phone}</sapn>
            </div>
          </div>

          {/* 선 */}
          <div className={styles.kategorieLine} />

          {/* 카테고리 */}
          <div className={styles.kategorie}>
            {/* 메뉴 */}
            <div className={styles.menu}>
              {/* 게시물 보기 */}
              <div className={styles.menuTitleMargin}>
                {/* 메인제목 */}
                <span
                  className={
                    call === "MyPost" || call === "BookMark"
                      ? styles.menuTitle
                      : styles.menuTitleDefault
                  }
                  onClick={() => setCall("MyPost")}
                >
                  게시물 보기
                </span>

                {/* 서브제목 */}
                <div
                  className={
                    call === "MyPost" || call === "BookMark"
                      ? styles.menuSub
                      : styles.displayNone
                  }
                >
                  {console.log(call)}
                  <div
                    className={[
                      styles.menuSubMargin,
                      styles.cursorPointer,
                    ].join(" ")}
                    onClick={() => setCall("MyPost")}
                  >
                    내 게시물
                  </div>
                  <div
                    className={styles.cursorPointer}
                    onClick={() => setCall("BookMark")}
                  >
                    찜한 게시물
                  </div>
                </div>
              </div>

              {/* 거래현황 */}
              <div className={styles.menuTitleMargin}>
                {/* 메인제목 */}
                <span
                  className={
                    call === "WaitStatus" ||
                    call === "ProgressStatus" ||
                    call === "CompletStatus"
                      ? styles.menuTitle
                      : styles.menuTitleDefault
                  }
                  onClick={() => setCall("WaitStatus")}
                >
                  거래현황
                </span>

                {/* 서브제목 */}
                <div
                  className={
                    call === "WaitStatus" ||
                    call === "ProgressStatus" ||
                    call === "CompletStatus"
                      ? styles.menuSub
                      : styles.displayNone
                  }
                >
                  <div
                    className={[
                      styles.menuSubMargin,
                      styles.cursorPointer,
                    ].join(" ")}
                    onClick={() => setCall("WaitStatus")}
                  >
                    거래 대기
                  </div>
                  <div
                    className={[
                      styles.menuSubMargin,
                      styles.cursorPointer,
                    ].join(" ")}
                    onClick={() => setCall("ProgressStatus")}
                  >
                    거래 중
                  </div>
                  <div
                    className={styles.cursorPointer}
                    onClick={() => setCall("CompletStatus")}
                  >
                    거래 완료
                  </div>
                </div>
              </div>

              {/* 요청현황 */}
              <div className={styles.menuTitleMargin}>
                {/* 메인제목 */}
                <span
                  className={
                    call === "SentStatus" || call === "ReceivedStatus"
                      ? styles.menuTitle
                      : styles.menuTitleDefault
                  }
                  onClick={() => setCall("SentStatus")}
                >
                  요청현황
                </span>

                {/* 서브제목 */}
                <div
                  className={
                    call === "SentStatus" || call === "ReceivedStatus"
                      ? styles.menuSub
                      : styles.displayNone
                  }
                >
                  {console.log(call)}
                  <div
                    className={[
                      styles.menuSubMargin,
                      styles.cursorPointer,
                    ].join(" ")}
                    onClick={() => setCall("SentStatus")}
                  >
                    대기요청
                  </div>
                  <div
                    className={styles.cursorPointer}
                    onClick={() => setCall("ReceivedStatus")}
                  >
                    받은요청
                  </div>
                </div>
              </div>
            </div>

            {/* 정보 수정 및 로그아웃 */}
            <div className={styles.etc}>
              <div
                className={[styles.edit, styles.cursorPointer].join(" ")}
                onClick={() => setCall("EditProfile")}
              >
                프로필 수정
              </div>
              <div className={styles.logout}>로그아웃</div>
            </div>
          </div>
        </div>
        {/* 게시물 보드 */}
        <div className={styles.posts}>{callComponent(call)}</div>
      </div>

      {/* footer */}
      <div className={styles.bottomContainer}>
        <div className={styles.backGroundIamgeFoot} />
        <img
          className={styles.footImg}
          src="/Images/myPage/woman.svg"
          alt="illu"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
